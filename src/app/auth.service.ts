import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  //Set up the URL

  private url: string;

  constructor(private http: HttpClient) {
    let l = window.location;
    let host:string;
    
    if(l.port >= '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }

    this.url = `${l.protocol}//${host}/api/auth/`;
  }

}