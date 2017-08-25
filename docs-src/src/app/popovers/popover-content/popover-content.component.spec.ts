import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentComponent } from './popover-content.component';

describe('PopoverContentComponent', () => {
  let component: PopoverContentComponent;
  let fixture: ComponentFixture<PopoverContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
