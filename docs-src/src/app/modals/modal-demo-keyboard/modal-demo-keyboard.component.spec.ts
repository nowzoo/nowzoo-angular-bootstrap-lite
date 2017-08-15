import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoKeyboardComponent } from './modal-demo-keyboard.component';

describe('ModalDemoKeyboardComponent', () => {
  let component: ModalDemoKeyboardComponent;
  let fixture: ComponentFixture<ModalDemoKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
