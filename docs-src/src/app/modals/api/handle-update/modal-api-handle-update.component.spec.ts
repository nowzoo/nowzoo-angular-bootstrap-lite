import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiHandleUpdateComponent } from './modal-api-handle-update.component';

describe('ModalApiHandleUpdateComponent', () => {
  let component: ModalApiHandleUpdateComponent;
  let fixture: ComponentFixture<ModalApiHandleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiHandleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiHandleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
