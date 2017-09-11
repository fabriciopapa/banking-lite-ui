import { Component } from '@angular/core';

@Component({
  selector: 'lt-menu',
  templateUrl: "./menu_component.html",
  styleUrls: ["./menu_component.css"]
})

export class MenuComponent { 

  constructor() {
    this.haceAlgo();
  }

  public haceAlgo(): void {
    console.log("Invocación en MenuComponent");
  }
}