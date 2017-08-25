import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentDemoComponent } from './popover-content-demo.component';

describe('PopoverContentDemoComponent', () => {
  let component: PopoverContentDemoComponent;
  let fixture: ComponentFixture<PopoverContentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
