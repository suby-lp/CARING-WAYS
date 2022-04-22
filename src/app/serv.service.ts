import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private   http: HttpClient) { }
  getLogin(data:any){

    
    return this.http.post<any>('https://v2-api-dev.caringways.com/api/v2/user/login',data)
  }
}
