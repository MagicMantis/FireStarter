import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  signUp(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['home']);
        this.setUserData(result.user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  signIn(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['home']);
        this.setUserData(result.user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  signOut() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    })
  }

  sendVerificationMail() {
    return this.fireAuth.currentUser.then(user => {
      user.sendEmailVerification();
      this.router.navigate(['verify-email-address']);
    })
  }

}
