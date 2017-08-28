import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverUpdateDemoComponent } from './popover-update-demo.component';

describe('PopoverUpdateDemoComponent', () => {
  let component: PopoverUpdateDemoComponent;
  let fixture: ComponentFixture<PopoverUpdateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverUpdateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverUpdateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
