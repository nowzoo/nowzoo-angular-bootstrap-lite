import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTemplateComponent } from './popover-template.component';

describe('PopoverTemplateComponent', () => {
  let component: PopoverTemplateComponent;
  let fixture: ComponentFixture<PopoverTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
