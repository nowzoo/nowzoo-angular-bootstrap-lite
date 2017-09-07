import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentTemplateComponent } from './popover-content-template.component';

describe('PopoverContentTemplateComponent', () => {
  let component: PopoverContentTemplateComponent;
  let fixture: ComponentFixture<PopoverContentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
