import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  register() {
    this.authService.register(this.authForm.value)
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
