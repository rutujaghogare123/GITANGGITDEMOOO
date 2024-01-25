import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  email: string='';
  password: string='';
  submit: boolean=false;
  dataArray: any[]= [];
  Submit(){
    const newUser={useremail:this.email,userpassword:this.password};
    this.dataArray.push(newUser);
    this.submit=true

    }
    
   
  }


