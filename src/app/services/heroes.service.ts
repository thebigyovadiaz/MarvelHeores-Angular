import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Heroe } from './../interfaces/heroe';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  page = 0;
  step = 20;
  total = 0;
  teams = new Map();

  private protocol = 'https:';
  private ApiUrl = '//gateway.marvel.com:443/v1/public/';

  group_colors = {
    azul: '#1f8ff7',
    violeta: '#a43de3',
    naranjo: '#df5c0f',
    verde: '#0ea521',
  };

  constructor(private http: HttpClient) {}

  resetPager() {
    this.page = 0;
  }

  getHeroes(nameStartsWith?: string, page?: number) {
    if (page || page === 0) {
      this.page = page;
    }

    const offset = this.page * this.step;

    const url =
      this.protocol +
      this.ApiUrl +
      'characters?apikey=56d2cc44b1c84eb7c6c9673565a9eb4b' +
      '&offset=' +
      offset +
      (nameStartsWith ? '&nameStartsWith=' + nameStartsWith : '');

    return this.http.get<any>(url).pipe(
      map(({ data }) => {
        const resultHeroes: Array<Heroe> = [];
        this.total = Math.ceil(data.total / this.step);

        data.results.forEach((item: any) => {
          resultHeroes.push({
            id: item.id,
            name: item.name,
            description: item.description,
            modified: item.modified,
            thumbnail: item.thumbnail,
            resourceURI: item.resourceURI,
            teamColor: this.getTeamColor(item.id),
          });
        });

        return resultHeroes;
      })
    );
  }

  getHeroe(id: any) {
    const url =
      this.protocol +
      this.ApiUrl +
      'characters/' +
      id +
      '?apikey=56d2cc44b1c84eb7c6c9673565a9eb4b';

    return this.http.get<any>(url).pipe(
      map(({ data: { results } }) => {
        return {
          id: results[0].id,
          name: results[0].name,
          description: results[0].description,
          modified: results[0].modified,
          thumbnail: results[0].thumbnail,
          resourceURI: results[0].resourceURI,
          teamColor: this.getTeamColor(results[0].id),
        };
      })
    );
  }

  getTeamColor(id: any): string {
    return this.teams.get(id) || '';
  }
}
