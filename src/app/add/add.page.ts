import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  user = {
    username: localStorage.getItem('username'),
    ad: "",
    local: "",
    dis: "",
    provin: ""
  }
  appiadd = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/addAddress"

  constructor(private http: HttpClient,private rout: Router) { }

  ngOnInit() {
  }

  addadre(){
    let post = {
      username: localStorage.getItem('username'),
      addresss: this.user.ad + " " + "ตำบล: " + this.user.local + "อำเภอ: " +this.user.dis + " " + "จังหวัด: " +this.user.provin
    }
    this.http.post(this.appiadd,post).subscribe(data => {
      console.log("Ok")
      this.rout.navigate(['address'])
    })
  }
  
}
