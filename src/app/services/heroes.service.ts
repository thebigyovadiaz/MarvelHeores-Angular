import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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

  getRequest(url: string, headers?: object) {
    return this.http.get<any>(url);
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

    return this.getRequest(url);
  }

  getHeroe(id: any) {
    const url =
      this.protocol +
      this.ApiUrl +
      'characters/' +
      id +
      '?apikey=56d2cc44b1c84eb7c6c9673565a9eb4b';

    return this.getRequest(url);
  }

  getTeamColor(id: any): string {
    return this.teams.get(id) || '';
  }
}
