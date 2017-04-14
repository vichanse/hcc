import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareListComponent } from './care-list/care-list.component';
import { AuthGuard } from '../_guards/index';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: CareListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CareRoutingModule { }
