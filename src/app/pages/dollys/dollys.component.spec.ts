import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollysComponent } from './dollys.component';

describe('DollysComponent', () => {
  let component: DollysComponent;
  let fixture: ComponentFixture<DollysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
