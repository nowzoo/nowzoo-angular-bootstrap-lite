import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTriggerComponent } from './popover-trigger.component';

describe('PopoverTriggerComponent', () => {
  let component: PopoverTriggerComponent;
  let fixture: ComponentFixture<PopoverTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
