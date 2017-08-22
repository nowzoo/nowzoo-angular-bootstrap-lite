import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoSizeComponent } from './modal-demo-size.component';

describe('ModalDemoSizeComponent', () => {
  let component: ModalDemoSizeComponent;
  let fixture: ComponentFixture<ModalDemoSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
