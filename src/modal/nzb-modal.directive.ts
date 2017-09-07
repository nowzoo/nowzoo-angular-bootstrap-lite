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

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { NzbDynamicContentComponent } from '../common/nzb-dynamic-content.component';

declare let jQuery: any;

@Directive({
  selector: '[nzbModal]',
  exportAs: 'nzbModal'
})
export class NzbModalDirective  implements  OnDestroy {
  private eventsSubject: Subject<Event> = new Subject();
  private statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');
  private componentRef: ComponentRef<NzbDynamicContentComponent>;

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }
  
  constructor(
    private ngZone: NgZone,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver
  ) {}

  private createAndAppendModal(): any {
    const viewRef = this.templateRef.createEmbeddedView(this);
    const factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
    this.appRef.attachView(viewRef);
    this.componentRef = factory.create(this.viewContainer.injector, [viewRef.rootNodes]);
    this.appRef.attachView(this.componentRef.hostView);
    this.renderer.appendChild(document.body, this.componentRef.location.nativeElement);
    return jQuery('.modal', this.componentRef.location.nativeElement);
  }

  ngOnDestroy() {
    if (this.statusSubject.value === 'shown'){
      this.hide();
    }
  }

  show(): void {
    if (this.statusSubject.value !== 'uninitialized'){
      return;
    }
    const $el = this.createAndAppendModal();
    this.ngZone.runOutsideAngular(() => {
      $el.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', (event:Event) => {
        this.ngZone.run(() => {
          this.eventsSubject.next(event);
          this.statusSubject.next(event.type);
          if (event.type !== 'hidden'){
            return;
          }
          $el.off('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal');
          this.componentRef.destroy();
          this.statusSubject.next('uninitialized');
        })
      });
      $el.modal({show: true});
    })
  }

  hide(): void {
    if (this.statusSubject.value !== 'shown'){
      return;
    }
    jQuery('.modal', this.componentRef.location.nativeElement).modal('hide');
  }

  toggle(): void {
    if (this.statusSubject.value === 'shown'){
      this.hide();
    } else {
      this.show();
    }
  }

  handleUpdate(): void {
    if (this.statusSubject.value !== 'shown'){
      return;
    }
    jQuery('.modal', this.componentRef.location.nativeElement).modal('handleUpdate');
  }



}
