import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  basUrl:string = 'http://localhost:3000/'

  getCustomer():Observable<any>
  {
    return this._HttpClient.get(this.basUrl + `customers`)
  }

  getTarnsaction():Observable<any>
  {
    return this._HttpClient.get(this.basUrl + `transactions`)
  }
}
