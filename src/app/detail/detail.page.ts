import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  datase: any;
  datas;
  items: Array<any>;
  apisearch= "https://us-central1-sell-cloth001.cloudfunctions.net/hello/search";
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/getbas"
  @ViewChild('searchh',{static: false}) search;

  constructor(private route: ActivatedRoute,public http: HttpClient) { 
    this.route.queryParams.subscribe(params =>{
      console.log(params)
      if(params&&params.data){
        this.datase = params.data
      }
    })
  }

  async ngOnInit() {
    let postd = {
      name: this.datase
    }
    
    await this.http.post(this.apisearch, postd)
      .subscribe(data => {
        let a = []
        a.push(data)
        this.items = a[0]
        console.log(this.items)
       }, error => {
        console.log(error);
    });
    // this.datas = a[0]
    // console.log(this.datas)
  }

  getbasket(j){
    let post = {
      username: localStorage.getItem('username'),
      name: j.name,
      pic: j.pic,
      price: j.price,
      shop: j.shop
    }
    this.http.post(this.api,post).subscribe(data => {
      console.log(data['check'])
    })
    alert("ลงตระกร้าแล้ว")
  }

  async get(){
    let postd = {
      name: this.search.value
    }
    await this.http.post(this.apisearch,postd)
    .subscribe(data => {
      let a = []
      a.push(data)
      this.items = a[0]
      console.log(this.items)
    }, error => {
      console.log(error)
    })
  }
}
