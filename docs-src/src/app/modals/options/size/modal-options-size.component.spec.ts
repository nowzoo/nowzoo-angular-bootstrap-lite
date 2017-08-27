import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsSizeComponent } from './modal-options-size.component';

describe('ModalOptionsSizeComponent', () => {
  let component: ModalOptionsSizeComponent;
  let fixture: ComponentFixture<ModalOptionsSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
