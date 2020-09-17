import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payall',
  templateUrl: './payall.page.html',
  styleUrls: ['./payall.page.scss'],
})
export class PayallPage implements OnInit {

  item: Array<any>;
  api = "https://us-central1-sell-cloth001.cloudfunctions.net/hello/payall"
  rate = "3";
  loading = true;
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 
    
  }

  ngOnInit() {
    var post = {
      username: localStorage.getItem('username')
    }
    this.http.post(this.api,post).subscribe(data =>{
      let a = []
      a.push(data)
      this.item = a[0]
      this.loading = false
      console.log(this.item)
    })
    
  }

  emit(){
    let post = {
      username: localStorage.getItem('username')
    }
    this.http.post("https://us-central1-sell-cloth001.cloudfunctions.net/hello/removepay",post).subscribe(datas => {
      var a = datas;
    })
    alert("ให้คะแนนเรียบร้อย")
    this.router.navigate(['tabs/search'])
  }

  onRateChange(f){
    this.rate = f
    console.log(f)
  }
}
