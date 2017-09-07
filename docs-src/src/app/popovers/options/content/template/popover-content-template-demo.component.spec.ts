import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentTemplateDemoComponent } from './popover-content-template-demo.component';

describe('PopoverContentTemplateDemoComponent', () => {
  let component: PopoverContentTemplateDemoComponent;
  let fixture: ComponentFixture<PopoverContentTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContentTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContentTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
