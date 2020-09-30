import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroeProfileComponent } from './heroe-profile/heroe-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroeProfileComponent,
    ModalPollComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
