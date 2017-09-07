import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoNoTitleComponent } from './popover-demo-no-title.component';

describe('PopoverDemoNoTitleComponent', () => {
  let component: PopoverDemoNoTitleComponent;
  let fixture: ComponentFixture<PopoverDemoNoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoNoTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoNoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
