import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOpenedImmediatelyComponent } from './modal-opened-immediately.component';

describe('ModalOpenedImmediatelyComponent', () => {
  let component: ModalOpenedImmediatelyComponent;
  let fixture: ComponentFixture<ModalOpenedImmediatelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOpenedImmediatelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOpenedImmediatelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
