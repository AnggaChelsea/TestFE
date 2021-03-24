import { Component, OnInit } from '@angular/core';


interface Item {
  name: string;
  image: string;
  viwers: number;
  addedToCart: boolean;
  desc: string;
}

@Component({
  selector: 'app-peoplevideo',
  templateUrl: './peoplevideo.component.html',
  styleUrls: ['./peoplevideo.component.css']
})
export class PeoplevideoComponent implements OnInit {
  datavideo:any;

  constructor() { }
  items: Item[] = [
    {
      name: 'Kokorowatari',
      image: 'https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?k=6&m=1189969126&s=612x612&w=0&h=nydS5fOGwAsrKMS92FnuK695lLr161j0IIx4KviIw_Q=',
      viwers: 444,
      addedToCart: false,
      desc: `
        Demon sword that harms and effectively kills oddities.
        The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.`
    },
    {
      name: 'Star Platinum',
      image: 'https://img1.yna.co.kr/photo/yna/YH/2020/10/31/PYH2020103105020031500_P4.jpg',
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
      image: 'https://wp.borderless-house.com/wp-content/uploads/2017/03/s-Image_bf1e4c3-2.jpg',
      desc: `The World is the Stand of DIO. The World shows no particular personality,
      although it occasionally smiles as it pummels others,
      hinting that it may be a rather cruel entity that takes pleasure in causing pain.
      Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!`
    },
    {
      name: '3D Maneuver Gear',
      viwers: 200,
      addedToCart: false,
      image: 'https://cdn.minnesotamonthly.com/wp-content/uploads/sites/85/2018/09/img_2018-10_GetOutdoors_SHT2_AlyssaHei_X.jpg',
      desc: `The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.
      The equipment enables the user to fight in a 3D space as opposed to a 2D one.
      The equipment itself takes the form of a body harness that encompasses much of the body below the neck.`
    },
    {
      name: 'Excalibur',
      viwers: 300,
      addedToCart: false,
      image: 'https://www.visitcookcounty.com/wp-content/uploads/2017/06/Outfitters_Summer-Cook-County-MN-Outdoor-Scenic-overlook-superior-hiking-trail-PSundberg-CCVB_CC.jpg',
      desc: `Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.
      As that which can be called the physical actualization of her ideals and the symbol of her heroism,
      it is her greatest and most powerful Noble Phantasm.`
    },
    {
      name: 'Dragon Slayer',
      viwers: 450,
      addedToCart: false,
      image: 'https://i.pinimg.com/originals/a4/8a/73/a48a73d56aa2fce2f7f028d7be4b63db.jpg',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`
    },
  ];

  ngOnInit(): void {
    
  }


}
