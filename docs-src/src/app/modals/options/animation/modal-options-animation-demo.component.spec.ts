import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsAnimationDemoComponent } from './modal-options-animation-demo.component';

describe('ModalOptionsAnimationDemoComponent', () => {
  let component: ModalOptionsAnimationDemoComponent;
  let fixture: ComponentFixture<ModalOptionsAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
