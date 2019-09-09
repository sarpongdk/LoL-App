import { TestBed, async, inject } from '@angular/core/testing';

import { ChampionGuard } from './champion.guard';

describe('ChampionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionGuard]
    });
  });

  it('should ...', inject([ChampionGuard], (guard: ChampionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
