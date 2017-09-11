"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var unity_1 = require("../classes/general/unity");
var menu_component_1 = require("./menu/menu_component");
var menu_component_extended_1 = require("./menu/menu_component_extended");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    unity_1.registerType("components.menu.menu_component", menu_component_1.MenuComponent),
    unity_1.registerType("components.menu.menu_component", menu_component_extended_1.MenuComponentExtended),
    core_1.NgModule({
        declarations: [
            // getRegisteredType("components.menu.menu_component")
            menu_component_1.MenuComponent
        ],
        exports: [
            // getRegisteredType("components.menu.menu_component")
            menu_component_1.MenuComponent
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components_module.js.map