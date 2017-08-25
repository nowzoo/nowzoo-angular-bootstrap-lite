import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverQuickstartDemoComponent } from './popover-quickstart-demo.component';

describe('PopoverQuickstartDemoComponent', () => {
  let component: PopoverQuickstartDemoComponent;
  let fixture: ComponentFixture<PopoverQuickstartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverQuickstartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverQuickstartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
