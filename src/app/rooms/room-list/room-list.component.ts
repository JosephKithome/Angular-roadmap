import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,DoCheck } from '@angular/core';
import { RoomList } from 'src/app/dtos/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit, OnChanges, DoCheck {
  @Input() roomsList: RoomList[] =[] //get data from parent
  @Output() roomSelected = new EventEmitter<RoomList>(); // sent data to parent
  constructor() { }

  ngDoCheck(): void {
    console.log("On change called");
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.roomsList;
  }

  
  selectRoom = (room: RoomList) =>{
    this.roomSelected.emit(room);
    console.log(`I am ${room.roomType}`);
    
  }

}
