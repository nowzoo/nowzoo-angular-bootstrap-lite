import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-example-wrapped-component-demo',
  templateUrl: './modal-example-wrapped-component-demo.component.html',
  styles: []
})
export class ModalExampleWrappedComponentDemoComponent {
  @Input() confirmMessage: string;
  @Output() onConfirmed: EventEmitter<boolean> = new EventEmitter();
  confirmed: boolean = false;
}
