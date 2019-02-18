import { TestBed } from '@angular/core/testing';

import { DugoKitService } from './dugo-kit.service';

describe('DugoKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DugoKitService = TestBed.get(DugoKitService);
    expect(service).toBeTruthy();
  });
});
