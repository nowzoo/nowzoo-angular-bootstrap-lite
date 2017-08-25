import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOffsetComponent } from './popover-offset.component';

describe('PopoverOffsetComponent', () => {
  let component: PopoverOffsetComponent;
  let fixture: ComponentFixture<PopoverOffsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOffsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
