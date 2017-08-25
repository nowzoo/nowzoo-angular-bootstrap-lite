import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDelayDemoComponent } from './popover-delay-demo.component';

describe('PopoverDelayDemoComponent', () => {
  let component: PopoverDelayDemoComponent;
  let fixture: ComponentFixture<PopoverDelayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDelayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDelayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
