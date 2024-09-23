import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GestureComponent } from './gesture/gesture.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { IonicModule } from '@ionic/angular';
// import { MyHammerConfig } from './hammer.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestureComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HammerModule 
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
