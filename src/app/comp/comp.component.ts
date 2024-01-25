import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
  
  email=''
  password=''
  branch=''
  cgpa=''
  submit=false
  dataArray: any[]= [];
  Submit(){
    const newUser={useremail:this.email,userpassword:this.password,userbranch:this.branch,usercgpa:this.cgpa};
    this.dataArray.push(newUser);
    this.submit=true

    }
  }


