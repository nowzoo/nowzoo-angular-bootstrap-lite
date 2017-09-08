import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertObservablesComponent } from './alert-observables.component';

describe('AlertObservablesComponent', () => {
  let component: AlertObservablesComponent;
  let fixture: ComponentFixture<AlertObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
