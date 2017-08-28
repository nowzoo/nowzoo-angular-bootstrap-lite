import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamplesComponent } from './modal-examples.component';

describe('ModalExamplesComponent', () => {
  let component: ModalExamplesComponent;
  let fixture: ComponentFixture<ModalExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
