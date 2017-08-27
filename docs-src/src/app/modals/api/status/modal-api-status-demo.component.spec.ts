import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiEventsDemoComponent } from './modal-api-events-demo.component';

describe('ModalApiEventsDemoComponent', () => {
  let component: ModalApiEventsDemoComponent;
  let fixture: ComponentFixture<ModalApiEventsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiEventsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiEventsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
