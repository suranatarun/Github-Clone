import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { LoginViewComponent } from './login-view/login-view.component';
import { GitHubResolver } from './resolver.service';
import { SearchViewComponent } from './search-view/search-view.component';
import { UserViewComponent } from './user-view/user-view.component';
const routes: Routes = [

  { path: 'Github-Login', component: LoginViewComponent,  },
  { path: '', redirectTo: 'Github-Login', pathMatch: 'full' },

  { path: 'Github-Home/:username', component: UserViewComponent},
  { path: 'search-view', component: SearchViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
