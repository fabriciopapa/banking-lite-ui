import { NgModule }      from '@angular/core';
import { MenuComponent }  from './menu/menu.component';
import { MenuComponentExtended }  from './menu/menu.component.extended';

@NgModule({
  declarations: [ MenuComponent, MenuComponentExtended ],
  exports: [ MenuComponent, MenuComponentExtended ]
})

export class ComponentsModule { 
  
}
