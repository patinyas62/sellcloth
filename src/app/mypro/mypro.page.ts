import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypro',
  templateUrl: './mypro.page.html',
  styleUrls: ['./mypro.page.scss'],
})
export class MyproPage implements OnInit {

  pic;
  name;
  constructor(private http: HttpClient,private route: Router) { 
    this.name = localStorage.getItem('name')
    this.pic = localStorage.getItem('pic')
  }

  ngOnInit() {
    // this.http.post("",{})
  }

  send(){
    this.route.navigate(['send'])
  }

  cancel(){
    this.route.navigate(['cancel'])
  }

  allpro(){
    this.route.navigate(['myproduct'])
  }

}
