import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTitleAttributesDemoComponent } from './popover-title-attributes-demo.component';

describe('PopoverTitleAttributesDemoComponent', () => {
  let component: PopoverTitleAttributesDemoComponent;
  let fixture: ComponentFixture<PopoverTitleAttributesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTitleAttributesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTitleAttributesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
