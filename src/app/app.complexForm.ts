import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'complex-form',
  templateUrl : './app.complexform.html'
})
export class ComplexFormComponent {
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [null, Validators.required],
      'dance' : false,
      'sing' :false,
      'draw' :false,
      'Age':false,
      'Education':false,
      'Email' : [null, Validators.required]


    })

  }
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}