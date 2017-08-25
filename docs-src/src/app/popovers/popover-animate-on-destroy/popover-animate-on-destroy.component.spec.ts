import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAnimateOnDestroyComponent } from './popover-animate-on-destroy.component';

describe('PopoverAnimateOnDestroyComponent', () => {
  let component: PopoverAnimateOnDestroyComponent;
  let fixture: ComponentFixture<PopoverAnimateOnDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverAnimateOnDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAnimateOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
