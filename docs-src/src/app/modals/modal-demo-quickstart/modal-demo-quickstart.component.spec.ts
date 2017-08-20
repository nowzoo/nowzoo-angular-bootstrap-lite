import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoQuickstartComponent } from './modal-demo-quickstart.component';

describe('ModalDemoQuickstartComponent', () => {
  let component: ModalDemoQuickstartComponent;
  let fixture: ComponentFixture<ModalDemoQuickstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoQuickstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoQuickstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
