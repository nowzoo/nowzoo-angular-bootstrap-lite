import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiEventsComponent } from './modal-api-events.component';

describe('ModalApiEventsComponent', () => {
  let component: ModalApiEventsComponent;
  let fixture: ComponentFixture<ModalApiEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
