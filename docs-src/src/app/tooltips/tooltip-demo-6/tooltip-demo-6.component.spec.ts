import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo6Component } from './tooltip-demo-6.component';

describe('TooltipDemo6Component', () => {
  let component: TooltipDemo6Component;
  let fixture: ComponentFixture<TooltipDemo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
