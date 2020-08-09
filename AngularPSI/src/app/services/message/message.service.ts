import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

    apiURL: string ='http://localhost:8000/api/';

    constructor( public http:HttpClient ) {}

    showMessage():Observable<any> {
        return this.http.get(this.apiURL + 'tag');
    }
}

