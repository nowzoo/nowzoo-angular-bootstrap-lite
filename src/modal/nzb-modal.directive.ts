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
  EventEmitter
} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import { NzbDynamicContentComponent } from '../common/nzb-dynamic-content.component';


declare let jQuery: any;

@Directive({
  selector: '[nzbModal]',
  exportAs: 'nzbModal'
})
export class NzbModalDirective  implements  OnDestroy {

  private events: EventEmitter<Event> = new EventEmitter();

  private componentRef: ComponentRef<NzbDynamicContentComponent>;
  private statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');

  constructor(
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnDestroy() {
    this.hide();
  }

  show(){
    if (this.statusSubject.value !== 'uninitialized'){
      return;
    }
    const viewRef = this.templateRef.createEmbeddedView(this);
    const factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
    this.appRef.attachView(viewRef);
    this.componentRef = factory.create(this.viewContainer.injector, [viewRef.rootNodes]);
    this.appRef.attachView(this.componentRef.hostView);
    this.renderer.appendChild(document.body, this.componentRef.location.nativeElement);
    const $el = jQuery('.modal', this.componentRef.location.nativeElement);
    $el.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', (event: Event) => {
      this.statusSubject.next(event.type);
      this.events.emit(event);
      switch(event.type) {
        case 'hidden':
          $el.off('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal');
          this.componentRef.destroy();
          this.statusSubject.next('uninitialized');
          break;
      }
    });
    $el.modal({show: true});
  }

  hide(): void {
    if (this.statusSubject.value !== 'shown'){
      return;
    }
    jQuery('.modal', this.componentRef.location.nativeElement).modal('hide');
  }

  shown(): Promise<void> {
    return new Promise<void>((resolve: any) => {
      this.statusSubject.filter((status) => status === 'shown').take(1).subscribe(resolve);
    })
  }

  hidden(): Promise<void> {
    return new Promise<void>((resolve: any) => {
      this.statusSubject.filter((status) => status === 'hidden').take(1).subscribe(resolve);
    })
  }

  handleUpdate(): void {
    if (! this.componentRef){
      return;
    }
    jQuery('.modal', this.componentRef.location.nativeElement).modal('handleUpdate');
  }

  getStatus(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  getEvents(): Observable<Event> {
    return this.events.asObservable();
  }
}
