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
  ElementRef,
  EmbeddedViewRef,
  NgZone
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

declare let jQuery: any;


import { NzbDynamicContentComponent } from './nzb-dynamic-content.component';
import { NzbPopupOptions } from '../common/nzb-popup-options.class';
import { NzbPopoverOptions } from '../popover/nzb-popover-options.class';
import { NzbTooltipOptions } from '../tooltip/nzb-tooltip-options.class';


export abstract class NzbAbstractPopup implements AfterViewInit, OnDestroy {


  protected abstract bsComponentName: string;
  protected abstract getInputTitleTemplate(): TemplateRef<any> | null;
  protected abstract getInputContentTemplate(): TemplateRef<any> | null;
  protected abstract getInputOptions(): NzbPopupOptions | null;

  protected eventsSubject: Subject<Event> = new Subject();
  protected statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');

  private titleComponentRef: ComponentRef<NzbDynamicContentComponent> | null = null;
  private contentComponentRef: ComponentRef<NzbDynamicContentComponent> | null = null;

  protected enabledSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);

  get enabled(): Observable<boolean> {
    return this.enabledSubject.asObservable();
  }

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  get data(): any {
    return jQuery(this.elementRef.nativeElement).data('bs.' + this.bsComponentName);
  }


  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver,
    private ngZone: NgZone,
    private defaultOptions: NzbPopupOptions
  ) { }



  protected getEventNames(): string {
    const events = ['inserted', 'show', 'shown', 'hide', 'hidden'].map((type:string) => {
      return type + '.bs.' + this.bsComponentName;
    })
    return events.join(' ');
  }


  private normalizeOptions() {
    const appOptions: NzbPopupOptions = new NzbPopupOptions()
    let inputOptions = this.getInputOptions();
    let defaultOptions = this.defaultOptions;
    if (! inputOptions) {
      inputOptions = {};
    }
    if (! defaultOptions) {
      defaultOptions = {};
    }

    return Object.assign({}, appOptions, defaultOptions, inputOptions);
  }

  private initPopup() {
    const $el = jQuery(this.elementRef.nativeElement);
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
    this.ngZone.runOutsideAngular(() => {
      $el.on(this.getEventNames(), (event: Event) => {
        this.ngZone.run(() => {
          this.eventsSubject.next(event);
          this.statusSubject.next(event.type);
        })
      })
    })
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

        if (this.statusSubject.value === 'shown'  && this.normalizeOptions().animateOnDestroy) {
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
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('toggle');
  }
  show(): void {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('show');
  }
  hide(): void {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]( 'hide');
  }


  enable() {
    this.ngZone.runOutsideAngular(() => {
      jQuery(this.elementRef.nativeElement)[this.bsComponentName]('enable');
      this.ngZone.run(() => {
        this.enabledSubject.next(true);
      });
    });
  }

  disable() {
    this.ngZone.runOutsideAngular(() => {
      jQuery(this.elementRef.nativeElement)[this.bsComponentName]('disable');
      this.ngZone.run(() => {
        this.enabledSubject.next(false);
      });
    });

  }
  toggleEnabled() {
    const enabledNext = ! this.enabledSubject.value;
    this.ngZone.runOutsideAngular(() => {
      jQuery(this.elementRef.nativeElement)[this.bsComponentName]('toggleEnabled');
      this.ngZone.run(() => {
        this.enabledSubject.next(enabledNext);
      });
    });
  }
  update() {
    jQuery(this.elementRef.nativeElement)[this.bsComponentName]('update');
  }
}
