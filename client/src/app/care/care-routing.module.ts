import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareListComponent } from './care-list/care-list.component';
import { CareDetailComponent } from './care-detail/care-detail.component';
import { AuthGuard } from '../_guards/index';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: CareListComponent},
  { path: ':id', component: CareDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CareRoutingModule { }
