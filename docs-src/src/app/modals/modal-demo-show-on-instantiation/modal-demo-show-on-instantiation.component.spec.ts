import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoShowOnInstantiationComponent } from './modal-demo-show-on-instantiation.component';

describe('ModalDemoShowOnInstantiationComponent', () => {
  let component: ModalDemoShowOnInstantiationComponent;
  let fixture: ComponentFixture<ModalDemoShowOnInstantiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoShowOnInstantiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoShowOnInstantiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
