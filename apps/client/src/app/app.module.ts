import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@fem/core-data';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiToolbarModule } from 'libs/ui-toolbar/src/lib/ui-toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule, HttpClientModule, UiToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
