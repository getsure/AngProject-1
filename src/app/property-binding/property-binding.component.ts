import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent{
//  myImage:string = "assets/images/aa.jpg"
myImage:string = "https://1.bp.blogspot.com/-pX_b-6wXKIg/Vk1aHN9PsXI/AAAAAAAAABU/9G37eHflhpk/s320/cloning.jpg"
 product = {
  name:"Samsung Tv"
 }
}
