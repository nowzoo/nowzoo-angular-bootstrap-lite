import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTitleDemoComponent } from './popover-title-demo.component';

describe('PopoverTitleDemoComponent', () => {
  let component: PopoverTitleDemoComponent;
  let fixture: ComponentFixture<PopoverTitleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTitleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTitleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
