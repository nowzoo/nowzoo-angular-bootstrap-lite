import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObservablesComponent } from './modal-observables.component';

describe('ModalObservablesComponent', () => {
  let component: ModalObservablesComponent;
  let fixture: ComponentFixture<ModalObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
