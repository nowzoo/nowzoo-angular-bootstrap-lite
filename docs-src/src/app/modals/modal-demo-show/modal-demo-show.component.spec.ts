import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoShowComponent } from './modal-demo-show.component';

describe('ModalDemoShowComponent', () => {
  let component: ModalDemoShowComponent;
  let fixture: ComponentFixture<ModalDemoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
