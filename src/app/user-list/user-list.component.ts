import { Component } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public data2:any;
  constructor(private servise:DatasService){
     this.servise.getData().subscribe({
      next: (res:any)=>{
        console.log(res)
        this.data2 = res
      },
      error: (err:any)=>{
        console.log(err)
      }
     })
  }


}
