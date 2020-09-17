import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  items: Array<any>;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/send"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let post = {
      username: localStorage.getItem('username'),
      want: 'send'
    }
    this.http.post(this.api,post).subscribe(data => {
      var a = []
      a.push(data)
      this.items = a[0]
    })
  }

  async submit(i){
    for (const key in this.items) {
      if (this.items[key]['name'] == i['name']) {
        let pot = {
          name: i['name'],
          user: i['usersend'],
          username: localStorage.getItem('username')
        }
        await this.http.post("https://us-central1-sell-cloth001.cloudfunctions.net/hello/submitsend",pot).subscribe(data => {})
        this.items.splice(parseInt(key),1)
        console.log(this.items)
        break;
      }
    }
  }
}
