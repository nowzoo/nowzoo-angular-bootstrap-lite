import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTitleComponent } from './popover-title.component';

describe('PopoverTitleComponent', () => {
  let component: PopoverTitleComponent;
  let fixture: ComponentFixture<PopoverTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
