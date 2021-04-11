import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http'
import { VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public showNotification: boolean;

  dataVideo:any = [];
  constructor(private breakpointObserver: BreakpointObserver, private http:HttpClient, private apiService:VideoService) 
  { 
    this.showNotification = true;
  }

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


  public onCloseClick(): void {
    this.showNotification = false;
  }

}
