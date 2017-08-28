import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverShowHideToggleComponent } from './popover-show-hide-toggle.component';

describe('PopoverShowHideToggleComponent', () => {
  let component: PopoverShowHideToggleComponent;
  let fixture: ComponentFixture<PopoverShowHideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverShowHideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverShowHideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
