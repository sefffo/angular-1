import { Component } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  imports: [],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css'
})
export class PorfolioComponent {


  img:string[]=['/images/port1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/port1.png',
    '/images/port2.png',
    '/images/port3.png'
  ]

  isHidden: boolean = true;


  modelimg:string='';

  hideModel(target: any, img: HTMLImageElement)
  { 
    if(target == img)
    {
      return;
    }
    else{
      this.isHidden = true;
    }
   
  }
}
