import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentAttributeDemoComponent } from './popover-content-attribute-demo.component';

describe('PopoverContentAttributeDemoComponent', () => {
  let component: PopoverContentAttributeDemoComponent;
  let fixture: ComponentFixture<PopoverContentAttributeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContentAttributeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContentAttributeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
