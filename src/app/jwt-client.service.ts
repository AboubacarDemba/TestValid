import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http : HttpClient) { }

 generateToken(request: any){
    return this.http.post('http://localhost:8080/authenticate',request,{responseType:'text' as 'json'});
  }

  welcome(Token:any):Observable<any>{
    let TokenStr='Bearer '+Token;
    const headers=new HttpHeaders().set('Authorization',TokenStr);
    return this.http.get('http://localhost:8080/',{headers,responseType:'text' as 'json'});
  }
}
