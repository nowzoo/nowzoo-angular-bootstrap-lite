import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleGoAwayComponent } from './modal-example-go-away.component';

describe('ModalExampleGoAwayComponent', () => {
  let component: ModalExampleGoAwayComponent;
  let fixture: ComponentFixture<ModalExampleGoAwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleGoAwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleGoAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
