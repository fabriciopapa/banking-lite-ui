import { NgModule } from '@angular/core';
// import { registerType, getRegisteredType } from '../classes/general/unity';
import { MenuComponent }  from './menu/menu_component';
import { MenuComponentExtended }  from './menu/menu_component_extended';

var registry = new Map<string, any>();

if (!window.icb) {
    window.icb = {
        unity: {}
    };
}

if (!registry) {
    if (!window.icb.unity.unityRegistry) {
        window.icb.unity.unityRegistry = new Map<string, any>();
    }
    registry = window.icb.unity.unityRegistry;
}

function registerType(name: string, component: any) {
    registry.set(name, component);
}

function getRegisteredType(name: string): any {
    return registry.get(name);
}

registerType("components.menu.menu_component", MenuComponent)
registerType("components.menu.menu_component", MenuComponentExtended)

@NgModule({
  declarations: [
    getRegisteredType("components.menu.menu_component")
    // MenuComponentExtended
  ],
  exports: [
    getRegisteredType("components.menu.menu_component")
    // MenuComponentExtended 
  ]
})

export class ComponentsModule { 
  
}
