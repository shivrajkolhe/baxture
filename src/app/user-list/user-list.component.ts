import { Component } from '@angular/core';
import { DatasService } from '../datas.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public data2: any;
  public empForm1: any;
  public isFormSubmit1: boolean = false;
  public counter: number = 1;
  public data1: any = [];

  constructor(private service: DatasService, private fb: FormBuilder) {
    this.service.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.data2 = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  
    this.empForm1 = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onDelete(data: any) {
    console.log(data);
    this.data2 = this.data2.filter((element: any) => element.id !== data.id);
  }

  onUpdate(updatedData: any) {
    console.log(updatedData.value);
    const index = this.data2.findIndex((ele: any) => ele.id === updatedData.value.id);
    if (index !== -1) {
      this.data2[index] = updatedData.value;
    }
  }

  onSubmitEmpData1() {
    this.isFormSubmit1 = true;
    console.log(this.empForm1.value)
    if (this.empForm1.valid) {
      const formData = {
        id: this.counter++, // Generate a unique ID using the counter
        fname: this.empForm1.value.fname,
        lname: this.empForm1.value.lname,
        email: this.empForm1.value.email,
        phone: this.empForm1.value.phone
      };
      this.data1.push(formData);
      this.empForm1.reset();
      console.log(this.empForm1.value)
    }
  }

  get f1() {
    return this.empForm1.controls;
  }

  onDataSelect(data: any) {
    console.log(data);
    this.empForm1.patchValue({
      id: data.id,
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      phone: data.phone
    });
  }

  onUpdateData(updatedData: any) {
    const index = this.data2.findIndex((ele: any) => ele.id === updatedData.id);
    if (index !== -1) {
      this.data2.splice(index, 1, updatedData);
    }
  }
  
}
