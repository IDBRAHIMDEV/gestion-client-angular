import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })
  
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.authForm.value)
        .then(() => {
          
          this.toastr.success("Welcome o your new Account", "Success", {
            positionClass: 'toast-bottom-left'
          })

          this.router.navigate(['/clients'])
        
        })
        .catch(err => {
          this.toastr.error(err.message, "Error", {
            positionClass: 'toast-bottom-left'
          })
        })
  }

}
