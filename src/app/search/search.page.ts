import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchh',{static: false}) search;
  item: Array<any>;
  apiget = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/prepro"
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/getbas"

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiget).subscribe(data => {
      var a = []
      a.push(data)
      this.item = a[0]
      console.log(this.item)
    })
  }

  basket(){
    this.router.navigate(['basket'])
  }

  get() {
    console.log(this.search.value)
    let navigationextras: NavigationExtras = {
      queryParams:{
        data: this.search.value
      }
    }
    this.router.navigate(['detail'],navigationextras)
  }

  section(y){
    let navigationextras: NavigationExtras = {
      queryParams:{
        data: y
      }
    }
    this.router.navigate(['section'],navigationextras)
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

  chat(){
    this.router.navigate(['chats'])
  }

}
