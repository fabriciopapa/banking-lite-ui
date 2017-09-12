import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { registerType, getRegisteredType } from '../classes/general/unity';
import { MenuButtonComponent }  from './menu_button/menu_button_component';
import { MenuComponent }  from './menu/menu_component';

registerType("components.menu_button.menu_button_component", MenuButtonComponent);
registerType("components.menu.menu_component", MenuComponent);

@NgModule({
    imports: [ BrowserModule, CommonModule ],
    declarations: [
        getRegisteredType("components.menu_button.menu_button_component"),
        getRegisteredType("components.menu.menu_component")
    ],
    exports: [
        getRegisteredType("components.menu_button.menu_button_component"),
        getRegisteredType("components.menu.menu_component")
    ]
})

export class ComponentsModule {
}
