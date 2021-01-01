import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-carousel',
  templateUrl: './single-carousel.component.html',
  styleUrls: ['./single-carousel.component.css']
})
export class SingleCarouselComponent implements OnInit {

  carouselImages = [
    { src: '../../assets/slider/1.jpg', alt: 'First Image', active: true },
    { src: '../../assets/slider/2.jpg', alt: 'Second Image', active: false },
    { src: '../../assets/slider/3.jpg', alt: 'Third Image', active: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
