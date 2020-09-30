import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroeProfileComponent } from './heroe-profile/heroe-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

const routes: Routes = [
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'heroe/:id', component: HeroeProfileComponent },
  { path: 'modal-poll', component: ModalPollComponent },
  { path: '**', redirectTo: '/heroes-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
