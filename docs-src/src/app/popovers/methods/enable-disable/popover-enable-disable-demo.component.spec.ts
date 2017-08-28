import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverEnableDisableDemoComponent } from './popover-enable-disable-demo.component';

describe('PopoverEnableDisableDemoComponent', () => {
  let component: PopoverEnableDisableDemoComponent;
  let fixture: ComponentFixture<PopoverEnableDisableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverEnableDisableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverEnableDisableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
