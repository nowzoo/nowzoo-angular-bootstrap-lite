import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoAddClassComponent } from './tooltip-demo-add-class.component';

describe('TooltipDemoAddClassComponent', () => {
  let component: TooltipDemoAddClassComponent;
  let fixture: ComponentFixture<TooltipDemoAddClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoAddClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoAddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
