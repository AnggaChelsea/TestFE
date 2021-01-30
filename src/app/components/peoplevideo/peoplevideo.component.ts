import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
@Component({
  selector: 'app-peoplevideo',
  templateUrl: './peoplevideo.component.html',
  styleUrls: ['./peoplevideo.component.css']
})
export class PeoplevideoComponent implements OnInit {
  datavideo:any;

  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.getvideo();
  }

  getvideo(){
    return this.videoService.readAll().subscribe(data => {
      this.datavideo = data.list;
      console.log(this.datavideo);
    })
  }

}
