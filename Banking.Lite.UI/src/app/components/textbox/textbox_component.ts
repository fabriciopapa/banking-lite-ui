import { Component, Input, Output, ViewChildren, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'lt-textbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./textbox_component.html",
  styleUrls: ["./textbox_component.css"]
})

export class TextBoxComponent {
    
    protected _materialized: boolean = false;
    protected _placeholder: string = "";

    get materialized(): boolean { return this._materialized; }

    @Input("placeholder")
    get placeholder():any { return this._placeholder; }
    set placeholder(value:any) { this._placeholder = value; }

    constructor() {
    }

    protected onBlurHandler() {
        this._materialized = false;
    }

    protected onFocusHandler() {
        this._materialized = true;
    }

    protected checkInput() {
    }
}