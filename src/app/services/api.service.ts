import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  staffArray:any;
  baseUrl="http://localhost:8088/api/blob/getAllStaffDetails";
  constructor(private http : HttpClient) { }

  getAllStaffDetails(){

    return this.http.get(this.baseUrl).toPromise();
  
  }

}
