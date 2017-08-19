import { Directive, Input, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[permalinked]'
})
export class PermalinkedDirective implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit(){

    setTimeout(() => {
      const hash = this.elementRef.nativeElement.id || null;
      const url = window.location.href.replace(window.location.hash, '') + (hash ? '#' + hash : '');
      const a = this.renderer.createElement('a');
      this.renderer.setAttribute(a, 'href', url);
      this.renderer.setAttribute(a, 'title', 'Permalink (' +  url + ')');
      this.renderer.setProperty(a, 'innerHTML', '<i class="fa fa-link"></i><span class="sr-only">Permalink to ' + url + '</span>')
      this.renderer.addClass(this.elementRef.nativeElement, 'permalinked');
      this.renderer.appendChild(this.elementRef.nativeElement, a);
    })
  }

}
