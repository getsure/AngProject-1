import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string = "assets/employees.json"
  constructor(private httpClient:HttpClient){}
  getEmployeesInfo(){
    return this.httpClient.get(this.url)
  }   
}
