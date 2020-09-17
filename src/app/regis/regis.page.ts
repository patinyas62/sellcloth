import { Component, OnInit } from '@angular/core';
import {} from 'firebase'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { error } from 'protractor';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  user= {
    username: null,
    password: null,
    repass: null,
    phone: null
  }

  checkuser = false;
  checkpass = false;
  checkrepass = false;
  checksame = false;
  checkphone = false;
  checksameuser = false;

  spin = false;

  apisearch= "https://us-central1-sell-cloth001.cloudfunctions.net/hello/regis";
  constructor(private route: ActivatedRoute,public http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  async register(){
    var user = this.user
    if (user.username == null || user.username == "") {
      this.checkuser = true
    } else {
      this.checkuser = false
    }
    if (user.password == null || user.password == "" ) {
      this.checkpass = true
    } else if (user.repass == null || user.repass == "" ){
      this.checkrepass = true
      this.checksame = false
      this.checkpass = false
    } else if (user.password != user.repass){
      this.checksame = true
      this.checkrepass = false
      this.checkpass = false
    } else {
      this.checkpass = false
      this.checkrepass = false
      this.checksame = false
    }
    if (user.phone == null || user.phone == "" ) {
      this.checkphone = true
    } else {
      this.checkphone = false
    }
    
    if (!(this.checkpass || this.checkphone || this.checkrepass || this.checksame || this.checkuser)) {
      let post = {
        username: user.username,
        password: user.password,
        phone: user.phone
      }
      this.spin = true
      await this.http.post(this.apisearch,post).subscribe(data => {
        if (data["test"] == "pass") {
          this.spin = false
          this.user= {
            username: null,
            password: null,
            repass: null,
            phone: null
          }
          this.router.navigate(['home'])
        } else {
          this.checksameuser = true
          this.spin = false
        }
      }, error => {
        console.log(error)
      })
      
    }

    // await this.http.post(this.apisearch,postd)
    // .subscribe(data => {
    //   let a = []
    //   a.push(data)
    //   this.items = a[0]
    //   console.log(this.items)
    // }, error => {
    //   console.log(error)
    // })

  }

}
