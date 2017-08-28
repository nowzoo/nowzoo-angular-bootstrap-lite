import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleUserInputComponent } from './modal-example-user-input.component';

describe('ModalExampleUserInputComponent', () => {
  let component: ModalExampleUserInputComponent;
  let fixture: ComponentFixture<ModalExampleUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
