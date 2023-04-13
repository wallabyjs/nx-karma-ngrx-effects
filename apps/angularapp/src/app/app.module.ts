import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { AppEffects } from './app.effects';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
