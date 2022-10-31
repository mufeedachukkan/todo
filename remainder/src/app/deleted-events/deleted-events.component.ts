import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleted-events',
  templateUrl: './deleted-events.component.html',
  styleUrls: ['./deleted-events.component.css']
})
export class DeletedEventsComponent implements OnInit {
  data:any
  constructor(private http: HttpClient,private router:Router) {
    this.getEvent()

   }

  ngOnInit(): void {
  }
  getEvent() {
    var data = {
      email: JSON.parse(localStorage.getItem('email') || '')
    }
    return this.http.post('http://localhost:3000/getdeletedevent', data)
      .subscribe((result: any) => {
        this.data=result.item.events
        console.log("this.data",this.data)
      } , (result) => {
        console.log(result.error.message)
      }
  )}
}
