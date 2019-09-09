import { TestBed } from '@angular/core/testing';

import { SummonerService } from './summoner.service';

describe('SummonerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummonerService = TestBed.get(SummonerService);
    expect(service).toBeTruthy();
  });
});
