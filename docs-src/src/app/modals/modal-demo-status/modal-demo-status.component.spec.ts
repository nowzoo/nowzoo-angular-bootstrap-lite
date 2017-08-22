import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoStatusComponent } from './modal-demo-status.component';

describe('ModalDemoStatusComponent', () => {
  let component: ModalDemoStatusComponent;
  let fixture: ComponentFixture<ModalDemoStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
