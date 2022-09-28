import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Room, RoomList } from '../dtos/room';
import { HeadComponent } from '../head/head.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = "Hilton Hotel Kenya!"
  numberOfRooms = 10;
  hideRooms = true;

  room: Room = {
    availableRooms: 20,
    totalRooms: 20,
    bookedRooms: 5

  }

  roomList: RoomList[] = [{
    roomType: "Moses Room",
    amenities: "Amenity",
    price: 1000,
    photos: "Jamaican photos",
    checkInTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },
  {
    roomType: "Max Room",
    amenities: "Amenity",
    price: 1000,
    photos: "Max photos",
    checkInTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  }, {
    roomType: "James Room",
    amenities: "Amenity",
    price: 1000,
    photos: "James photos",
    checkInTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },]

  ourselectedRoom!: RoomList

  @ViewChild(HeadComponent) headComponent!: HeadComponent
  constructor() { }


  ngOnInit(): void {

    console.log(this.headComponent);
    
  }

  ngAfterViewInit(): void {
    this.headComponent.title="ROOM VIEW"
    console.log(this.headComponent);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom = (room: RoomList) => {
    console.log("your room is :", room);
    this.ourselectedRoom = room;

  }

  addRoom = () => {
    const room: RoomList = {
      roomType: "New Room",
      amenities: "Amenity",
      price: 5000,
      photos: "James photos",
      checkInTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')

    }
    // this.roomList.push(room);

    this.roomList = [...this.roomList, room]
  }
}
