import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from 'src/app/dtos/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  @Input() roomsList: RoomList[] =[] //get data from parent
  @Output() roomSelected = new EventEmitter<RoomList>(); // sent data to parent
  constructor() { }

  ngOnInit(): void {
    this.roomsList;
  }

  
  selectRoom = (room: RoomList) =>{
    this.roomSelected.emit(room);
    console.log(`I am ${room.roomType}`);
    
  }

}
