import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverToggleComponent } from './popover-toggle.component';

describe('PopoverToggleComponent', () => {
  let component: PopoverToggleComponent;
  let fixture: ComponentFixture<PopoverToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
