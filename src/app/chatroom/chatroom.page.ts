import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, Platform ,IonContent} from '@ionic/angular';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage {

  muser = localStorage.getItem('username')
  picm = localStorage.getItem('pic')
  ruser = localStorage.getItem('chatwith')
  picr = localStorage.getItem('picus')
  chatroom: Array<any>;
  message = '';
  messages: Object[];
  item: Array<any>
  s;
  spin = true;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/detail"

  constructor(private changeRef: ChangeDetectorRef,private http: HttpClient,public db: AngularFireDatabase,private route: ActivatedRoute,private loading: LoadingController) {

  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  async ngOnInit() {
    let post = {
      user1: this.muser,
      user2: this.ruser
    }
    await this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/findchat',post).subscribe(data => {
      var f = []
      f.push(data)
      this.chatroom = f[0]
      console.log(this.chatroom)
      this.db.database.ref('chats/' + this.chatroom['chatroom'] + '/chat').once('value',(snapshot) => {
        var a = snapshot.val()
        var b = []
        for (const key in a) {
          b.push(a[key])
        }
        this.messages = b
        this.spin = false
        
      })
      this.db.database.ref('chats/' + this.chatroom['chatroom'] + '/chat').on('value',(snapshot) => {
        console.log("555")
        var a = snapshot.val()
        var b = []
        for (const key in a) {
          b.push(a[key])
        }
        this.messages = b
        this.spin = false
        this.changeRef.detectChanges();
        console.log(this.messages)
      })
      
    })    
  }

  getmessage(){
    
  }

  back(){
    this.spin = true
    this.messages = []
    localStorage.removeItem('chatroom')
    localStorage.removeItem('chatwith')
  }


  sendmessage(){
    this.db.object('user/' + localStorage.getItem('username') + '/chat/' + this.ruser).update({
      lastuser: localStorage.getItem('username')
    })
    this.db.object('user/' + this.ruser + '/chat/' + localStorage.getItem('username')).update({
      lastuser: localStorage.getItem('username')
    })
    this.db.list('chats/' + this.chatroom['chatroom'] + '/chat').push({
      message: this.message,
      user1: this.muser
    })
    this.message = '';
    console.log(this.messages)
  }

}
