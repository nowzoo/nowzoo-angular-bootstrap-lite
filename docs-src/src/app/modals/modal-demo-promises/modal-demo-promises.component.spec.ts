import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoPromisesComponent } from './modal-demo-promises.component';

describe('ModalDemoPromisesComponent', () => {
  let component: ModalDemoPromisesComponent;
  let fixture: ComponentFixture<ModalDemoPromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoPromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
