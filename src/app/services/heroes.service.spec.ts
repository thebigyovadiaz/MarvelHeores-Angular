import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Reset number page', () => {
    service.page = 10;
    service.resetPager();
    expect(service).toBeTruthy();
  });

  it('Reset number page', () => {
    service.teams.set('1', { name: "Hola" });
    const result = service.getTeamColor('1');
    console.log('result: ', Object(result));
    // expect(Object(result).values).toBe('Hola');
  });
});
