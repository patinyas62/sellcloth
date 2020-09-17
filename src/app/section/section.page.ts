import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {

  datase;
  check = true;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/secproduct";
  apis = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/getbas"
  item: Array<any>;
  constructor(private route: ActivatedRoute,private http: HttpClient) { 
    this.route.queryParams.subscribe(params =>{
      console.log(params)
      if(params&&params.data){
        this.datase = params.data
      }
    })
  }

  async ngOnInit() {
    let post = {
      sec: this.datase
    }
    console.log(this.datase)
    await this.http.post(this.api,post).subscribe(data => {
      var a = []
      a.push(data)
      this.item = a[0]
      if (a[0].length != 0) {
        this.check = false
      }
      console.log(a[0])
    }), error => {
      console.log(error)
    }
  }

  getbasket(j){
    let post = {
      username: localStorage.getItem('username'),
      name: j.name,
      pic: j.pic,
      price: j.price,
      shop: j.shop
    }
    this.http.post(this.apis,post).subscribe(data => {
      console.log(data['check'])
    })
    alert("ลงตระกร้าแล้ว")
  }

}
