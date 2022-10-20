import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  d:any;
  loaddata: any;
  images: any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.d=1;
    this.loaddatabyID(this.d);
  }
  loaddatabyID(d:any)
  {
    this.dataservice.productdataser(d).subscribe(res=>{
      this.loaddata = res;
      this.images=this.loaddata.images;
      console.log("map data "+JSON.stringify(this.loaddata));
      
      console.log("loadbyimages"+JSON.stringify(this.images));
    })
  }
}
