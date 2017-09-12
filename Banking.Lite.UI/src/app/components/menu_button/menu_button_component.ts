import { Component, Input, Output, ViewChildren, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lt-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./menu_button_component.html",
  styleUrls: ["./menu_button_component.css"]
})

export class MenuButtonComponent {

    protected _menuOpenButton: any;
    protected _menuItems: any;

    @Input("menuOpenButton")
    get menuOpenButton():any { return this._menuOpenButton; }
    set menuOpenButton(value:any) { this._menuOpenButton = value; }

    @Input("menuItems")
    get menuItems():any { return this._menuItems; }
    set menuItems(value:any) { this._menuItems = value; }
    
    constructor() {
    }

    protected clickMainButtonHandler(event: any) {
        console.log('eoeo');
    }

    protected clickButtonItemHandler(item: any) {
        console.log('eaea');
    }
}
