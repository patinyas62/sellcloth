import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getsend',
  templateUrl: './getsend.page.html',
  styleUrls: ['./getsend.page.scss'],
})
export class GetsendPage implements OnInit {

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
    })
  }

  async cancel(i){
    for (const key in this.items) {
      if (this.items[key]['name'] == i['name']) {
        let pot = {
          name: i['name'],
          user: i['shop'],
          username: localStorage.getItem('username')
        }
        await this.http.post("https://us-central1-sell-cloth001.cloudfunctions.net/hello/delsend",pot).subscribe(data => {})
        this.items.splice(parseInt(key),1)
        console.log(this.items)
        break;
      }
    }
  }

}
