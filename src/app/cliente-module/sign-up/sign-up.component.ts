import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const submitButton = document.getElementById('submit-button');
    submitButton?.addEventListener('click', (event) => {
      event.preventDefault();

      const email = (document.getElementById('email') as HTMLInputElement)
        .value;
      const password = (document.getElementById('password') as HTMLInputElement)
        .value;
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const lastName = (document.getElementById('last-name') as HTMLInputElement)
        .value;

      console.log(email, password);
    });
  }
}
