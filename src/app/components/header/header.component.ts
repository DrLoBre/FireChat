import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: firebase.User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserState()
    .subscribe( user => {
      this.user = user;
    });
  }

  onLogOut() {
    this.authService.logout();
  }

  onLogIn() {
    this.router.navigate(['/login']);
  }

}
