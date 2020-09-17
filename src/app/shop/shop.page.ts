import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  item: Array<any>;
  spin = true;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get('https://us-central1-sell-cloth001.cloudfunctions.net/hello/allshop').subscribe(data => {
      var a = []
      a.push(data)
      this.item = a[0]
      this.spin = false
      console.log(this.item);
    })
    
  }

  product(f){
    let navigationextras: NavigationExtras = {
      queryParams:{
        data: f.username,
        pic: f.pic
      }
    }
    this.router.navigate(['product'],navigationextras)
  }

}
