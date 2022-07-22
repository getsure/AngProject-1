import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-dir',
  templateUrl: './struct-dir.component.html',
  styleUrls: ['./struct-dir.component.css']
})
export class StructDirComponent {
  isShowElement:boolean = false;
  course:string = "Angular"
  names:string[] = ["chiru","suresh","amit"]

  employees =[
    {empId:101, empName:"chiru", empSal:30000},
    {empId:102, empName:"kiran", empSal:40000},
    {empId:103, empName:"amith", empSal:50000},
  ]

}
