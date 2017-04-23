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

  private baseUrl = '/api/cares';

  constructor(private authHttp: AuthHttp) { }

  /**
     * Get a care by id.
     */
    getCare(id : any) : Observable<Care> {
      const url = `${this.baseUrl}/${id}`;
        return this.authHttp.get(url)
            .map(response => new Care(response.json()))
            .catch(this.handleError);
    }

  getCares(): Observable<Care[]> {

      return this.authHttp.get(this.baseUrl)
          .map(this.extractData)
          .catch(this.handleError);
  }

  saveCare(care: Care): Observable<Care> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if ( undefined === care.id ) {
            return this.createCare(care, options);
        }
        return this.updateCare(care, options);
    }

    /**
     * Delete an Author by id.
     */
    delete(id: any) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      const url = `${this.baseUrl}/${id}`;

      return this.authHttp.delete(url, options).catch(this.handleError);
    }

    private createCare(care: Care, options: RequestOptions): Observable<Care> {
        care.id = undefined;
        return this.authHttp.post(this.baseUrl, care, options)
            .map(this.extractData)
            .do(data => console.log('createCare: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateCare(care: Care, options: RequestOptions): Observable<Care> {
       const url = `${this.baseUrl}/${care.id}`;
        console.log(care);
        return this.authHttp.put(url, care, options)
            .map(() => care)
            .do(data => console.log('updateCare: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }



  private extractData(response: Response) {
      const body = response.json();
      console.log(body);
      return Care.toArray(body) || {};
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
