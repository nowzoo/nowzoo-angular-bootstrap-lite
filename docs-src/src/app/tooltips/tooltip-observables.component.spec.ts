import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipObservablesComponent } from './tooltip-observables.component';

describe('TooltipObservablesComponent', () => {
  let component: TooltipObservablesComponent;
  let fixture: ComponentFixture<TooltipObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
