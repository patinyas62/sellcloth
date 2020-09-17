import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  ischeck = true;
  pice = 5;
  pic = "https://firebasestorage.googleapis.com/v0/b/sellclothe-3fa.appspot.com/o/211886.jpg?alt=media&token=db43b7bf-1465-4fbb-9add-f143feab31f7"
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/basket"
  address = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/Address"
  item: Array<any>;
  itemAdress: Array<any>;
  payall;
  count;

  constructor(private http: HttpClient,private alertcontrol: AlertController,private router: Router) {
    
  }

  ngOnInit() {
    var post = {
      username: localStorage.getItem('username')
    }
    console.log(localStorage.getItem('checkaddress'))

    this.http.post(this.address,post).subscribe(data => {
      let a = []
      a.push(data)
      this.itemAdress = a[0]
      var s = this.itemAdress.length - 1
      // console.log
      if (this.itemAdress[s]['count'] > 0 ) {
        // console.log("2222")
        // เช็คว่าได้มีการเปลี่ยนที่อยู่ไหม
        let check = localStorage.getItem('checkaddress')
        if (check == 'true') {
          // ถ้ามีให้นับเพิ่ม 1 แล้ว ตั้ง 'cheackaddress' เป็น 'false'
          this.count = 1
          localStorage.setItem('checkaddress','false')
        } else {
          // ถ้าไม่มีให้นับเพิ่ม 1 แล้ว ตั้ง 'address' เป็น ค่าที่เรียกมาจากทาง server
          this.count = 1
          // this.count = this.itemAdress[1]['count']
          // console.log("22222")
          localStorage.setItem('address',this.itemAdress[0]['Addresss'])
        }
      } else{
        // ไม่มี address ใน ระบบ
        this.count = 0
      }
      console.log(this.itemAdress)
    })
    
    this.http.post(this.api,post).subscribe(data =>{
      let a = []
      let sum = 0
      a.push(data)
      this.item = a[0]
      for (const i of a[0]) {
        for (const j of i) {
          if (j['check']) {
            sum = sum+(j['pice']*j['price'])
          }
        }
      }
      this.payall = sum;
      console.log(this.item)
      console.log(this.payall)
    })
    
  }

  changecheck(j,cj){
    if (cj) {
      let sum = 0
      for (const key in this.item) {
        for (const i in this.item[key]) {
          if (j == this.item[key][i]['name']) {
            sum = this.item[key][i]['pice']*this.item[key][i]['price']
            this.updatDB(j,key,i)
            break;
          }
        }
      }
      this.payall += sum
    }else{
      let sum = 0
      for (const key in this.item) {
        for (const i in this.item[key]) {
          if (j == this.item[key][i]['name']) {
            sum = this.item[key][i]['pice']*this.item[key][i]['price']
            this.updatDB(j,key,i)
            break;
          }
        }
      }
      this.payall -= sum
    }
    
    console.log(cj)
  }

  negative(j){
      for (const key in this.item) {
        for (const jey in this.item[key]) {
          if (j == this.item[key][jey]["name"]) {
            if (this.item[key][jey]["pice"] == 0) {
              //end
            } else {
              this.item[key][jey]["pice"] --
              this.updatDB(j,key,jey)
              if (this.item[key][jey]["check"]) {
                this.payall -= this.item[key][jey]["price"]
                break;
              }
              
            }
            
          }
        }
      }
    
  }

  possitive(j){
    for (const key in this.item) {
      for (const jey in this.item[key]) {
        if (j == this.item[key][jey]["name"]) {
          this.item[key][jey]["pice"] ++
          this.updatDB(j,key,jey)
          if (this.item[key][jey]["check"]) {
            this.payall += this.item[key][jey]["price"]
            break;
          }
        }
      }
    }
  }

  async updatDB(name,key,jey){
    var post = {
      name: this.item[key][jey]['name'],
      username: localStorage.getItem('username'),
      check: this.item[key][jey]['check'],
      pice: this.item[key][jey]['pice']
    }
    await this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/update',post).subscribe(data => {
      console.log(data['check'])
    })
  }

  chat(){
    this.router.navigate(['chats'])
  }

  addre(){
    this.router.navigate(['address'])
  }

  async pay(all){
    if (all > 0) {
      var a = null
      var post = {
        username: localStorage.getItem('username')
      }
      if (this.count == 0) {
        const alert = await this.alertcontrol.create({
          message: 'กรุณาเพิ่มที่อยู่จัดส่ง',
          buttons: [
            {
              text: 'Ok',
              role: 'ok',
              cssClass: 'secondary',
              handler: () => {
                console.log("555")
              }
            }
          ]
        });
  
        await alert.present();
      } else {
        const alert = await this.alertcontrol.create({
          header: 'ชำระเงิน',
          message: 'ที่อยู่: ' + localStorage.getItem('address'),
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log(a);
              }
            },{
              text: 'Ok',
              role: 'ok',
              cssClass: 'secondary',
              handler: () => {
                this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/pay',post).subscribe(data => {
                  console.log(data)
                })
                this.item = []
                this.payall = 0
                this.router.navigate(['payall'])
              }
            }
          ]
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertcontrol.create({
        message: 'ไม่สามารถชำระสินค้าได้',
        buttons: [
          {
            text: 'Ok',
            role: 'ok',
            cssClass: 'secondary',
            handler: () => {
              console.log("555")
            }
          }
        ]
      });

      await alert.present();
    }
    
  }

}
