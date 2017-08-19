import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoShowHideComponent } from './tooltip-demo-show-hide.component';

describe('TooltipDemoShowHideComponent', () => {
  let component: TooltipDemoShowHideComponent;
  let fixture: ComponentFixture<TooltipDemoShowHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoShowHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
