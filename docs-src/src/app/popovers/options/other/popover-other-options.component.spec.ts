import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOtherOptionsComponent } from './popover-other-options.component';

describe('PopoverOtherOptionsComponent', () => {
  let component: PopoverOtherOptionsComponent;
  let fixture: ComponentFixture<PopoverOtherOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOtherOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOtherOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
