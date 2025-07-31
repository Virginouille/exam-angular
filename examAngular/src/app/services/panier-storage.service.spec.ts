import { TestBed } from '@angular/core/testing';

import { PanierStorageService } from './panier-storage.service';

describe('PanierStorageService', () => {
  let service: PanierStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
