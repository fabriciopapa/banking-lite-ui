import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lt-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./menu_component.html",
  styleUrls: ["./menu_component.css"]
})

export class MenuComponent { 

  protected _menuOpenButton: any = {};
  protected _menuItems: any = [];

  get menuOpenButton(): any { return this._menuOpenButton; }
  get menuItems(): any { return this._menuItems; }

  constructor() {
    this.loadMenuOpenButton();
    this.loadMenuItems();
  }

  protected loadMenuOpenButton(): void {
    this._menuOpenButton = { icon: "fa fa-bars"};
  }

  protected loadMenuItems(): void {
    let index: number = -1;
    this._menuItems.push({ index: ++index, icon: "fa fa-bar-chart", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-plus", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-heart", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-envelope", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-cog", selected: false });
    this._menuItems.push({ index: ++index, icon: "fa fa-ellipsis-h", selected: false });
  }
}