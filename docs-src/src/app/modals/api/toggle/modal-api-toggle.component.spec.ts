import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiToggleComponent } from './modal-api-toggle.component';

describe('ModalApiToggleComponent', () => {
  let component: ModalApiToggleComponent;
  let fixture: ComponentFixture<ModalApiToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
