import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoFocusComponent } from './modal-demo-focus.component';

describe('ModalDemoFocusComponent', () => {
  let component: ModalDemoFocusComponent;
  let fixture: ComponentFixture<ModalDemoFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
