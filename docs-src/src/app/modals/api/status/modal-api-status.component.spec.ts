import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiStatusComponent } from './modal-api-status.component';

describe('ModalApiStatusComponent', () => {
  let component: ModalApiStatusComponent;
  let fixture: ComponentFixture<ModalApiStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
