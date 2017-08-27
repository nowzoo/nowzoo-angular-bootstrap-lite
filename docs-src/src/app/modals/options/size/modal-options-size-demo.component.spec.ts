import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsSizeDemoComponent } from './modal-options-size-demo.component';

describe('ModalOptionsSizeDemoComponent', () => {
  let component: ModalOptionsSizeDemoComponent;
  let fixture: ComponentFixture<ModalOptionsSizeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsSizeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsSizeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
