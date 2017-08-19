import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoTemplatesComponent } from './popover-demo-templates.component';

describe('PopoverDemoTemplatesComponent', () => {
  let component: PopoverDemoTemplatesComponent;
  let fixture: ComponentFixture<PopoverDemoTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
