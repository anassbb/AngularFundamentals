import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { IUserCredentials } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  creadentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;
  constructor(private userSrv: UserService, private router: Router) {}

  signIn() {
    debugger;
    this.signInError = false;
    this.userSrv.signIn(this.creadentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true),
    });
  }
}
