import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent{
  constructor(private formBuilder:FormBuilder){}

  userForm = this.formBuilder.group({
    userName:['',[Validators.required]],
    email:['',[Validators.required]],
    address:this.formBuilder.group({
      city:['', Validators.required],
      postal:['',Validators.required]
    })
  })

  submitForm(){
    //console.log(this.userForm.value)
  }

}
