import { TestBed, inject } from '@angular/core/testing';

import { PubgService } from './pubg.service';

describe('PubgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PubgService]
    });
  });

  it('should be created', inject([PubgService], (service: PubgService) => {
    expect(service).toBeTruthy();
  }));
});
