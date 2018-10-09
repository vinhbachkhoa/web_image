import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as env from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
    })
};
@Injectable()
export class ContentService {

    constructor(private http: HttpClient) {

    }
    uploadFile(fileUpload: File): Promise<any> {
        const url = env.environment.baseUrl;
        const formData: FormData = new FormData();
        formData.append('fileImg', fileUpload, fileUpload.name);
        console.log(formData);
        return this.http.post(url, formData, httpOptions).toPromise()
            .then(res => { return true })
            .catch(error => { return false });
    }
}   