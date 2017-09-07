import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentAttributeComponent } from './popover-content-attribute.component';

describe('PopoverContentAttributeComponent', () => {
  let component: PopoverContentAttributeComponent;
  let fixture: ComponentFixture<PopoverContentAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContentAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContentAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
