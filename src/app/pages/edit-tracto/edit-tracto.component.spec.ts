import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTractoComponent } from './edit-tracto.component';

describe('EditTractoComponent', () => {
  let component: EditTractoComponent;
  let fixture: ComponentFixture<EditTractoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTractoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTractoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
