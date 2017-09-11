"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { registerType, getRegisteredType } from '../classes/general/unity';
var menu_component_1 = require("./menu/menu_component");
var menu_component_extended_1 = require("./menu/menu_component_extended");
var registry = new Map();
if (!window.icb) {
    window.icb = {
        unity: {}
    };
}
if (!registry) {
    if (!window.icb.unity.unityRegistry) {
        window.icb.unity.unityRegistry = new Map();
    }
    registry = window.icb.unity.unityRegistry;
}
function registerType(name, component) {
    registry.set(name, component);
}
function getRegisteredType(name) {
    return registry.get(name);
}
registerType("components.menu.menu_component", menu_component_1.MenuComponent);
registerType("components.menu.menu_component", menu_component_extended_1.MenuComponentExtended);
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        declarations: [
            getRegisteredType("components.menu.menu_component")
        ],
        exports: [
            getRegisteredType("components.menu.menu_component")
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components_module.js.map