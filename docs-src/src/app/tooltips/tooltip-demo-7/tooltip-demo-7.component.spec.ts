import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo7Component } from './tooltip-demo-7.component';

describe('TooltipDemo7Component', () => {
  let component: TooltipDemo7Component;
  let fixture: ComponentFixture<TooltipDemo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
