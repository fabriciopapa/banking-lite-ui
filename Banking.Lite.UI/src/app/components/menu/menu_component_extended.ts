import { Component } from '@angular/core';
import { MenuComponent } from './menu_component';

@Component({
  selector: 'lt-menu',
  templateUrl: "./menu_component.html",
  styleUrls: ["./menu_component.css"]
})

export class MenuComponentExtended extends MenuComponent  { 
  
  constructor() {
    super();
  }
}
