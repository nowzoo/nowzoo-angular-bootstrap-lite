import {
  Directive,
  AfterViewInit,
  OnDestroy,
  TemplateRef,
  Renderer2,
  ViewContainerRef,
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  ElementRef,
  EmbeddedViewRef
} from '@angular/core';


import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
declare let jQuery: any;


import { NzbDynamicContentComponent } from './nzb-dynamic-content.component';


export abstract class NzbAbstractPopup implements AfterViewInit, OnDestroy {
  protected events: EventEmitter<Event> = new EventEmitter();

  protected abstract bsComponentName: string;
  protected abstract getInputTitleTemplate(): TemplateRef<any> | null;
  protected abstract getInputContentTemplate(): TemplateRef<any> | null;
  protected abstract getInputPlacement(): ((tooltipEl: any, targetEl: any) => string) | null

  private titleComponentRef: ComponentRef<NzbDynamicContentComponent> | null = null;
  private contentComponentRef: ComponentRef<NzbDynamicContentComponent> | null = null;

  protected statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');


  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver
  ) {}




  private getEventName(type): string {
    return type + '.bs.' + this.bsComponentName;
  }

  private getEventNames(): string[] {
    const types = ['show', 'hide', 'shown', 'hidden', 'inserted'];
    return types.map((type: string) => {
      return this.getEventName(type);
    })
  }

  private initPopup() {
    const $el = jQuery(this.elementRef.nativeElement);
    const eventNames = this.getEventNames().join(' ');
    const factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
    const inputTitle = this.getInputTitleTemplate();
    const inputContentTemplate = this.getInputContentTemplate();
    const bsConfig: any = {};
    const inputPlacement = this.getInputPlacement();
    let viewRef: EmbeddedViewRef<any>;

    if (inputPlacement) {
      bsConfig.placement = inputPlacement;
    }

    if (! $el.attr('title')){
      if ( inputTitle instanceof TemplateRef) {
        viewRef = inputTitle.createEmbeddedView(this);
        this.appRef.attachView(viewRef);
        this.titleComponentRef = factory.create(this.viewContainer.injector, [viewRef.rootNodes]);
        this.appRef.attachView(this.titleComponentRef.hostView);
        bsConfig.title = this.titleComponentRef.location.nativeElement;
        bsConfig.html = true;
      }
    }

    if ( inputContentTemplate instanceof TemplateRef) {
      viewRef = inputContentTemplate.createEmbeddedView(this);
      this.appRef.attachView(viewRef);
      this.contentComponentRef = factory.create(this.viewContainer.injector, [viewRef.rootNodes]);
      this.appRef.attachView(this.contentComponentRef.hostView);
      bsConfig.content = this.contentComponentRef.location.nativeElement;
      bsConfig.html = true;
    }
    $el.on(eventNames, (event: Event) => {
      this.statusSubject.next(event.type);
      this.events.emit(event);
    });
    $el[this.bsComponentName](bsConfig);
    this.statusSubject.next('hidden');
  }



  ngAfterViewInit() {
    setTimeout (() => {
      this.initPopup();
    });
  }

  ngOnDestroy() {
    setTimeout (() => {
      const $el = jQuery(this.elementRef.nativeElement);
      const reallyDispose = () => {
        $el[this.bsComponentName]('dispose');
        if (this.titleComponentRef) {
          this.titleComponentRef.destroy();
        }
        if (this.contentComponentRef) {
          this.contentComponentRef.destroy();
        }
      }
      if (this.statusSubject.value === 'shown') {
        $el.one('hidden.bs.' + this.bsComponentName, () => {
          reallyDispose();
        });
        $el[this.bsComponentName]('hide');
      } else {
        reallyDispose();
      }
    });

  }

  show() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('show');
  }
  hide() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('hide');
  }
  toggle() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('toggle');
  }
  enable() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('enable');
  }
  disable() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('disable');
  }
  toggleEnabled() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('toggleEnabled');
  }
  update() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('update');
  }

  getPopupData() {
    return jQuery(this.elementRef.nativeElement).data('bs.' + this.bsComponentName);
  }

  getStatus(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  getEvents(): Observable<Event> {
    return this.events.asObservable();
  }

}
