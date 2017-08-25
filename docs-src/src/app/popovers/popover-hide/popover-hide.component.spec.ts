import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverHideComponent } from './popover-hide.component';

describe('PopoverHideComponent', () => {
  let component: PopoverHideComponent;
  let fixture: ComponentFixture<PopoverHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
