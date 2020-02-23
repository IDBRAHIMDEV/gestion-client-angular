import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router, 
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
        .then(() => {
          this.toastr.info('User SignOut', 'Info', {
            positionClass: 'toast-bottom-left'
          })

          this.router.navigateByUrl('/login');
        })
        .catch(err => {
          this.toastr.warning(err.message, 'Warning', {
            positionClass: 'toast-bottom-left'
          })
        })
  }

}
