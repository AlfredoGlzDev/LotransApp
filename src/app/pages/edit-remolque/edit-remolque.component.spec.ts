import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemolqueComponent } from './edit-remolque.component';

describe('EditRemolqueComponent', () => {
  let component: EditRemolqueComponent;
  let fixture: ComponentFixture<EditRemolqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRemolqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemolqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
