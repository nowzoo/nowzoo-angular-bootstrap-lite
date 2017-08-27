import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsFocusComponent } from './modal-options-focus.component';

describe('ModalOptionsFocusComponent', () => {
  let component: ModalOptionsFocusComponent;
  let fixture: ComponentFixture<ModalOptionsFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
