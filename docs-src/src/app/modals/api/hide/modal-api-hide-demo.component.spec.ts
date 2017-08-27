import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiHideDemoComponent } from './modal-api-hide-demo.component';

describe('ModalApiHideDemoComponent', () => {
  let component: ModalApiHideDemoComponent;
  let fixture: ComponentFixture<ModalApiHideDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiHideDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiHideDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
