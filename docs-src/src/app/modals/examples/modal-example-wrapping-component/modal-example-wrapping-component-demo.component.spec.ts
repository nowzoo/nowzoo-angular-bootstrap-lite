import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleWrappingComponentDemoComponent } from './modal-example-wrapping-component-demo.component';

describe('ModalExampleWrappingComponentDemoComponent', () => {
  let component: ModalExampleWrappingComponentDemoComponent;
  let fixture: ComponentFixture<ModalExampleWrappingComponentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleWrappingComponentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleWrappingComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
