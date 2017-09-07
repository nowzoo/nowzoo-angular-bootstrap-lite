import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTitleTemplateComponent } from './popover-title-template.component';

describe('PopoverTitleTemplateComponent', () => {
  let component: PopoverTitleTemplateComponent;
  let fixture: ComponentFixture<PopoverTitleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTitleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTitleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
