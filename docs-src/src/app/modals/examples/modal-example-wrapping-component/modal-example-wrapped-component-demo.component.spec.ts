import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleWrappedComponentDemoComponent } from './modal-example-wrapped-component-demo.component';

describe('ModalExampleWrappedComponentDemoComponent', () => {
  let component: ModalExampleWrappedComponentDemoComponent;
  let fixture: ComponentFixture<ModalExampleWrappedComponentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleWrappedComponentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleWrappedComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
