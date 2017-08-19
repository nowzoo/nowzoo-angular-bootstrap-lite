import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoShowHideComponent } from './popover-demo-show-hide.component';

describe('PopoverDemoShowHideComponent', () => {
  let component: PopoverDemoShowHideComponent;
  let fixture: ComponentFixture<PopoverDemoShowHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoShowHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
