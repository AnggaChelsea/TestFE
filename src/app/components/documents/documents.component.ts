import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
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
