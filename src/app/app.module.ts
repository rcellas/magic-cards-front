import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsListComponent } from './cards/components/cards-list/cards-list.component';
import { CardsDetailComponent } from './cards/components/cards-detail/cards-detail.component';
import { HomeComponent } from './cards/views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardsDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
