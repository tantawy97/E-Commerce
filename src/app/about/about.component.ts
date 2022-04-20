import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  swiper(swiper:any){
     new Swiper(swiper, {
      loop:true,
      spaceBetween: 20,
      autoplay: {
          delay: 7500,
          disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
  });
  }

//   swiper:any = (() =>{
//     new Swiper(this.swiper, {
//       loop:true,
//       spaceBetween: 20,
//       autoplay: {
//           delay: 7500,
//           disableOnInteraction: false,
//       },
//       centeredSlides: true,
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1020: {
//           slidesPerView: 3,
//         },
//       },
//   });
// })();
}
