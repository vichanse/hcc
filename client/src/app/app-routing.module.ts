import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthenticationComponent } from './authentication/authentication.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
		path: 'login',
		component: AuthenticationComponent
	},
  { path: 'care', loadChildren: 'app/care/care.module#CareModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
