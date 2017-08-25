import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPlacementDemoComponent } from './popover-placement-demo.component';

describe('PopoverPlacementDemoComponent', () => {
  let component: PopoverPlacementDemoComponent;
  let fixture: ComponentFixture<PopoverPlacementDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPlacementDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPlacementDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
