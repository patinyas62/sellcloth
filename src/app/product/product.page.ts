import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { database } from 'firebase';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  datase;
  item: Array<any>;
  pic;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/getbas"
  apisearch= "https://us-central1-sell-cloth001.cloudfunctions.net/hello/usersearch";
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 
    this.route.queryParams.subscribe(params =>{
      console.log(params)
      if(params&&params.data){
        this.datase = params.data
        this.pic = params.pic
      }
    })
  }

  async ngOnInit() {
    console.log(this.datase)
    let post = {
      username: this.datase
    }

    await this.http.post(this.apisearch,post).subscribe(data => {
      let a = []
      a.push(data)
      this.item = a[0]
      console.log(this.item)
    })

  }

  getbas(j){
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

  async chat(){
    let post = {
      user1: localStorage.getItem('username'),
      user2: this.datase
    }
    var a = ""
    localStorage.setItem('chatwith',this.datase)
    localStorage.setItem('picus',this.pic)
    await this.http.post("https://us-central1-sell-cloth001.cloudfunctions.net/hello/buildchat",post).subscribe(data => {})
    
    this.router.navigate(['chatroom'])
    
  }

}
