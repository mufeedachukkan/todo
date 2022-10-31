import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      this.log()
    }
  }
  log() {
    var email = this.loginForm.value.email
    var password = this.loginForm.value.password
    const data = {
      email: email,
      password: password,
    }
    return this.http.post('http://localhost:3000/login', data)
      .subscribe((result: any) => {
        console.log("result", result)
        alert(result.message)
        localStorage.setItem('email', JSON.stringify(result.email))
        this.router.navigateByUrl('home')
      }
        , (result) => {
          alert(result.error.message)
        }
      )
  }

}
