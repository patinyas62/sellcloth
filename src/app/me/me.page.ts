import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage{

  name;
  pic;

  constructor(private router: Router,private navctrl: NavController) { 
    this.name = localStorage.getItem('name')
  }

  // ngOnInit() {
  //   this.name = localStorage.getItem('name')
  //   console.log(this.name)
  // }

  // ionViewDidLoad(){
  //   this.name = localStorage.getItem('name')
  //   console.log(this.name)
  // }

  edit(){
    this.router.navigate(['edit'])
  }

  basket(){
    this.router.navigate(['basket'])
  }

  chat(){
    this.router.navigate(['chats'])
  }
  
  myshop(){
    this.router.navigate(['mypro'])
  }

  getsend(){
    this.router.navigate(['getsend'])
  }

  get(){
    this.router.navigate(['get'])
  }

  logout(){
    this.navctrl.pop();
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    localStorage.removeItem('pic')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('hbd')
    this.router.navigate(['home'])
  }
}
