import { Heroe } from './../interfaces/heroe';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../services/heroes.service';
import { reduce, map } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  title = 'Desafío Angular - Héroes de Marvel';
  heroes: Heroe[] = [];
  total: number;
  searchString: string;

  constructor(public heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesInit();
  }

  heroesInit() {
    const heroesService = this.heroesService.getHeroes();
    this.heroesServicesMapping(heroesService);
  }

  prevPage() {
    const heroesService = this.heroesService.getHeroes(
      this.searchString,
      this.heroesService.page - 1
    );

    this.heroesServicesMapping(heroesService);
  }

  nextPage() {
    const heroesService = this.heroesService.getHeroes(
      this.searchString,
      this.heroesService.page + 1
    );

    this.heroesServicesMapping(heroesService);
  }

  submitSearch() {
    const heroesService = this.heroesService.getHeroes(this.searchString);
    this.heroesServicesMapping(heroesService);
  }

  parsingHeroesData(heroes: Array<any>): Heroe[] {
    const resultHeroes: Array<Heroe> = [];
    heroes.forEach((item: any) => {
      resultHeroes.push({
        id: item.id,
        name: item.name,
        description: item.description,
        modified: item.modified,
        thumbnail: item.thumbnail,
        resourceURI: item.resourceURI,
        teamColor: this.heroesService.getTeamColor(item.id),
      });
    });

    return resultHeroes;
  }

  heroesServicesMapping(request: any) {
    request
      .pipe(
        map(({ data: { total, results } }) => {
          const resultHeroes: Array<Heroe> = this.parsingHeroesData(results);
          return { total, heroes: resultHeroes };
        })
      )
      .subscribe(({ total, heroes }) => {
        this.heroes = heroes;
        this.total = Math.ceil(total / this.heroesService.step);
      });
  }
}
