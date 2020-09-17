import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pushpro',
  templateUrl: './pushpro.page.html',
  styleUrls: ['./pushpro.page.scss'],
})
export class PushproPage implements OnInit {

  pic = "https://firebasestorage.googleapis.com/v0/b/sell-cloth001.appspot.com/o/pictureff.png?alt=media&token=28e74e9b-4238-47e1-b1aa-0b6596863aa9"
  tran;
  name;
  picein;
  price;
  sec;
  detail;
  brand;
  task: AngularFireUploadTask;
  UploadedFileURL: Observable<string>;
  percentage: Observable<number>;

  constructor(private http:HttpClient,private route: Router,private storage:AngularFireStorage) { }

  ngOnInit() {
  }

  uploadFile(event: FileList){
    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') {
      console.error("error")
      return;
    }

    const customMetadata = { app: 'Freaky Image Upload Demo' };

    const path = `${file.name}`

    const fileRef = this.storage.ref(path)
    this.task = this.storage.upload(path,file, { customMetadata })
    this.percentage = this.task.percentageChanges();
    this.UploadedFileURL = fileRef.getDownloadURL();
    this.UploadedFileURL.subscribe(resp => {
      console.log(resp)
      this.pic = resp
    })
  }

  submit(){
    var post = {
      pic: this.pic,
      name: this.name,
      sec: this.sec,
      brand: this.brand,
      price: parseInt(this.price),
      picein: this.picein,
      tran: this.tran,
      detail: this.detail,
      shop: localStorage.getItem('username'),
      nameshop: localStorage.getItem('name')
    }
    this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/pushpro',post).subscribe(data => {
      if (data["check"] == "complete") {
        alert("เพิ่มสำเร็จ")
        this.route.navigate(['myproduct'])
      } else {
        alert("เพิ่มไม่สำเร็จ")
      }
    })
  }


}
