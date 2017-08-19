import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoDisableComponent } from './popover-demo-disable.component';

describe('PopoverDemoDisableComponent', () => {
  let component: PopoverDemoDisableComponent;
  let fixture: ComponentFixture<PopoverDemoDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
