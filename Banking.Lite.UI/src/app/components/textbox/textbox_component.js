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
var TextBoxComponent = (function () {
    function TextBoxComponent() {
        this._materialized = false;
        this._placeholder = "";
    }
    Object.defineProperty(TextBoxComponent.prototype, "materialized", {
        get: function () { return this._materialized; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (value) { this._placeholder = value; },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.prototype.onBlurHandler = function () {
        this._materialized = false;
    };
    TextBoxComponent.prototype.onFocusHandler = function () {
        this._materialized = true;
    };
    TextBoxComponent.prototype.checkInput = function () {
    };
    return TextBoxComponent;
}());
__decorate([
    core_1.Input("placeholder"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TextBoxComponent.prototype, "placeholder", null);
TextBoxComponent = __decorate([
    core_1.Component({
        selector: 'lt-textbox',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        templateUrl: "./textbox_component.html",
        styleUrls: ["./textbox_component.css"]
    }),
    __metadata("design:paramtypes", [])
], TextBoxComponent);
exports.TextBoxComponent = TextBoxComponent;
//# sourceMappingURL=textbox_component.js.map