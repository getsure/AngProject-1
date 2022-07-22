import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  cAmount:number = 0;

  @Output()
  notify: EventEmitter<number> = new EventEmitter<number>();

  stocks(){
     this.cAmount--;
     this.notify.emit(this.cAmount)
  }
  banking(){
    this.cAmount++;
    this.notify.emit(this.cAmount)
  }

}
