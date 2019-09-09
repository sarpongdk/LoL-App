import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionListComponent } from './champion-list.component';

describe('ChampionListComponent', () => {
  let component: ChampionListComponent;
  let fixture: ComponentFixture<ChampionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
