import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-title-attributes',
  templateUrl: './popover-title-attributes.component.html',
  styleUrls: ['./popover-title-attributes.component.scss']
})
export class PopoverTitleAttributesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  html = `
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Popover Title"
    data-content="The title of this popover was set with the <code>title</code> attribute!"
    data-html="true">
    title Attribute
  </button>
</p>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    data-title="Popover Title"
    data-content="The title of this popover was set with the <code>data-title</code> attribute!"
    data-html="true">
    data-title Attribute
  </button>
</p>
  `
  snip = `
<button class="btn btn-outline-info"
  nzbPopover
  title="Popover Title"
  data-content="The title of this popover was set with the <code>title</code> attribute!"
  data-html="true">
  title Attribute
</button>

  `

}
