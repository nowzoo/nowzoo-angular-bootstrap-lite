import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverShowComponent } from './popover-show.component';

describe('PopoverShowComponent', () => {
  let component: PopoverShowComponent;
  let fixture: ComponentFixture<PopoverShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
