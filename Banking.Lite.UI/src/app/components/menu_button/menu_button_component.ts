import { Component, Input, Output, ViewChildren, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';

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
    protected _menuItemClass: string = "menu-item";

    get menuOpenButtonClass(): string { return this._menuOpenButtonClass; }
    get menuItemClass(): string { return this._menuItemClass; }

    @Input("menuOpenButton")
    get menuOpenButton():any { return this._menuOpenButton; }
    set menuOpenButton(value:any) { this._menuOpenButton = value; }

    @Input("menuItems")
    get menuItems():any { return this._menuItems; }
    set menuItems(value:any) { this._menuItems = value; }
    
    constructor() {
    }

    protected clickOpenButtonHandler(event: any) {
        this._menuOpenButtonClass = "menu-open-button-flower";
        // var ea = this._menuOpenButtonRef.nativeElement;
    }

    protected clickMenuItemHandler(item: any) {
        this._menuOpenButtonClass = "menu-open-button-row";
    }
}
