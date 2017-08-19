import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoAddClassComponent } from './popover-demo-add-class.component';

describe('PopoverDemoAddClassComponent', () => {
  let component: PopoverDemoAddClassComponent;
  let fixture: ComponentFixture<PopoverDemoAddClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoAddClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoAddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
