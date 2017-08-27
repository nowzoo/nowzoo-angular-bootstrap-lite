import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsAnimationComponent } from './modal-options-animation.component';

describe('ModalOptionsAnimationComponent', () => {
  let component: ModalOptionsAnimationComponent;
  let fixture: ComponentFixture<ModalOptionsAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
