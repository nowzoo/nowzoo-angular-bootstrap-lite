import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTitleTemplateDemoComponent } from './popover-title-template-demo.component';

describe('PopoverTitleTemplateDemoComponent', () => {
  let component: PopoverTitleTemplateDemoComponent;
  let fixture: ComponentFixture<PopoverTitleTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTitleTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTitleTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
