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
    this._menuOpenButton = { icon: "fa fa-shower"};
  }

  protected loadMenuItems(): void {
    this._menuItems.push({ icon: "fa fa-bar-chart"});
    this._menuItems.push({ icon: "fa fa-plus"});
    this._menuItems.push({ icon: "fa fa-heart"});
    this._menuItems.push({ icon: "fa fa-envelope"});
    this._menuItems.push({ icon: "fa fa-cog"});
    this._menuItems.push({ icon: "fa fa-ellipsis-h"});
  }
}