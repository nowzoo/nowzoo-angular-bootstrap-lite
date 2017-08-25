import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDelayComponent } from './popover-delay.component';

describe('PopoverDelayComponent', () => {
  let component: PopoverDelayComponent;
  let fixture: ComponentFixture<PopoverDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
