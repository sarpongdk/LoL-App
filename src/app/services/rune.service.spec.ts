import { TestBed } from '@angular/core/testing';

import { RuneService } from './rune.service';

describe('RuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuneService = TestBed.get(RuneService);
    expect(service).toBeTruthy();
  });
});
