import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { LazyLoadEvent } from 'primeng/primeng';
import { PageResponse } from './../shared/support/paging';
import { Care } from './care';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class CareService {

  private baseUrl = '/api/cares.json';

  constructor(private authHttp: AuthHttp) { }

  getCares(): Observable<Care[]> {

      return this.authHttp.get(this.baseUrl)
          .map(this.extractData)
          .catch(this.handleError);
  }



  private extractData(response: Response) {
      const body = response.json();
      console.log(body);
      return body || {};
  }

  private handleError (error: any) {
      // TODO: seems we cannot use messageService from here...
      let errMsg = (error.message) ? error.message :
      error.status ? `Status: ${error.status} - Text: ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      if (error.status === 401 ) {
          //window.location.href = '/';
      }
      return Observable.throw(errMsg);
  }

}
