import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiComponent } from './modal-api.component';

describe('ModalApiComponent', () => {
  let component: ModalApiComponent;
  let fixture: ComponentFixture<ModalApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
