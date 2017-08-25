import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAnimationDemoComponent } from './popover-animation-demo.component';

describe('PopoverAnimationDemoComponent', () => {
  let component: PopoverAnimationDemoComponent;
  let fixture: ComponentFixture<PopoverAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
