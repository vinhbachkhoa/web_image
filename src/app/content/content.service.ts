import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ContentService {
    // tslint:disable-next-line:whitespace
    constructor(private http: Http) { }
    url = 'demo';
    getData(): Observable<any[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }

}
