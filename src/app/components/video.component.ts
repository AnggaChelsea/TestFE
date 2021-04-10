import { Component, OnInit } from '@angular/core'
import { VideoService } from '../services/video.service';

@Component({
    selector:'app-video',
    templateUrl:'./video.component.html',
    styles:[''],
})

export class VideoComponent implements OnInit {

    dataVideo:any = [];

    constructor( private apiService:VideoService ){}

    ngOnInit(){
        this.dataApi()
    }

    dataApi(){
        this.apiService.getDataApi().subscribe((data:any) => {
            console.log(data)
            this.dataVideo = (data)
        })
    }

    

}
