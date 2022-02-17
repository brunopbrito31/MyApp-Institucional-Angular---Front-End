import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { AccordionPersComponent } from './components/accordion-pers/accordion-pers.component';
import { MenuBarTopComponent } from './components/menu-bar-top/menu-bar-top.component';
import { MatSliderModule } from '@angular/material/slider';
import { CarrouselPersComponent } from './components/carrousel-pers/carrousel-pers.component';
import { RodapePersComponent } from './components/rodape-pers/rodape-pers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AccordionPersComponent,
    MenuBarTopComponent,
    CarrouselPersComponent,
    RodapePersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
