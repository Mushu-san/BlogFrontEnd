import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpInterface } from 'src/app/general-module/Data/Interfaces/sign-up-interface';
import { ClienteService } from 'src/app/general-module/Services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    const submitButton = document.getElementById('submit-button');
    submitButton?.addEventListener('click', (event) => {
      event.preventDefault();

      this.signUp();
    });
  }


  signUp(){
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const lastName = (document.getElementById('last-name') as HTMLInputElement).value;

    const body: SignUpInterface = {
      email: email,
      password: password,
      name: name,
      lastname: lastName
    }

    this.clienteService.signUp(body).subscribe(response => {
      console.log(response);
      Swal.fire({
        title: 'Success',
        text: response.message,
        icon: 'success',
      })
      this.router.navigate(['/client/login']);
    });
  }
}
