import { TestBed, inject } from '@angular/core/testing';

import { CateserviceService } from './cateservice.service';

describe('CateserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CateserviceService]
    });
  });

  it('should be created', inject([CateserviceService], (service: CateserviceService) => {
    expect(service).toBeTruthy();
  }));
});
