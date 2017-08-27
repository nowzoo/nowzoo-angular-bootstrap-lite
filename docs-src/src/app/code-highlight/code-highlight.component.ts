import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
declare const hljs: any;

@Component({
  selector: 'code-highlight',
  template: '<div class="code-highlight" #code></div>',
})
export class CodeHighlightComponent implements AfterViewInit {
  @Input() lang: string;
  @Input() content: string;
  @Input() inline: boolean = false;
  @ViewChild('code') codeEl: ElementRef;
  code: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.content = typeof this.content === 'string' ? this.content.trim() : '';
    if (this.inline){
      hljs.configure({useBR: false});
      this.renderer.addClass(this.el.nativeElement, 'inline');
    } else {
      hljs.configure({useBR: true});
    }
    this.code = hljs.highlight(this.lang, this.content.trim());
    this.renderer.addClass(this.codeEl.nativeElement, this.lang);
    this.renderer.addClass(this.codeEl.nativeElement, 'hljs');
    this.codeEl.nativeElement.innerHTML = this.code.value;
  }

}
