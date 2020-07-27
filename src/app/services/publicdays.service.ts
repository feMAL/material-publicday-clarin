import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_CONFIG } from './conf/config'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PublicdaysService {

  private urlBase:string = API_CONFIG._api

  constructor(private _http:HttpClient) { }

  getAllPublicDays(){
    let url = this.urlBase + API_CONFIG.uri.publicdays
    return this._http.get(url).pipe( map( (res:any) => res.feriados ) );
  }

  getPublicDay( id : string){
    let url = `${this.urlBase}${API_CONFIG.uri.publicday}/${id}`
    return this._http.get(url).pipe( map( (res:any) => res.feriado ) );
  }
}
