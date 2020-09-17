import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {
  
  items: Array<any>;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/send"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let post = {
      username: localStorage.getItem('username'),
      want: 'cancel'
    }
    this.http.post(this.api,post).subscribe(data => {
      var a = []
      a.push(data)
      this.items = a[0]
    })
  }
}
