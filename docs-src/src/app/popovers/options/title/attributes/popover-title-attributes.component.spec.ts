import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTitleAttributesComponent } from './popover-title-attributes.component';

describe('PopoverTitleAttributesComponent', () => {
  let component: PopoverTitleAttributesComponent;
  let fixture: ComponentFixture<PopoverTitleAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTitleAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTitleAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
