import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ContentService {

    constructor(private http: Http) { }
    url = 'https://quangvinh.herokuapp.com/title'; // chu y la phai co http://
    // url = 'http://localhost:8080/title';
    getData(): Observable<any> {
        debugger;
        return this.http.get(this.url).map((res: Response) => res.text());
    }
}