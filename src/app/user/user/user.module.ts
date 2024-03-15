import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserUpsertComponent } from 'src/app/user-upsert/user-upsert.component';
import { UserListComponent } from 'src/app/user-list/user-list.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent },
      { path: 'upsert', component: UserUpsertComponent },
      // Add additional routes as needed
    ])
  ]
})
export class UserModule { }
