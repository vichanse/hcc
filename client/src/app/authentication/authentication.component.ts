import { AuthenticationService } from './authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'hcc-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
	error: string = '';

	constructor(
		private formBuilder: FormBuilder,
		private authenticationService: AuthenticationService,
		private router: Router
	) {
		this.loginForm = formBuilder.group({
			'username': ['', Validators.required],
			'password': ['', Validators.required]
		});
	}

	onSubmit() {
		this.authenticationService
			.authenticate(this.loginForm.value)
			.subscribe(
	            data => {
	            	localStorage.setItem('id_token', data.token);
                console.log(data.token);
					      this.router.navigate(['/care']);
	            },
	            error => this.error = error.message
	        );
	}

  ngOnInit() {
  }

}
