import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOptionsProviderComponent } from './popover-options-provider.component';

describe('PopoverOptionsProviderComponent', () => {
  let component: PopoverOptionsProviderComponent;
  let fixture: ComponentFixture<PopoverOptionsProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOptionsProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOptionsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
