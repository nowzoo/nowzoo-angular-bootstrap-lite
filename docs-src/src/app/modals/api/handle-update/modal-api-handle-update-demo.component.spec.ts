import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiHandleUpdateDemoComponent } from './modal-api-handle-update-demo.component';

describe('ModalApiHandleUpdateDemoComponent', () => {
  let component: ModalApiHandleUpdateDemoComponent;
  let fixture: ComponentFixture<ModalApiHandleUpdateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiHandleUpdateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiHandleUpdateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
