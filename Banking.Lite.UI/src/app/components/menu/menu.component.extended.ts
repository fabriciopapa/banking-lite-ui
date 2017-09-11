import { Component } from '@angular/core';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'lt-menu',
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})

export class MenuComponentExtended extends MenuComponent  { 
  
  constructor() {
    super();
  }

  protected haceAlgo(): void {
    console.log("Invocación en MenuComponentExtended");
  }
}
