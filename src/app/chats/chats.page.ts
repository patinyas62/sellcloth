import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  spin = true;
  item: Array<any>
  userm = localStorage.getItem('username')

  constructor(private http: HttpClient,private route: Router) { 
  }

  ngOnInit() {
    let post = {
      username: localStorage.getItem('username')
    }
    this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/chatroom',post).subscribe(data => {
      var a = []
      a.push(data)
      this.item = a[0]
      this.spin = false
      console.log(this.userm)
      console.log(this.item);
    })
  }

  async chat(i){
    localStorage.setItem('chatwith',i.username)
    localStorage.setItem('picus',i.pic)
    let post = {
      user1: i.username,
      user2: localStorage.getItem('username')
    }
    await this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/findchat',post).subscribe(data => {
      var f = data['chatroom']
      let navigationextras: NavigationExtras = {
        queryParams:{
          data: f
        }
      }
      this.route.navigate(['chatroom'],navigationextras)
    })
  }
}
