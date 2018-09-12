import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-validation',
  template : `
  <div class="jumbotron">
  <h2>Please Enter Your Information Here</h2>
  <form [formGroup]="complexForm" (ngSubmit)="submitForm(complexForm.value)">
  <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['firstName'].valid}">
        <label>First Name:</label>
        <input class="form-control" type="text" placeholder="John" [formControl]="complexForm.controls['firstName']">
      </div> 
      <!-- We are using the ngClass directive to conditionally add a class to our div if the form is invalid -->
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['lastName'].valid}">
        <label>Last Name</label>
        <input class="form-control" type="text" placeholder="Doe" [formControl]="complexForm.controls['lastName']">
      </div>
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['gender'].valid}">
        <label>Gender</label>
        <!-- Here we are using the ngIf directive to display an error message if the user has not selected a gender since we can’t color the radio buttons. -->
        <div class="alert alert-danger" *ngIf="!complexForm.controls['gender'].valid">You must select a gender.</div>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male" [formControl]="complexForm.controls['gender']">
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female" [formControl]="complexForm.controls['gender']">
          Female
        </label>
      </div>
      <div class="form-group">
      <label>Favourites</label>
    </div> 
    <label class="checkbox-inline">
      <input type="checkbox" value="dance" name="dance" [formControl]="complexForm.controls['dance']"> dance
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="sing" name="sing" [formControl]="complexForm.controls['sing']"> sing
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="draw" name="draw" [formControl]="complexForm.controls['draw']"> draw
    </label>
    <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['Age'].valid}">
        <label>Age</label>
        <input class="form-control" type="number" placeholder="21" [formControl]="complexForm.controls['Age']">
      </div>
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['Education'].valid}">
      <label>Education</label>
      <input class="form-control" type="text" placeholder="BCA" [formControl]="complexForm.controls['Education']">
    </div>
    <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['Email'].valid}">
        <label>Email: </label>
        <input class="form-control" type="email" placeholder="v@vami.com" [formControl]="complexForm.controls['Email']">
        <div class="alert alert-danger" *ngIf="!complexForm.controls['Email'].valid">Email cannot be empty</div>
      </div>

    <div class="form-group">
    <button type="submit" class="btn btn-primary" [disabled]="!complexForm.valid">Submit</button>  
    </div>
  </form>
</div>
    `
  
})
export class FormValidationComponent {
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
      'Email' : [null, Validators.required]
      
    })

  }

  submitForm(value: any){
    console.log(value);
  }
}