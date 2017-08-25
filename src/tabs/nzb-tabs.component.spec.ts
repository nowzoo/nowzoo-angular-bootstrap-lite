import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzbTabsComponent } from './nzb-tabs.component';

describe('NzbTabsComponent', () => {
  let component: NzbTabsComponent;
  let fixture: ComponentFixture<NzbTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzbTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzbTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
