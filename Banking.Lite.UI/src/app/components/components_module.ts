import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { registerType, getRegisteredType } from '../classes/general/unity';

import { LoginComponent }  from './login/login_component';
import { MenuButtonComponent }  from './menu_button/menu_button_component';
import { MenuComponent }  from './menu/menu_component';

registerType("components.login.login_component", LoginComponent);
registerType("components.menu_button.menu_button_component", MenuButtonComponent);
registerType("components.menu.menu_component", MenuComponent);

@NgModule({
    imports: [ BrowserModule, CommonModule ],
    declarations: [
        getRegisteredType("components.login.login_component"),
        getRegisteredType("components.menu_button.menu_button_component"),
        getRegisteredType("components.menu.menu_component")
    ],
    exports: [
        getRegisteredType("components.login.login_component"),
        getRegisteredType("components.menu_button.menu_button_component"),
        getRegisteredType("components.menu.menu_component")
    ]
})

export class ComponentsModule {
}
