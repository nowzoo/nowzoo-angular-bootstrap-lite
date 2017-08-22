import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoBackdropComponent } from './modal-demo-backdrop.component';

describe('ModalDemoBackdropComponent', () => {
  let component: ModalDemoBackdropComponent;
  let fixture: ComponentFixture<ModalDemoBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
