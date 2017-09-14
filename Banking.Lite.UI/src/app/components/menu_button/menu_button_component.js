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
var MenuOpenButtonMode;
(function (MenuOpenButtonMode) {
    MenuOpenButtonMode[MenuOpenButtonMode["flower"] = 0] = "flower";
    MenuOpenButtonMode[MenuOpenButtonMode["row"] = 1] = "row";
})(MenuOpenButtonMode || (MenuOpenButtonMode = {}));
var MenuButtonComponent = (function () {
    function MenuButtonComponent() {
        this._menuOpenButtonClass = "menu-open-button-flower";
        this._menuItemClass = "menu-item-flower";
        this._menuOpenButtonMode = MenuOpenButtonMode.flower;
        this._menuOpenButtonValue = false;
    }
    Object.defineProperty(MenuButtonComponent.prototype, "menuOpenButtonClass", {
        get: function () { return this._menuOpenButtonClass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButtonComponent.prototype, "menuItemClass", {
        get: function () { return this._menuItemClass; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButtonComponent.prototype, "menuOpenButtonValue", {
        get: function () { return this._menuOpenButtonValue; },
        set: function (value) { this._menuOpenButtonValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButtonComponent.prototype, "menuOpenButton", {
        get: function () { return this._menuOpenButton; },
        set: function (value) { this._menuOpenButton = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuButtonComponent.prototype, "menuItems", {
        get: function () { return this._menuItems; },
        set: function (value) { this._menuItems = value; },
        enumerable: true,
        configurable: true
    });
    MenuButtonComponent.prototype.clickOpenButtonHandler = function (event) {
    };
    MenuButtonComponent.prototype.clickMenuItemHandler = function (item) {
        this.setMenuOpenButtonValue(false);
        this.setClassesByMode(MenuOpenButtonMode.row);
    };
    MenuButtonComponent.prototype.setClassesByMode = function (mode) {
        if (this._menuOpenButtonMode != mode) {
            this._menuOpenButtonMode = mode;
            if (this._menuOpenButtonMode == MenuOpenButtonMode.flower) {
                this._menuItemClass = "menu-item-flower";
                this._menuOpenButtonClass = "menu-open-button-flower";
            }
            else if (this._menuOpenButtonMode == MenuOpenButtonMode.row) {
                this._menuItemClass = "menu-item-row";
                this._menuOpenButtonClass = "menu-open-button-row";
            }
        }
    };
    MenuButtonComponent.prototype.setMenuOpenButtonValue = function (value) {
        this._menuOpenButtonValue = value;
    };
    return MenuButtonComponent;
}());
__decorate([
    core_1.Input("menuOpenButton"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MenuButtonComponent.prototype, "menuOpenButton", null);
__decorate([
    core_1.Input("menuItems"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MenuButtonComponent.prototype, "menuItems", null);
MenuButtonComponent = __decorate([
    core_1.Component({
        selector: 'lt-menu-button',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        templateUrl: "./menu_button_component.html",
        styleUrls: ["./menu_button_component.css"]
    }),
    __metadata("design:paramtypes", [])
], MenuButtonComponent);
exports.MenuButtonComponent = MenuButtonComponent;
//# sourceMappingURL=menu_button_component.js.map