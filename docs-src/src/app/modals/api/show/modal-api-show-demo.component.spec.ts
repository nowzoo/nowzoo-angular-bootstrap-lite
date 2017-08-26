import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiShowDemoComponent } from './modal-api-show-demo.component';

describe('ModalApiShowDemoComponent', () => {
  let component: ModalApiShowDemoComponent;
  let fixture: ComponentFixture<ModalApiShowDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiShowDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiShowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
