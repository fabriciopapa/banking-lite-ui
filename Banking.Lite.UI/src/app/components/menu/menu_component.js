"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
        this._menuOpenButton = {};
        this._menuItems = [];
        this.loadMenuOpenButton();
        this.loadMenuItems();
    }
    Object.defineProperty(MenuComponent.prototype, "menuOpenButton", {
        get: function () { return this._menuOpenButton; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "menuItems", {
        get: function () { return this._menuItems; },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.loadMenuOpenButton = function () {
        this._menuOpenButton = { icon: "fa fa-shower" };
    };
    MenuComponent.prototype.loadMenuItems = function () {
        this._menuItems.push({ icon: "fa fa-bar-chart" });
        this._menuItems.push({ icon: "fa fa-plus" });
        this._menuItems.push({ icon: "fa fa-heart" });
        this._menuItems.push({ icon: "fa fa-envelope" });
        this._menuItems.push({ icon: "fa fa-cog" });
        this._menuItems.push({ icon: "fa fa-ellipsis-h" });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'lt-menu',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        templateUrl: "./menu_component.html",
        styleUrls: ["./menu_component.css"]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu_component.js.map