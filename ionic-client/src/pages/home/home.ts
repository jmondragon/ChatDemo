import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service'
import { RoomService } from '../../services/room.service'
import { LoginPage } from '../login/login'
import { ChatPage } from '../chat/chat'
import { Room } from './room.model'

// TODO: refresh function
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RoomService]
})
export class HomePage {

  chatRooms :Room[] = []

  constructor(public navCtrl: NavController,
    private authSvc: AuthService,
    private roomSvc: RoomService) {
  }

  ionViewDidLoad() {
    this.roomSvc.allRooms
      .subscribe( all => {
        this.chatRooms = all
      })
  }

  logout() {
    this.authSvc.logout()
      .subscribe( success => {
      })
    this.navCtrl.setRoot(LoginPage)
  }

  roomSelected(room: Room) {
    this.navCtrl.push(ChatPage,{room: room})
  }
}