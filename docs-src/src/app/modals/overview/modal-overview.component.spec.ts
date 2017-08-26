import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOverviewComponent } from './modal-overview.component';

describe('ModalOverviewComponent', () => {
  let component: ModalOverviewComponent;
  let fixture: ComponentFixture<ModalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
