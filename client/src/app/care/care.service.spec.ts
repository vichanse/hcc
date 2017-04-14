import { TestBed, inject } from '@angular/core/testing';

import { CareService } from './care.service';

describe('CareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareService]
    });
  });

  it('should ...', inject([CareService], (service: CareService) => {
    expect(service).toBeTruthy();
  }));
});
