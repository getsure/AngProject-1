import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  private bs = new BehaviorSubject("Hello All")
  obs = this.bs.asObservable();
  
  changeData(data:any){
    this.bs.next(data)
  }
}
