import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Enviroment from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string){
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.get<any>(Enviroment.environment.url + url);
  }

  post(url: string, body: any) {
    return this.http.post(Enviroment.environment.url + url, body);
  }

  delete(url:string){
    return this.http.delete<string>(Enviroment.environment.url + url);
  }
}

