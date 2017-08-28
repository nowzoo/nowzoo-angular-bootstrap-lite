import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverEnableDisableComponent } from './popover-enable-disable.component';

describe('PopoverEnableDisableComponent', () => {
  let component: PopoverEnableDisableComponent;
  let fixture: ComponentFixture<PopoverEnableDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverEnableDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverEnableDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
