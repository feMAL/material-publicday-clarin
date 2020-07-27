import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_CONFIG, API_PROD_CONFIG } from './conf/config'
import { map } from 'rxjs/operators'
import { PublicDay } from '../models/publicday';

@Injectable({
  providedIn: 'root'
})
export class PublicdaysService {

  private urlBase:string = API_CONFIG._api
  private urlBaseProd:string = API_PROD_CONFIG._api

  constructor(private _http:HttpClient) {
    this.urlBaseProd = API_PROD_CONFIG._api
  }

  getAllPublicDays(){
    let url = this.urlBase + API_CONFIG.uri.publicdays;
    if(process.env.NODE_ENV == 'production'){
      url = `https://${this.urlBaseProd}/${API_PROD_CONFIG.uriBase}/${API_PROD_CONFIG.uri}`
    }
    
    return this._http.get(url).pipe( map( (res:any) => res.feriados ) );
  }

  getPublicDay( id : string){
    let url = `${this.urlBase}${API_CONFIG.uri.publicday}/${id}`;
    if(process.env.NODE_ENV == 'production'){
      url = `https://${this.urlBaseProd}/${API_PROD_CONFIG.uriBase}/${API_PROD_CONFIG.uri}`
    }

    return this._http.get(url).pipe( map( (res:any) => res.feriado ) );
  }

  updatePublicDay( publicDay: PublicDay){
    let url = `${this.urlBase}${API_CONFIG.uri.publicday}/${publicDay._id}`;
    if(process.env.NODE_ENV == 'production'){
      url = `https://${this.urlBaseProd}/${API_PROD_CONFIG.uriBase}/${API_PROD_CONFIG.uri}`
    }
    return this._http.put(url,publicDay).pipe( map( (res:any) => res.feriado ) );
  }
}
