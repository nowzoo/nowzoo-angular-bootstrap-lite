import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleUserInputDemoComponent } from './modal-example-user-input-demo.component';

describe('ModalExampleUserInputDemoComponent', () => {
  let component: ModalExampleUserInputDemoComponent;
  let fixture: ComponentFixture<ModalExampleUserInputDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleUserInputDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleUserInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
