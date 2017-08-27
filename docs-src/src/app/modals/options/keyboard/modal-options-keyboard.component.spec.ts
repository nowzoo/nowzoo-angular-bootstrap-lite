import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsKeyboardComponent } from './modal-options-keyboard.component';

describe('ModalOptionsKeyboardComponent', () => {
  let component: ModalOptionsKeyboardComponent;
  let fixture: ComponentFixture<ModalOptionsKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
