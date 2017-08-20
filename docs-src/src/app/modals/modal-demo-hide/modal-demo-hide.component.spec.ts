import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoHideComponent } from './modal-demo-hide.component';

describe('ModalDemoHideComponent', () => {
  let component: ModalDemoHideComponent;
  let fixture: ComponentFixture<ModalDemoHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
