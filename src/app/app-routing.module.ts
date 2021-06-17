import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './utility/app.guard';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  {path: 'profile', loadChildren: () => import('./views/profile/profile.module').then(p => p.ProfileModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
