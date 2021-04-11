import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';




@Component({
  selector: 'app-peoplevideo',
  templateUrl: './peoplevideo.component.html',
  styleUrls: ['./peoplevideo.component.css']
})
export class PeoplevideoComponent implements OnInit {

  dataVideo: any[] = [];

  constructor(private apiService: VideoService) { }


  ngOnInit(): void {
    this.dataApi()
  }

  dataApi() {
    this.apiService.getDataApi().subscribe((data: any) => {
      //slice object as prototype
     let coba = data,length = 7
     console.log(Array.prototype.slice.call(coba, 3))
     this.dataVideo = Array.prototype.slice.call(coba, 3)
    })
  }

}
