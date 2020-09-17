import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { database } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.page.html',
  styleUrls: ['./myproduct.page.scss'],
})
export class MyproductPage implements OnInit {

  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/allpro"
  item: Array<any>
  post = {
    username: localStorage.getItem("username")
  }

  constructor(private http: HttpClient,private route: Router) { }

  async ngOnInit() {
    
    await this.http.post(this.api,this.post).subscribe(data => {
      let a = []
      a.push(data)
      this.item = a[0]
      console.log(this.item)
    })
  }

  async getbas(i){
    for (const key in this.item) {
      if (this.item[key]['name'] == i) {
        let pot = {
          name: i
        }
        await this.http.post("https://us-central1-sell-cloth001.cloudfunctions.net/hello/deletepro",pot).subscribe(data => {})
        this.item.splice(parseInt(key),1)
        console.log(this.item)
        break;
      }
    }
  }

  emit(){
    this.route.navigate(['pushpro'])
  }

}
