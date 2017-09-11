import { Component } from '@angular/core';

@Component({
  selector: 'lt-menu',
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})

export class MenuComponent  { 

  constructor() {
    this.haceAlgo();
  }

  protected haceAlgo(): void {
    console.log("Invocación en MenuComponent");
  }
}
