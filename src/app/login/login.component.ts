import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from '../CONSTS';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showUi: boolean = false;
  showloader = false;
  uid: string = '';
  constructor() {}

  ngOnInit() {
    CometChat.getLoggedinUser().then(
      (user) => {
        if (user) {
          location.href = '/chat-view';
          this.uid = user.getUid();
        } else {
          this.showUi = true;
          this.showloader = false;
        }
      },
      (error) => {
        console.log('yes here', error);
        this.showUi = true;
        this.showloader = false;
      }
    );
  }

  login = (event?, uid?) => {
    this.showloader = true;
    if (event) {
      event.preventDefault();
    }

    if (uid) {
      this.uid = uid;
    }

    CometChat.login(this.uid, COMETCHAT_CONSTANTS.API_KEY).then(
      (user) => {
        console.log('sucess');
        location.href = '/chat-view';
      },
      (error) => {
        console.log('CometChatLogin Failed', error);
        this.showloader = false;
      }
    );
  };
}
