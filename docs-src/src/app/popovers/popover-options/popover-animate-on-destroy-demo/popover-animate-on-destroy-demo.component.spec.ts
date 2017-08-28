import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAnimateOnDestroyDemoComponent } from './popover-animate-on-destroy-demo.component';

describe('PopoverAnimateOnDestroyDemoComponent', () => {
  let component: PopoverAnimateOnDestroyDemoComponent;
  let fixture: ComponentFixture<PopoverAnimateOnDestroyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverAnimateOnDestroyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAnimateOnDestroyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
