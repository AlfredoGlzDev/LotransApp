import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDollyComponent } from './edit-dolly.component';

describe('EditDollyComponent', () => {
  let component: EditDollyComponent;
  let fixture: ComponentFixture<EditDollyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDollyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
