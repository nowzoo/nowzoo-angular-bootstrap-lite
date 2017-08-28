import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleWrappingComponentComponent } from './modal-example-wrapping-component.component';

describe('ModalExampleWrappingComponentComponent', () => {
  let component: ModalExampleWrappingComponentComponent;
  let fixture: ComponentFixture<ModalExampleWrappingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleWrappingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleWrappingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
