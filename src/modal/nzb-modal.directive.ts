import {
  Directive,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef,
  ApplicationRef,
  Renderer2,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  NgZone
} from '@angular/core';


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import { NzbDynamicContentComponent } from '../common/nzb-dynamic-content.component';
import { NzbAbstractBootstrap } from '../common/nzb-abstract-bootstrap.class';



declare let jQuery: any;

@Directive({
  selector: '[nzbModal]',
  exportAs: 'nzbModal'
})
export class NzbModalDirective extends NzbAbstractBootstrap  implements  OnDestroy {

  protected bsComponentName: string = 'modal';
  private componentRef: ComponentRef<NzbDynamicContentComponent>;
  private instantiated: boolean =  false;
  constructor(
    ngZone: NgZone,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver
  ) {
    super(ngZone)
  }

  private createAndAppendModal(): any {
    const viewRef = this.templateRef.createEmbeddedView(this);
    const factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
    this.appRef.attachView(viewRef);
    this.componentRef = factory.create(this.viewContainer.injector, [viewRef.rootNodes]);
    this.appRef.attachView(this.componentRef.hostView);
    this.renderer.appendChild(document.body, this.componentRef.location.nativeElement);
    this.instantiated = true;
    return jQuery('.modal', this.componentRef.location.nativeElement);
  }

  ngOnDestroy() {
    this.hide();
  }

  show(): Promise<void> {
    return new Promise<void>((resolve: any) => {
      if (this.instantiated){
        throw new Error('modal already instantiated!')
      }
      const $el = this.createAndAppendModal();
      this.initBootsrapListeners($el);
      this.eventsSubject.filter((event: Event) => 'hidden' === event.type).take(1).subscribe(() =>{
        $el.off('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal');
        this.componentRef.destroy();
        this.instantiated = false;
        resolve();
      })
      $el.modal({show: true});
    })
  }

  hide(): Promise<void> {
    return new Promise<void>((resolve: any) => {
      if (! this.instantiated){
        return resolve();
      }
      this.eventsSubject.filter((event: Event) => 'hidden' === event.type).take(1).subscribe(() =>{
        resolve();
      });
      jQuery('.modal', this.componentRef.location.nativeElement).modal('hide');
    })

  }

  handleUpdate(): void {
    if (! this.instantiated){
      return;
    }
    jQuery('.modal', this.componentRef.location.nativeElement).modal('handleUpdate');
  }


}
