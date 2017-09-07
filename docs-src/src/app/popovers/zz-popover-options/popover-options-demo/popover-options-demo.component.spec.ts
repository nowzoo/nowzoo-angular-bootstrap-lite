import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOptionsDemoComponent } from './popover-options-demo.component';

describe('PopoverOptionsDemoComponent', () => {
  let component: PopoverOptionsDemoComponent;
  let fixture: ComponentFixture<PopoverOptionsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOptionsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOptionsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
