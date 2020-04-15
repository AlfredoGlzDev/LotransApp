import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrigenDestinoComponent } from './edit-origen-destino.component';

describe('EditOrigenDestinoComponent', () => {
  let component: EditOrigenDestinoComponent;
  let fixture: ComponentFixture<EditOrigenDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrigenDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrigenDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
