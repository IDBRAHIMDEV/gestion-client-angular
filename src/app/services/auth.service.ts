import { UserAuth } from './../models/user-auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private afAuth: AngularFireAuth) { }

  register(user: UserAuth) {
    return this.afAuth
               .auth
               .createUserWithEmailAndPassword(
                 user.email, 
                 user.password
                )
  }

  login(user: UserAuth) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  userAuthenticated() {
    return this.afAuth.user;
  }


  logout() {
    return this.afAuth.auth.signOut();
  }
}
