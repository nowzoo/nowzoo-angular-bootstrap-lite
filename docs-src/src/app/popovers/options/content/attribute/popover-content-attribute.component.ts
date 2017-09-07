import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-content-attribute',
  templateUrl: './popover-content-attribute.component.html',
  styleUrls: ['./popover-content-attribute.component.scss']
})
export class PopoverContentAttributeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  snip = `
<button class="btn btn-outline-info"
  nzbPopover
  title="Popover Title"
  data-content="The content of this popover was set with the <code>data-content</code> attribute!"
  data-html="true">
  data-content Attribute
</button>
  `
  html=`<p>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Popover Title"
    data-content="The content of this popover was set with the <code>data-content</code> attribute!"
    data-html="true">
    data-content Attribute
  </button>
</p>`

}
