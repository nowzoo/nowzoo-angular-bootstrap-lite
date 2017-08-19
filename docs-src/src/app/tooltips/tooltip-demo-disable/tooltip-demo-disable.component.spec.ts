import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoDisableComponent } from './tooltip-demo-disable.component';

describe('TooltipDemoDisableComponent', () => {
  let component: TooltipDemoDisableComponent;
  let fixture: ComponentFixture<TooltipDemoDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
