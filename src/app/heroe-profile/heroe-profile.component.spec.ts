import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { HeroeProfileComponent } from './heroe-profile.component';

describe('HeroeProfileComponent', () => {
  let component: HeroeProfileComponent;
  let fixture: ComponentFixture<HeroeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [HeroeProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
