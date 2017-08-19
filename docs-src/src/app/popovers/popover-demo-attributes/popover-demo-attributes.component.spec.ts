import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoAttributesComponent } from './popover-demo-attributes.component';

describe('PopoverDemoAttributesComponent', () => {
  let component: PopoverDemoAttributesComponent;
  let fixture: ComponentFixture<PopoverDemoAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
