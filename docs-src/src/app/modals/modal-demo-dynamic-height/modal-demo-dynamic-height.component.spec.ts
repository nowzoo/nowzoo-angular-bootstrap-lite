import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoDynamicHeightComponent } from './modal-demo-dynamic-height.component';

describe('ModalDemoDynamicHeightComponent', () => {
  let component: ModalDemoDynamicHeightComponent;
  let fixture: ComponentFixture<ModalDemoDynamicHeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoDynamicHeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoDynamicHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
