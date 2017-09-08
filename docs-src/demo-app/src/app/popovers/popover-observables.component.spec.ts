import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverObservablesComponent } from './popover-observables.component';

describe('PopoverObservablesComponent', () => {
  let component: PopoverObservablesComponent;
  let fixture: ComponentFixture<PopoverObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
