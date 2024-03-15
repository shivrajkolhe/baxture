import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent {
[x: string]: any;
 public empForm:any;
 public isFormSubmit:boolean=false;
 public counter:number=1;
 public data:any=[];


 constructor(private fb:FormBuilder, private servise:DatasService){
    this.empForm = this.fb.group({
      fname : ['',[Validators.required]],
      lname : ['',[Validators.required]],
      email: ['', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    })
    this.sendDatatoUserList()
 }
 onSubmitEmpData() {
  this.isFormSubmit = true;
  console.log(this.empForm.value)
  if (this.empForm.valid) {
    const formData = { 
      id: this.counter++, // Generate a unique ID using the counter
      fname: this.empForm.value.fname,
      lname: this.empForm.value.lname,
      email: this.empForm.value.email,
      phone: this.empForm.value.phone
    };
    this.data.push(formData);
    this.empForm.reset();
  }

}

 get f(){
  return this.empForm.controls;
 }

 sendDatatoUserList(){
   this.servise.setData(this.data)
 }
}
