import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module'
import { routes } from './app.router'
import { PreventUnsavedChangesGuard } from './shared/prevent-unsaved-changes-guard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    routes
  ],
  providers: [PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
