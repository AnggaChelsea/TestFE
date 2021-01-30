import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public showNotification: boolean;

  cols!: number;

  datavideo: any;
  constructor(private videoService:VideoService, private breakpointObserver: BreakpointObserver) 
  { 
    this.showNotification = true;
  }

  ngOnInit(): void {

    this.getvideo();
  }
  getvideo(){
    return this.videoService.readAll().subscribe(data => {
      this.datavideo = data.list;
      console.log(this.datavideo);
    })
  }

  public onCloseClick(): void {
    this.showNotification = false;
  }

}
