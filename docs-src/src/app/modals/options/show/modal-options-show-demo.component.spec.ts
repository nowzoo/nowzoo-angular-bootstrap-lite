import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsShowDemoComponent } from './modal-options-show-demo.component';

describe('ModalOptionsShowDemoComponent', () => {
  let component: ModalOptionsShowDemoComponent;
  let fixture: ComponentFixture<ModalOptionsShowDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionsShowDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOptionsShowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
