import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamaterComponent } from './query-paramater.component';

describe('QueryParamaterComponent', () => {
  let component: QueryParamaterComponent;
  let fixture: ComponentFixture<QueryParamaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryParamaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParamaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
