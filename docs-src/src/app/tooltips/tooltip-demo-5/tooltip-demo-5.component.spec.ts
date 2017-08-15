import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo5Component } from './tooltip-demo-5.component';

describe('TooltipDemo5Component', () => {
  let component: TooltipDemo5Component;
  let fixture: ComponentFixture<TooltipDemo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
