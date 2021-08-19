import { TestBed } from '@angular/core/testing';

import { ProjectcrudService } from './projectcrud.service';

describe('ProjectcrudService', () => {
  let service: ProjectcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
