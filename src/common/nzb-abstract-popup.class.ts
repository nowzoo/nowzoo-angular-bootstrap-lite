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
  EmbeddedViewRef,
  NgZone
} from '@angular/core';


import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
declare let jQuery: any;


import { NzbDynamicContentComponent } from './nzb-dynamic-content.component';
import { NzbAbstractBootstrap } from './nzb-abstract-bootstrap.class';
import { NzbPopupOptions } from '../common/nzb-popup-options.class';
import { NzbPopoverOptions } from '../popover/nzb-popover-options.class';
import { NzbTooltipOptions } from '../tooltip/nzb-tooltip-options.class';


export abstract class NzbAbstractPopup extends NzbAbstractBootstrap implements AfterViewInit, OnDestroy {


  protected abstract getInputTitleTemplate(): TemplateRef<any> | null;
  protected abstract getInputContentTemplate(): TemplateRef<any> | null;
  protected abstract getInputOptions(): NzbPopupOptions | null;

  private titleComponentRef: ComponentRef<NzbDynamicContentComponent> | null = null;
  private contentComponentRef: ComponentRef<NzbDynamicContentComponent> | null = null;

  protected enabledSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);


  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver,
    ngZone: NgZone,
    private defaultOptions: NzbPopupOptions
  ) {
    super(ngZone)
  }


  private normalizedOptions: NzbPopupOptions;

  protected runBsFunc(func: string): void {
    super.runBsFunc(this.elementRef.nativeElement, func);
  }


  protected getEventTypes(): string[] {
    const types = super.getEventTypes();
    types.push('inserted');
    return types;
  }

  private normalizeOptions() {
    const options: NzbPopupOptions = this.bsComponentName === 'tooltip' ?
      new NzbTooltipOptions() : new NzbPopoverOptions();
    let inputOptions = this.getInputOptions();
    let defaultOptions = this.defaultOptions;
    if (! inputOptions) {
      inputOptions = {};
    }
    if (! defaultOptions) {
      defaultOptions = {};
    }
    if (typeof inputOptions.animation === 'boolean'){
      options.animation = inputOptions.animation;
    } else {
      if (typeof defaultOptions.animation === 'boolean'){
        options.animation = defaultOptions.animation;
      }
    }
    if (typeof inputOptions.animateOnDestroy === 'boolean'){
      options.animateOnDestroy = inputOptions.animateOnDestroy;
    } else {
      if (typeof defaultOptions.animateOnDestroy === 'boolean'){
        options.animateOnDestroy = defaultOptions.animateOnDestroy;
      }
    }
    if (inputOptions.container) {
      options.container = inputOptions.container
    } else {
      if (defaultOptions.container) {
        options.container = defaultOptions.container
      }
    }
    if (inputOptions.delay) {
      options.delay = inputOptions.delay
    } else {
      if (defaultOptions.delay) {
        options.delay = defaultOptions.delay
      }
    }
    if (typeof inputOptions.html === 'boolean'){
      options.html = inputOptions.html;
    } else {
      if (typeof defaultOptions.html === 'boolean'){
        options.html = defaultOptions.html;
      }
    }
    if (inputOptions.placement) {
      options.placement = inputOptions.placement
    } else {
      if (defaultOptions.placement) {
        options.placement = defaultOptions.placement
      }
    }

    if (typeof inputOptions.template === 'string'){
      options.template = inputOptions.template;
    } else {
      if (typeof defaultOptions.template === 'string'){
        options.template = defaultOptions.template;
      }
    }

    if (typeof inputOptions.trigger === 'string'){
      options.trigger = inputOptions.trigger;
    } else {
      if (typeof defaultOptions.trigger === 'string'){
        options.trigger = defaultOptions.trigger;
      }
    }

    if (inputOptions.offset) {
      options.offset = inputOptions.offset
    } else {
      if (defaultOptions.offset) {
        options.offset = defaultOptions.offset
      }
    }

    if (inputOptions.fallbackPlacement) {
      options.fallbackPlacement = inputOptions.fallbackPlacement
    } else {
      if (defaultOptions.fallbackPlacement) {
        options.fallbackPlacement = defaultOptions.fallbackPlacement
      }
    }
    this.normalizedOptions = options;
    return Object.assign({}, this.normalizedOptions);
  }

  private initPopup() {
    const $el = jQuery(this.elementRef.nativeElement);
    const eventNames = this.getEventNames().join(' ');
    const factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
    const inputTitle = this.getInputTitleTemplate();
    const inputContentTemplate = this.getInputContentTemplate();
    const inputOptions = this.getInputOptions();
    const bsConfig:any = this.normalizeOptions();
    let viewRef: EmbeddedViewRef<any>;

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
    this.initBootsrapListeners($el)
    $el[this.bsComponentName](bsConfig);
    this.statusSubject.next('hidden');
  }



  ngAfterViewInit() {
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        this.initPopup();
        this.ngZone.run(() => {});
      });
    })



  }

  ngOnDestroy() {
    setTimeout(() => {
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
      this.ngZone.runOutsideAngular(() => {

        if (this.statusSubject.value === 'shown'  && this.normalizedOptions.animateOnDestroy) {
          $el.one('hidden.bs.' + this.bsComponentName, () => {
            reallyDispose();
            this.ngZone.run( () => {});
          });
          $el[this.bsComponentName]('hide');
        } else {
          reallyDispose();
          this.ngZone.run( () => {});
        }
      })
    })

  }

  toggle(): void {
    this.runBsFunc('toggle');
  }
  show(): void {
    this.runBsFunc('show');
  }
  hide(): void {
    this.runBsFunc( 'hide');
  }


  enable() {
    this.ngZone.runOutsideAngular(() => {
      this.runBsFunc('enable');
      this.ngZone.run(() => {
        this.enabledSubject.next(true);
      });
    });
  }

  disable() {
    this.ngZone.runOutsideAngular(() => {
    this.runBsFunc('disable');
      this.ngZone.run(() => {
        this.enabledSubject.next(false);
      });
    });

  }
  toggleEnabled() {
    const enabledNext = ! this.enabledSubject.value;
    this.ngZone.runOutsideAngular(() => {
      this.runBsFunc('toggleEnabled');
      this.ngZone.run(() => {
        this.enabledSubject.next(enabledNext);
      });
    });
  }
  update() {
    this.runBsFunc('update');
  }







  get enabled(): boolean {
    return this.enabledSubject.value;
  }

  get boostrapComponentData(): any {
    return jQuery(this.elementRef.nativeElement).data('bs.' + this.bsComponentName);
  }

}
