import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InfoComponent } from './info/info.component';
import { SkillsComponent } from './skills/skills.component';
import { ContanctComponent } from './contanct/contanct.component';
import { ExperinceComponent } from './experince/experince.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutMeComponent,
    InfoComponent,
    SkillsComponent,
    ContanctComponent,
    ExperinceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
