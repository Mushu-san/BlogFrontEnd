import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hasLoggedIn: boolean = false;

  constructor(private platform: Platform) { }

  ngOnInit(): void {
   this.hasLoggedIn = sessionStorage.getItem("acces_token") ? true : false;
  }

  isHybrid(): boolean {

    return this.platform.is("android");
  }

  logOut(){
    sessionStorage.removeItem("acces_token");
    this.hasLoggedIn = false;
    window.location.reload();
  }

}
