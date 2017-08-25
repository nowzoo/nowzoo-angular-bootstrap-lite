import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverHtmlComponent } from './popover-html.component';

describe('PopoverHtmlComponent', () => {
  let component: PopoverHtmlComponent;
  let fixture: ComponentFixture<PopoverHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
