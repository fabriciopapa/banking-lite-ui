import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MenuComponent } from './menu_component';

@Component({
  selector: 'lt-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./menu_component.html",
  styleUrls: ["./menu_component.css"]
})

export class MenuComponentExtended extends MenuComponent { 

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

  protected loadMenuItems(): void {
    let index: number = -1;
    this._menuItems.push({ index: ++index, icon: "fa fa-bar-chart", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-plus", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-heart", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-envelope", selected: false });
  }
}