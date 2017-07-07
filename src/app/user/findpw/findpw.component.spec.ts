import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpwComponent } from './findpw.component';

describe('FindpwComponent', () => {
  let component: FindpwComponent;
  let fixture: ComponentFixture<FindpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
