import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendService {
 
  rootUrl = environment.rooturl;
 
  constructor(public http: HttpClient) { }
 
  save(): Observable<any>{
    const data = {
      "modelo": "descriptive",
      "fecha": "07/01/2021",
      "nombre": "Test"
    }
    const servicePath = environment.rooturl;
    return this.http.post<any>(servicePath, data);

  }
}
