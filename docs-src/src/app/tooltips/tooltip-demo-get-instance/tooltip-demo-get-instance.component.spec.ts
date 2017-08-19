import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoGetInstanceComponent } from './tooltip-demo-get-instance.component';

describe('TooltipDemoGetInstanceComponent', () => {
  let component: TooltipDemoGetInstanceComponent;
  let fixture: ComponentFixture<TooltipDemoGetInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoGetInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoGetInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
