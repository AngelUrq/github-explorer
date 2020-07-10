import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { UserCardComponent } from './components/users/user-card/user-card.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

import { AppConfigService } from './services/config/app-config.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RepoListComponent } from './components/repos/repo-list/repo-list.component';
import { RepoCardComponent } from './components/repos/repo-card/repo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    NavbarComponent,
    RepoListComponent,
    RepoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => {
      return () => {
        return appConfigService.loadConfig();
      };
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
