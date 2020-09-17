import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/Address"
  // appiadd = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/addAddress"
  item: Array<any>
  check = [];
  count = 0;
  constructor(private http: HttpClient,private rout: Router) { }

  ngOnInit() {
    let post = {
      username: localStorage.getItem('username')
    }
    this.http.post(this.api,post).subscribe(async (data) => {
      let a = []
      let b = []
      await b.push(data)
      for (let index = 0; index < b[0].length - 1; index++) {
        this.count = 1;
        if (index == 0) {
          this.check.push(true)
        }else{
          this.check.push(false)
        }
        await a.push(data[index]['Addresss'])
      }
      // console.log(a)
      this.item = await a
      console.log(this.item)
    })    
  }

  truefalse(i,j){
    let num = this.check.length
    for (const key in this.check) {
      if (key == i) {
        localStorage.setItem("checkaddress",'true')
        localStorage.setItem('address',j)
        console.log(localStorage.getItem('address'))
        // no change
      } else {
        this.check[key] = false
      }
    }
  }

  addadre(){
    console.log(this.item)
    // this.rout.navigate(['add'])
  }

}
