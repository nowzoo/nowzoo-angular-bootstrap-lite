import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoAttributesComponent } from './tooltip-demo-attributes.component';

describe('TooltipDemoAttributesComponent', () => {
  let component: TooltipDemoAttributesComponent;
  let fixture: ComponentFixture<TooltipDemoAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
