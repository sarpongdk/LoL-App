import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGamesListComponent } from './featured-games-list.component';

describe('FeaturedGamesListComponent', () => {
  let component: FeaturedGamesListComponent;
  let fixture: ComponentFixture<FeaturedGamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedGamesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
