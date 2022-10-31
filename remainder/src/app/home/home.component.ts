import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: any
  edItem:any
  data:any
  constructor(private http: HttpClient,private router:Router) { 
    this.getEvent()
  }

  ngOnInit(): void {
    // this.getEvent()
  }
  getEvent() {
    var data = {
      email: JSON.parse(localStorage.getItem('email') || '')
    }
    return this.http.post('http://localhost:3000/getevent', data)
      .subscribe((result: any) => {
        this.data=result.item.events
        console.log("this.data",this.data)
      } , (result) => {
        console.log(result.error.message)
      }
  )}
  addEvent() {
    this.email = JSON.parse(localStorage.getItem('email') || '')
  }
  cancel(event: any) {
    this.email = ''
  }
  add(event: any) {
    this.getEvent()
    this.email = ''
  }
  ED(cItem:any){
    this.edItem=cItem
    console.log(this.edItem)
  }
  canceld(event:any){
    this.edItem=''
  }
  delete(event:any){
    // var data=this.edItem
    // console.log("data",data)
    var data={
      email: JSON.parse(localStorage.getItem('email') || ''),
      date:this.edItem.date,
      name:this.edItem.name,
      priority:this.edItem.priority
    }
        console.log("data",data)
    return this.http.post('http://localhost:3000/deleteevent', data)
    .subscribe((result:any)=>{
      alert(result.message)
      this.edItem=''
      this.router.navigateByUrl('home')
    })   
  }
}