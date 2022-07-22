import { Component} from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent { 
  name:string = "suresh kumar"
  getProductDetails(){
    alert("function is calling...")
  }
}
