import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent{
  employeesData:any =[]
  errMsg:string = ''
  constructor(private employeeService:EmployeeService) {
    //console.table(employeeService.getEmployeesInfo())
    //this.employeesData = employeeService.getEmployeesInfo()
    employeeService.getEmployeesInfo().subscribe(res => this.employeesData = res,
                                                 err => this.errMsg = err)
   }

}
