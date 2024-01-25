import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { TableComponent } from './table/table.component';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    TableComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
