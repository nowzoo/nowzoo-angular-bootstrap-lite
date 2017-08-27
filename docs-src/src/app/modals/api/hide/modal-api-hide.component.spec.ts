import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiHideComponent } from './modal-api-hide.component';

describe('ModalApiHideComponent', () => {
  let component: ModalApiHideComponent;
  let fixture: ComponentFixture<ModalApiHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
