import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  @Input() item: string | undefined
  @Output() onCancel = new EventEmitter()
  @Output() onAdd = new EventEmitter()
  eventForm = this.fb.group({
    // userId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    date: ['', [Validators.required]],
    priority: ['',[Validators.required]],
  })
  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router,private home:HomeComponent) { }

  ngOnInit(): void {
  }
  add(){
    if (this.eventForm.valid) {
      this.ad()
      this.Add()
    }
  }
  ad(){
    var name = this.eventForm.value.name
    var date = this.eventForm.value.date
    var priority = this.eventForm.value.priority
    const data = {
      email:JSON.parse(localStorage.getItem('email')||''),
      name:name,
      date:date,
      priority:priority
    }
    console.log("data",data)
    return this.http.post('http://localhost:3000/addevent', data)
    .subscribe((result:any)=>{
      alert(result.message)
     this.home.getEvent()
    },
    (result)=>{
      alert(result.error)
    })
  }
  Add(){
    this.onAdd.emit(this.item)
  }
  cancel(){
    this.onCancel.emit(this.item)
  }
}
