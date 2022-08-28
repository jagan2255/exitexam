import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata={
    email:""
  }

  constructor(private user:UserService ,  private router:Router) { }

  getuser(){
     this.user.getotp(this.userdata)
     localStorage.setItem('email' , this.userdata.email)
     this.router.navigate(["/otp"])
  }

  ngOnInit(): void {
  }

}
