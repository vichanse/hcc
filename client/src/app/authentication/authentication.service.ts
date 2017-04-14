// authentication/authentication.service.ts
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { tokenNotExpired, JwtHelper} from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  readonly tokenKey = 'id_token';

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {}

  authenticate(user: any) {
  	let url 	= '/api/login_check';
        let body 	= new URLSearchParams();
        body.append('_username', user.username);
        body.append('_password', user.password);
  	let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});
    //console.log(body.toString());
  	return this.http
  	        .post(url, body.toString(), options)
  		.map((data: Response) => data.json());
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  loggedIn() {
    return tokenNotExpired(this.tokenKey);
  }
}
