import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoShowOnInstantiationChildComponent } from './modal-demo-show-on-instantiation-child.component';

describe('ModalDemoShowOnInstantiationChildComponent', () => {
  let component: ModalDemoShowOnInstantiationChildComponent;
  let fixture: ComponentFixture<ModalDemoShowOnInstantiationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoShowOnInstantiationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoShowOnInstantiationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
