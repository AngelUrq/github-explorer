import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/users/user-list/user-list.component';
import { RepoListComponent } from './components/repos/repo-list/repo-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'repos/:username/:page', component: RepoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
