import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../services/heroes.service';
import { Heroe } from './../interfaces/heroe';

@Component({
  selector: 'app-heroe-profile',
  templateUrl: './heroe-profile.component.html',
  styleUrls: ['./heroe-profile.component.css'],
})
export class HeroeProfileComponent implements OnInit {
  @ViewChild('modal') modal;

  private id;
  heroe: Heroe;
  question_modal: string;
  team: string;

  constructor(
    private route: ActivatedRoute,
    public heroesService: HeroesService,
    private _location: Location
  ) {}

  goBack() {
    this._location.back();
  }

  launchModal() {
    this.question_modal = '¿En cual grupo quieres colocar a tu súper héroe?';
    this.modal.toggle_modal();
  }

  getTeam(team: string) {
    this.team = team;
    this.heroesService.teams.set(this.heroe.id, this.team);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.heroesService.getHeroe(this.id).subscribe((data: any) => {
        this.heroe = data;
      });
    });
  }
}
