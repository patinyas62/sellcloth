import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})

export class EditPage implements OnInit {

  pic;
  name;
  username;
  email;
  phone;
  hbd;
  task: AngularFireUploadTask;
  UploadedFileURL: Observable<string>;
  percentage: Observable<number>;

  constructor(private storage: AngularFireStorage,private http: HttpClient) {
    this.name = localStorage.getItem('name')
    this.username = localStorage.getItem('username')
    this.email = localStorage.getItem('email')
    this.phone = localStorage.getItem('phone')
    this.hbd = localStorage.getItem('hbd')
    this.pic = localStorage.getItem('pic')
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
      username: this.username,
      name: this.name,
      phone: this.phone,
      email: this.email,
      hbd: this.hbd,
      pic: this.pic
    }
    this.http.post('https://us-central1-sell-cloth001.cloudfunctions.net/hello/edit',post).subscribe(data => {
      if (data["check"] == "complete") {
        alert("แก้ไขสำเร็จ")
      } else {
        alert("แก้ไขไม่สำเร็จ")
      }
    })
    localStorage.setItem('name',this.name)
    localStorage.setItem('email',this.email)
    localStorage.setItem('phone',this.phone)
    localStorage.setItem('hbd',this.hbd)
    localStorage.setItem('pic',this.pic)
  }


  ngOnInit() {
  }

}

//   uploadFile(event: FileList) {
    

//     // The File object
//     const file = event.item(0)

//     // Validation for Images Only
//     if (file.type.split('/')[0] !== 'image') { 
//      console.error('unsupported file type :( ')
//      return;
//     }

//     this.isUploading = true;
//     this.isUploaded = false;


//     this.fileName = file.name;

//     // The storage path
//     const path = `${file.name}`;

//     // Totally optional metadata
//     const customMetadata = { app: 'Freaky Image Upload Demo' };

//     //File reference
//     const fileRef = this.storage.ref(path);

//     // The main task
//     this.task = this.storage.upload(path, file, { customMetadata });

//     // Get file progress percentage
//     this.percentage = this.task.percentageChanges();
//     this.UploadedFileURL = fileRef.getDownloadURL();
//     this.UploadedFileURL.subscribe(resp => {
//       console.log(resp)
//     })
    
    
    
//   }

//   addImagetoDB(image: MyData) {
//     //Create an ID for document
//     const id = this.database.createId();

//     //Set document id with value in database
//     this.imageCollection.doc(id).set(image).then(resp => {
//       console.log(resp);
//     }).catch(error => {
//       console.log("error " + error);
//     });
//   }


// }

 // import { Component } from '@angular/core';

// import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { finalize, tap } from 'rxjs/operators';

// export interface MyData {
//   name: string;
//   filepath: string;
//   size: number;
// }

//   @Component({
//     selector: 'app-edit',
//     templateUrl: './edit.page.html',
//     styleUrls: ['./edit.page.scss'],
//   })
// export class EditPage {

//   // Upload Task 
//   task: AngularFireUploadTask;

//   // Progress in percentage
//   percentage: Observable<number>;

//   // Snapshot of uploading file
//   snapshot: Observable<any>;

//   // Uploaded File URL
//   UploadedFileURL: Observable<string>;

//   //Uploaded Image List
//   images: Observable<MyData[]>;

//   //File details  
//   fileName:string;
//   fileSize:number;

//   //Status check 
//   isUploading:boolean;
//   isUploaded:boolean;

//   private imageCollection: AngularFirestoreCollection<MyData>;
//   constructor(private storage: AngularFireStorage, private database: AngularFirestore) {
//     this.isUploading = false;
//     this.isUploaded = false;
//     //Set collection where our documents/ images info will save
//     this.imageCollection = database.collection<MyData>('freakyImages');
//     this.images = this.imageCollection.valueChanges();
//   }

