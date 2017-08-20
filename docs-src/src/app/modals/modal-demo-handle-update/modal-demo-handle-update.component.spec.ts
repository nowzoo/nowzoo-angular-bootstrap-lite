import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoHandleUpdateComponent } from './modal-demo-handle-update.component';

describe('ModalDemoHandleUpdateComponent', () => {
  let component: ModalDemoHandleUpdateComponent;
  let fixture: ComponentFixture<ModalDemoHandleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoHandleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoHandleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
