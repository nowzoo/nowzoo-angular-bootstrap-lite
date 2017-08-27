import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsShowComponent } from './modal-options-show.component';

describe('ModalOptionsShowComponent', () => {
  let component: ModalOptionsShowComponent;
  let fixture: ComponentFixture<ModalOptionsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
