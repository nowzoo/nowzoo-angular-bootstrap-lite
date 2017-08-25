import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOffsetDemoComponent } from './popover-offset-demo.component';

describe('PopoverOffsetDemoComponent', () => {
  let component: PopoverOffsetDemoComponent;
  let fixture: ComponentFixture<PopoverOffsetDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOffsetDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOffsetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
