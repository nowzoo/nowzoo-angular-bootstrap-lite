import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[codeHighlight]'
})
export class CodeHighlightDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {

    console.log('ngOnInit', this.elementRef.nativeElement.innerHTML)
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.elementRef.nativeElement.innerHTML)
  }

}
