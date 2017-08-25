import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTriggerDemoComponent } from './popover-trigger-demo.component';

describe('PopoverTriggerDemoComponent', () => {
  let component: PopoverTriggerDemoComponent;
  let fixture: ComponentFixture<PopoverTriggerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTriggerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTriggerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
