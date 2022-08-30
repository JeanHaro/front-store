import { Component, OnInit } from '@angular/core';

import { 
  faBars, 
  faClose 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faBars = faBars;

  // Abrir y Cerrar el Menu Bar
  barsActive() {
    let iconBar = document.getElementById('icon-bar');
    let menuBar = document.getElementById('menu-bar');

    if (this.faBars !== faBars) {
      this.faBars = faBars;
      iconBar?.classList.remove('color-red');
      menuBar?.classList.remove('right-0');
      menuBar?.classList.remove('transition');
    }  else {
      this.faBars = faClose;
      iconBar?.classList.add('color-red');
      menuBar?.classList.add('right-0');
      menuBar?.classList.add('transition');
    }
  }
}
