import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    userId: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      this.reg()
    }
  }
  reg() {
    var userId = this.registerForm.value.userId
    var email = this.registerForm.value.email
    var password = this.registerForm.value.password
    var dateOfBirth = this.registerForm.value.dateOfBirth
    const data = {
      userId: userId,
      email: email,
      password: password,
      dob: dateOfBirth
    }
    return this.http.post('http://localhost:3000/register', data)
      .subscribe((result: any) => {
        console.log("result", result)
        alert(result.message)
      }
        , (result) => {
          alert(result.error.message)
        }
      )
  }
}
