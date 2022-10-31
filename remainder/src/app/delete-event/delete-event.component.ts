import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  @Input() item: object | undefined
  @Output() onCancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
  }
  cancel(){
    this.onCancel.emit(this.item)
  }
}
