import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gist-embed',
  template:`
    <iframe #iframe type="text/javascript" width="100%" frameborder="0"></iframe>
  `,
})
export class GistEmbedComponent  {
  @ViewChild('iframe') iframe:ElementRef;
  @Input() gistId;
  @Input() file;

 ngAfterViewInit() {
   this.iframe.nativeElement.id = 'gist-' + this.gistId + this.file + Math.random();
   let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
   let url = 'https://gist.github.com/' + this.gistId + '.js';
   if (this.file){
     url = url + '?file=' + this.file
   }



   let content = `
     <html>
       <head>
         <base target="_parent">
       </head>
       <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')
       .style.height=document.body.scrollHeight + 'px'">
       <script type="text/javascript" src="${url}"></script>
       </body>
     </html>
   `;
   doc.open();
   doc.write(content);
   doc.close();
 }

}
