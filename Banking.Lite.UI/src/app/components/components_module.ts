import { NgModule } from '@angular/core';
import { registerType, getRegisteredType } from '../classes/general/unity';
import { MenuComponent }  from './menu/menu_component';
import { MenuComponentExtended }  from './menu/menu_component_extended';

@registerType("components.menu.menu_component", MenuComponent)
@registerType("components.menu.menu_component", MenuComponentExtended)

@NgModule({
  declarations: [ 
    // getRegisteredType("components.menu.menu_component")
    MenuComponent
  ],
  exports: [ 
    // getRegisteredType("components.menu.menu_component")
    MenuComponent 
  ]
})

export class ComponentsModule { 
  
}
