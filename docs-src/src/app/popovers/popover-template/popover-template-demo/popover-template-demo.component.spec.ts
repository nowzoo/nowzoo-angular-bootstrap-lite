import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTemplateDemoComponent } from './popover-template-demo.component';

describe('PopoverTemplateDemoComponent', () => {
  let component: PopoverTemplateDemoComponent;
  let fixture: ComponentFixture<PopoverTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
