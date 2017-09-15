import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { registerType, getRegisteredType } from '../classes/general/unity';

import { TextBoxComponent }  from './textbox/textbox_component';
import { MenuButtonComponent }  from './menu_button/menu_button_component';
import { MenuComponent }  from './menu/menu_component';
import { LogInComponent }  from './login/login_component';

registerType("components.textbox.textbox_component", TextBoxComponent);
registerType("components.menu_button.menu_button_component", MenuButtonComponent);
registerType("components.menu.menu_component", MenuComponent);
registerType("components.login.login_component", LogInComponent);

@NgModule({
    imports: [ BrowserModule, CommonModule ],
    declarations: [
        getRegisteredType("components.textbox.textbox_component"),
        getRegisteredType("components.menu_button.menu_button_component"),
        getRegisteredType("components.menu.menu_component"),
        getRegisteredType("components.login.login_component")
    ],
    exports: [
        getRegisteredType("components.textbox.textbox_component"),
        getRegisteredType("components.menu_button.menu_button_component"),
        getRegisteredType("components.menu.menu_component"),
        getRegisteredType("components.login.login_component")
    ]
})

export class ComponentsModule {
}
