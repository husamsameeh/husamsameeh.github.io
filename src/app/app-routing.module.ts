import {NgModule} from '@angular/core'
import {Routes, RouterModule, ExtraOptions} from "@angular/router";
import {SkillsComponent} from "./skills/skills.component";
import {ExperinceComponent} from "./experince/experince.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes= [
  {
    path:'skills',component: SkillsComponent
  },
  {path:'experience' , component: ExperinceComponent},
  {
    path: 'aboutme', component: AboutMeComponent
  }
];

const routerOption: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  useHash: true
}

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
