import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoGetInstanceComponent } from './popover-demo-get-instance.component';

describe('PopoverDemoGetInstanceComponent', () => {
  let component: PopoverDemoGetInstanceComponent;
  let fixture: ComponentFixture<PopoverDemoGetInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoGetInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoGetInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
