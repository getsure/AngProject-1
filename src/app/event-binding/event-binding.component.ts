import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{
  sendDataFromViewToComp(data:any){
    console.log(`Getting Data from View => `+data)
  }
}
