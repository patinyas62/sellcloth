import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements OnInit {

  items: Array<any>;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/getsend"
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let post = {
      username: localStorage.getItem('username')
    }
    this.http.post(this.api,post).subscribe(data => {
      var a = []
      a.push(data)
      this.items = a[0]
      console.log(this.items)
    })
  }
}
