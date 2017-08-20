import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoEventsComponent } from './modal-demo-events.component';

describe('ModalDemoEventsComponent', () => {
  let component: ModalDemoEventsComponent;
  let fixture: ComponentFixture<ModalDemoEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
