import { Component, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { storage } from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  id = {
    username: null,
    password: null
  }

  spin = false;
  apisearch= "https://us-central1-sell-cloth001.cloudfunctions.net/hello/login";

  constructor(private route: ActivatedRoute,public http: HttpClient,private router: Router) {}
  
  ngOnInit(){
    if (localStorage.getItem('username')) {
      this.router.navigate(['tabs/search'])
    }
  }

  login(){
    var post = this.id
    this.spin = true;
    console.log(post)
    this.http.post(this.apisearch,post).subscribe(data =>{
      if (data["check"] == "pass") {
        this.spin = false
        localStorage.setItem('username',data["user"])
        localStorage.setItem('name',data["name"])
        localStorage.setItem('hbd',data["hbd"])
        localStorage.setItem('email',data["email"])
        localStorage.setItem('pic',data["pic"])
        localStorage.setItem('phone',data["phone"])
        this.router.navigate(['tabs/search'])
      }else{
        this.spin = false
        console.log("unpass")
      }
    })

    // console.log(this.id)
    // console.log(this.pass.value)
    // this.router.navigate(['tabs/search'])
  }

  labelClick(){
    console.log("5555")
    this.router.navigate(['regis'])
  }

  labelClick2(){
    console.log("5555")
  }

}
