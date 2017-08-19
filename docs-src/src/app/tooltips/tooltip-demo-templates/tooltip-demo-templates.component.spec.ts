import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoTemplatesComponent } from './tooltip-demo-templates.component';

describe('TooltipDemoTemplatesComponent', () => {
  let component: TooltipDemoTemplatesComponent;
  let fixture: ComponentFixture<TooltipDemoTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
