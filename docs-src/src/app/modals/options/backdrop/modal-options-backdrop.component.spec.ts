import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsBackdropComponent } from './modal-options-backdrop.component';

describe('ModalOptionsBackdropComponent', () => {
  let component: ModalOptionsBackdropComponent;
  let fixture: ComponentFixture<ModalOptionsBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
