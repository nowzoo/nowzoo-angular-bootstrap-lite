import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverQuickstartSimpleDemoComponent } from './popover-quickstart-simple-demo.component';

describe('PopoverQuickstartSimpleDemoComponent', () => {
  let component: PopoverQuickstartSimpleDemoComponent;
  let fixture: ComponentFixture<PopoverQuickstartSimpleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverQuickstartSimpleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverQuickstartSimpleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
