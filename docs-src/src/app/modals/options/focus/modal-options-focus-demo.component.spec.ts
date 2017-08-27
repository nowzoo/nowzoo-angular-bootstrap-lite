import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsFocusDemoComponent } from './modal-options-focus-demo.component';

describe('ModalOptionsFocusDemoComponent', () => {
  let component: ModalOptionsFocusDemoComponent;
  let fixture: ComponentFixture<ModalOptionsFocusDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsFocusDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsFocusDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
