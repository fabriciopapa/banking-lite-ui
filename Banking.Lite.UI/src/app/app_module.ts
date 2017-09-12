import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppComponent }  from './app_component';
import { ComponentsModule }  from './components/components_module';

@NgModule({
  imports:      [ BrowserModule, CommonModule , ComponentsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
}
