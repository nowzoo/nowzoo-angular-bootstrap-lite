import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAnimationComponent } from './popover-animation.component';

describe('PopoverAnimationComponent', () => {
  let component: PopoverAnimationComponent;
  let fixture: ComponentFixture<PopoverAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
