import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http'

interface Item {
  name: string;
  image: string;
  viwers: number;
  addedToCart: boolean;
  desc: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: Item[] = [
    {
      name: 'Kokorowatari',
      image: 'https://linisehat.com/wp-content/uploads/2020/12/hiking.jpg',
      viwers: 444,
      addedToCart: false,
      desc: `
        Demon sword that harms and effectively kills oddities.
        The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.`
    },
    {
      name: 'Star Platinum',
      image: 'https://lifeexperiencedegreepros.com/wp-content/uploads/2019/01/Best-Holidays-For-Families-in-Africa.jpg',
      viwers: 555,
      addedToCart: false,
      desc: `Star Platinum is the Stand of Kujo Jotaro.
      It has long, flowing hair, and resembling a tall, well-built man.
      It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.`
    },
    {
      name: 'The World',
      viwers: 500,
      addedToCart: false,
      image: 'https://i1.wp.com/crowfootmedia.com/wp-content/uploads/2016/06/castle-1.jpg?resize=620%2C413&ssl=1',
      desc: `The World is the Stand of DIO. The World shows no particular personality,
      although it occasionally smiles as it pummels others,
      hinting that it may be a rather cruel entity that takes pleasure in causing pain.
      Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!`
    },
    {
      name: '3D Maneuver Gear',
      viwers: 200,
      addedToCart: false,
      image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_1141196125_411306.jpg',
      desc: `The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.
      The equipment enables the user to fight in a 3D space as opposed to a 2D one.
      The equipment itself takes the form of a body harness that encompasses much of the body below the neck.`
    },
    {
      name: 'Excalibur',
      viwers: 300,
      addedToCart: false,
      image: 'https://1.bp.blogspot.com/-GLyYqnoJ0aA/XoGkI0EhbiI/AAAAAAAA-zk/3A7Ouql_9Eg80k_us7gaDo6HiVoc0xE7QCLcBGAsYHQ/s640/persiapan%2Bmendaki%2Bgunung.jpg',
      desc: `Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.
      As that which can be called the physical actualization of her ideals and the symbol of her heroism,
      it is her greatest and most powerful Noble Phantasm.`
    },
    {
      name: 'Dragon Slayer',
      viwers: 450,
      addedToCart: false,
      image: 'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`
    },
    {
      name: 'Dragon Slayer',
      viwers: 450,
      addedToCart: false,
      image: 'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`
    },
  ];
  
  public showNotification: boolean;

  datavideo: any;
  constructor(private videoService:VideoService, private breakpointObserver: BreakpointObserver, private http:HttpClient) 
  { 
    this.showNotification = true;
  }

  ngOnInit(): void {

      console.log(this.items)
    for (let i = 0; i < this.items.length; i++){
      this.datavideo = this.items[i]
      console.log(this.datavideo)
    }

  }

  public onCloseClick(): void {
    this.showNotification = false;
  }

}
