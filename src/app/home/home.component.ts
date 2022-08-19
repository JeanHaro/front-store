// FIXME: CREANDO LA PÁGINA HOME DE LA TIENDA
import { Component, OnInit, AfterViewInit } from '@angular/core';

// Swiper
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper!: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // TODO: Para que funcione el swiper
    this.mySwiper = new Swiper('.swiper-container');
  }
}
