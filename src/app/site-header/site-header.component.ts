import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMeny: boolean = false;
  constructor(private userSev: UserService) {}

  ngOnInit() {
    this.userSev.getUser().subscribe({
      next: (user) => {
        this.user = user;
      },
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMeny = !this.showSignOutMeny;
  }

  signOut() {
    this.userSev.signOut();
    this.showSignOutMeny = false;
  }
}
