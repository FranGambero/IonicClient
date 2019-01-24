import { TestBed } from '@angular/core/testing';

import { AlumnoProviderService } from './alumno-provider.service';

describe('AlumnoProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoProviderService = TestBed.get(AlumnoProviderService);
    expect(service).toBeTruthy();
  });
});
