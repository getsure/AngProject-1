import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  pAmount:number = 1000;
  updatedParentAmount(data:any){
     this.pAmount = data
  }
}
