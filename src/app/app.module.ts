import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Here Called Forms Module for using reactive forms.
 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Here Called MatDialog of part of Angular Material
 */
import {MatDialogModule} from '@angular/material/dialog';

/**
 * Here Called Github api service in this page called api service
 */
import { GithubAPIServiceService } from './github-api-service.service';

import { AppComponent } from './app.component';

import { LoginViewComponent } from './login-view/login-view.component';

import { UserViewComponent } from './user-view/user-view.component';

import { SearchViewComponent } from './search-view/search-view.component';

import { GitHubResolver } from './resolver.service';

import { ToastrModule } from 'ngx-toastr';

import { ErrorViewComponent } from './error-view/error-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    UserViewComponent,
    SearchViewComponent,
    ErrorViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      preventDuplicates: true,
      progressAnimation: 'increasing'
    }),
  ],
  providers: [GithubAPIServiceService, GitHubResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
