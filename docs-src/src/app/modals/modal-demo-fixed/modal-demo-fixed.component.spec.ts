import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoFixedComponent } from './modal-demo-fixed.component';

describe('ModalDemoFixedComponent', () => {
  let component: ModalDemoFixedComponent;
  let fixture: ComponentFixture<ModalDemoFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
