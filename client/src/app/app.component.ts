import { AuthService } from './shared/service/auth.service';
import { MessageService } from './shared/service/message.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Message, MenuItem } from 'primeng/primeng';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'hcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public items: MenuItem[] = [{label: 'hello'}];
  msgs: Message[] = [];
  displayLoginDialog: boolean = false;
  loginFailed: boolean = false;
  authenticated: boolean = false;
  j_username: string = "admin";
  j_password: string = "admin";

  constructor( private messageService: MessageService, private authenticationService: AuthenticationService, private router: Router) {
    messageService.messageSource$.subscribe(
            msg => {
                this.msgs.push(msg);
            });
  }

  ngOnInit() {
        this.items = [
            { label: 'Home', routerLink: ['/'], icon: 'fa-home' },

            { label: 'Health Cares', icon: 'fa-search', items: [
                    {label: 'Health Care Search', routerLink: ['/care']},
                    {label: 'Health Care Create', routerLink: ['/']}
                ]
            }


        ];

        this.authenticated = this.authenticationService.loggedIn();
        this.displayLoginDialog = !this.authenticated;
        if (this.authenticated) {
            this.items.push({label: 'Sign out', command: (event) =>  this.logout(), icon: 'fa-sign-out' });
            console.log('You are authenticated...', '');
        } else {
          this.displayLoginDialog = true;
          this.authenticated = false;
          console.log('You are NOT authenticated...', '');
        }

  }

  login() {
        this.authenticationService.login(this.j_username, this.j_password).
            subscribe(
                data => {
                    if (data) {
                        this.displayLoginDialog = false;
                        this.authenticated = true;
                        this.items.push({label: 'Sign out', command: (event) =>  this.logout(), icon: 'fa-sign-out' });
                        this.loginFailed = false;
                        localStorage.setItem('id_token', data.token);
                        console.log(data.token);
                        this.messageService.info('You are now logged in.', '');
                    } else {
                        this.loginFailed = true;
                        this.displayLoginDialog = true;
                        this.authenticated = false;
                    }
                },
                error => {
                    this.messageService.error('Login error', error);
                    this.loginFailed = true;
                    this.displayLoginDialog = true;
                    this.authenticated = false;
                }
        );
    }

  hasAuthToken() {
	    return localStorage.getItem('id_token') !== null;
	}

	logout() {

	     this.authenticationService.logout();
        this.displayLoginDialog = true;
        this.authenticated = false;
        this.items.pop();
        console.log('You are NOT authenticated...', '');
          this.router.navigate(['home']);
	}




}
