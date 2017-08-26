import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiShowComponent } from './modal-api-show.component';

describe('ModalApiShowComponent', () => {
  let component: ModalApiShowComponent;
  let fixture: ComponentFixture<ModalApiShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
