import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextdayweatherComponent } from './nextdayweather.component';

describe('NextdayweatherComponent', () => {
  let component: NextdayweatherComponent;
  let fixture: ComponentFixture<NextdayweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextdayweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextdayweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
