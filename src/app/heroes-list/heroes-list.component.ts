import { Heroe } from './../interfaces/heroe';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  title = 'Desafío Angular - Héroes de Marvel';
  heroes: Heroe[] = [];
  searchString: string;

  constructor(public heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe((data: any) => {
      this.heroes = data;
    });
  }

  prevPage() {
    this.heroesService
      .getHeroes(this.searchString, this.heroesService.page - 1)
      .subscribe((data: any) => {
        this.heroes = data;
      });
  }

  nextPage() {
    this.heroesService
      .getHeroes(this.searchString, this.heroesService.page + 1)
      .subscribe((data: any) => {
        this.heroes = data;
      });
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString).subscribe((data: any) => {
      this.heroes = data;
    });
  }
}
