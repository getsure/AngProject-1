import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefined-pipes',
  templateUrl: './predefined-pipes.component.html',
  styleUrls: ['./predefined-pipes.component.css']
})
export class PredefinedPipesComponent {
   name:string = "suresh kumar";
   productPrice:number = 20000;
   sysDate:any = new Date();
   product:object = {
     productId:101, 
     productName:'Samsung Fold 4',
     productPrice:150000
   }
}
