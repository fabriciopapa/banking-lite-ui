"use strict";
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
    return component;
}
exports.registerType = registerType;
function getRegisteredType(name) {
    return registry.get(name);
}
exports.getRegisteredType = getRegisteredType;
//# sourceMappingURL=unity.js.map