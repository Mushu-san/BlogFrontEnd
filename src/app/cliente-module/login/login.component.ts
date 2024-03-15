import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const submitButton = document.getElementById('submit-button');
    submitButton?.addEventListener('click', (event) => {
      event.preventDefault();

      const email = (document.getElementById('email') as HTMLInputElement)
        .value;
      const password = (document.getElementById('password') as HTMLInputElement)
        .value;

      console.log(email, password);
    });
  }
}
