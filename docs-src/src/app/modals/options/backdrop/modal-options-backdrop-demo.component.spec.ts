import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsBackdropDemoComponent } from './modal-options-backdrop-demo.component';

describe('ModalOptionsBackdropDemoComponent', () => {
  let component: ModalOptionsBackdropDemoComponent;
  let fixture: ComponentFixture<ModalOptionsBackdropDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsBackdropDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsBackdropDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
