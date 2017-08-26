import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
declare const hljs: any;

@Component({
  selector: 'code-highlight',
  template: '<pre><code #code></code></pre>',
})
export class CodeHighlightComponent implements AfterViewInit {
  @Input() lang: string;
  @Input() content: string;
  @ViewChild('code') codeEl: ElementRef;
  code: any;
  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.content = typeof this.content === 'string' ? this.content.trim() : '';
    this.code = hljs.highlight(this.lang, this.content.trim());
    this.renderer.addClass(this.codeEl.nativeElement, this.lang);
    this.renderer.addClass(this.codeEl.nativeElement, 'hljs');
    this.codeEl.nativeElement.innerHTML = this.code.value;
  }

}
