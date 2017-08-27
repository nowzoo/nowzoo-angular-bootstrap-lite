import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsKeyboardDemoComponent } from './modal-options-keyboard-demo.component';

describe('ModalOptionsKeyboardDemoComponent', () => {
  let component: ModalOptionsKeyboardDemoComponent;
  let fixture: ComponentFixture<ModalOptionsKeyboardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsKeyboardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsKeyboardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
