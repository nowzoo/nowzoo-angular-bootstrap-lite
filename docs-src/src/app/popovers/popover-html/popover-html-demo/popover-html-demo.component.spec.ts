import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverHtmlDemoComponent } from './popover-html-demo.component';

describe('PopoverHtmlDemoComponent', () => {
  let component: PopoverHtmlDemoComponent;
  let fixture: ComponentFixture<PopoverHtmlDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverHtmlDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverHtmlDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
