import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_CONFIG } from './conf/config'
import { map } from 'rxjs/operators'
import { PublicDay } from '../models/publicday';

@Injectable({
  providedIn: 'root'
})
export class PublicdaysService {

  private urlBase:string = API_CONFIG._api

  constructor(private _http:HttpClient) { }

  getAllPublicDays(){
    let url = this.urlBase + API_CONFIG.uri.publicdays;
    return this._http.get(url).pipe( map( (res:any) => res.feriados ) );
  }

  getPublicDay( id : string){
    let url = `${this.urlBase}${API_CONFIG.uri.publicday}/${id}`;
    return this._http.get(url).pipe( map( (res:any) => res.feriado ) );
  }

  updatePublicDay( publicDay: PublicDay){
    let url = `${this.urlBase}${API_CONFIG.uri.publicday}/${publicDay._id}`;
    return this._http.put(url,publicDay).pipe( map( (res:any) => {
      console.log(res)
      return res.feriado} ) );
  }
}
