import { AuthenticationService } from './authentication/authentication.service';
import { AuthService } from './shared/service/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { RouterModule  }  from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ConfirmDialogModule, FileUploadModule, PanelModule, GrowlModule, MenubarModule, DialogModule, ButtonModule, AutoCompleteModule, DataTableModule, SharedModule, DropdownModule,PickListModule,CheckboxModule,TriStateCheckboxModule, InputTextModule,InputTextareaModule,CalendarModule,PasswordModule,TabViewModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from './shared/service/message.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { CareModule } from './care/care.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './_guards/index';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
		tokenGetter: (() => localStorage.getItem('id_token')),
		globalHeaders: [{'Content-Type': 'application/json'}],
	}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    // angular material,
    MaterialModule,
    // primeng
    ConfirmDialogModule,
    FileUploadModule,
    PanelModule,
    GrowlModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    AutoCompleteModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    PickListModule,
    CheckboxModule,
    TriStateCheckboxModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    PasswordModule,
    TabViewModule,
    AppRoutingModule,

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    MessageService,
    {
         provide: AuthHttp,
         useFactory: authHttpServiceFactory,
         deps: [ Http, RequestOptions ]
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
