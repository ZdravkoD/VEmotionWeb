import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayComponent } from './play/play.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'play', component: PlayComponent },
  { path: 'learn', component: LearnComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
