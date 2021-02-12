import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OtrosLoginService {
  public url: string;
  
  constructor(
    private _http: Http,
    private http:HttpClient
    
    ){
      this.url = GLOBAL.url;
    }

   getIPAddress(){
    // return this.http.get("https://www.cloudflare.com/cdn-cgi/trace/?format=json") 
    return this.http.get("https://jsonip.com/?format=json");
  }
}
