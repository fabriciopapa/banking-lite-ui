"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var unity_1 = require("../classes/general/unity");
var login_component_1 = require("./login/login_component");
var menu_button_component_1 = require("./menu_button/menu_button_component");
var menu_component_1 = require("./menu/menu_component");
unity_1.registerType("components.login.login_component", login_component_1.LoginComponent);
unity_1.registerType("components.menu_button.menu_button_component", menu_button_component_1.MenuButtonComponent);
unity_1.registerType("components.menu.menu_component", menu_component_1.MenuComponent);
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule],
        declarations: [
            unity_1.getRegisteredType("components.login.login_component"),
            unity_1.getRegisteredType("components.menu_button.menu_button_component"),
            unity_1.getRegisteredType("components.menu.menu_component")
        ],
        exports: [
            unity_1.getRegisteredType("components.login.login_component"),
            unity_1.getRegisteredType("components.menu_button.menu_button_component"),
            unity_1.getRegisteredType("components.menu.menu_component")
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components_module.js.map