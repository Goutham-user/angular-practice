import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent-child/parent/parent.component';
import { ChildComponent } from './components/parent-child/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataComponent } from './components/api-data/api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataTableComponent,
    ParentComponent,
    ChildComponent,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
