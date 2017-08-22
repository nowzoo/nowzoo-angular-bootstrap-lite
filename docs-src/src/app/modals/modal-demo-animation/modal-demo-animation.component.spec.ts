import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoAnimationComponent } from './modal-demo-animation.component';

describe('ModalDemoAnimationComponent', () => {
  let component: ModalDemoAnimationComponent;
  let fixture: ComponentFixture<ModalDemoAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
