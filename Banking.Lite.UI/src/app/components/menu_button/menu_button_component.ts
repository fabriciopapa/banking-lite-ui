import { Component, Input, Output, ViewChildren, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';

enum MenuOpenButtonMode {
    flower,
    row
}

@Component({
  selector: 'lt-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./menu_button_component.html",
  styleUrls: ["./menu_button_component.css"]
})

export class MenuButtonComponent {

    protected _menuOpenButton: any;
    protected _menuItems: any;
    protected _menuOpenButtonClass: string = "menu-open-button-flower";
    protected _menuItemClass: string = "menu-item-flower";
    protected _menuOpenButtonMode: MenuOpenButtonMode = MenuOpenButtonMode.flower;
    protected _menuOpenButtonValue: boolean = false;

    get menuOpenButtonClass(): string { return this._menuOpenButtonClass; }
    get menuItemClass(): string { return this._menuItemClass; }
    get menuOpenButtonValue(): boolean { return this._menuOpenButtonValue; }
    
    set menuOpenButtonValue(value: boolean) { this._menuOpenButtonValue = value; }

    @Input("menuOpenButton")
    get menuOpenButton():any { return this._menuOpenButton; }
    set menuOpenButton(value:any) { this._menuOpenButton = value; }

    @Input("menuItems")
    get menuItems():any { return this._menuItems; }
    set menuItems(value:any) { this._menuItems = value; }
    
    constructor() {
    }

    protected clickOpenButtonHandler(event: any) {
    }

    protected clickMenuItemHandler(item: any) {
        this.setClassesByMode(MenuOpenButtonMode.row);
    }

    protected setClassesByMode(mode: MenuOpenButtonMode) {
        this._menuOpenButtonMode = mode;
        if (this._menuOpenButtonMode == MenuOpenButtonMode.flower) {
            this._menuOpenButtonClass = "menu-open-button-flower";
            this._menuItemClass = "menu-item-flower";
        } else if (this._menuOpenButtonMode == MenuOpenButtonMode.row) {
            this._menuOpenButtonClass = "menu-open-button-row";
            this._menuItemClass = "menu-item-row";
        }
    }
}
