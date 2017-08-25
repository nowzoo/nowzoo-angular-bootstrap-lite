import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContainerDemoComponent } from './popover-container-demo.component';

describe('PopoverContainerDemoComponent', () => {
  let component: PopoverContainerDemoComponent;
  let fixture: ComponentFixture<PopoverContainerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContainerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContainerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
