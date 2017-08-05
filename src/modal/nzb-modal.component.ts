import {
	Component,
	AfterViewInit,
	Input,
	Output,
	ViewChild,
	ElementRef,
	EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NzbModalOptions } from './nzb-modal-options';
import { NzbModal } from './nzb-modal';
import { NzbModalStatus } from './nzb-modal-status.enum';

declare let jQuery: any;

@Component({
	selector: 'nzb-modal',
	template: `
		<div #modalElement tabindex="-1" role="dialog">
			<div #dialogElement role="document">
				<div class="modal-content">
					<ng-content></ng-content>
				</div>
			</div>
		</div>`

})
export class NzbModalComponent implements AfterViewInit {
	@ViewChild('modalElement') modalElement: ElementRef;
	@ViewChild('dialogElement') dialogElement: ElementRef;
	@Output() initialized: EventEmitter<any> = new EventEmitter();

	ngAfterViewInit() {
		setTimeout(() => {
			this.initialized.next()
		})
	}
}
