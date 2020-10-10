import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CometchatAngularUiKitModule } from 'src/lib/cometchat-angular-ui-kit/src/lib/cometchat-angular-ui-kit.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, ChatViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CometchatAngularUiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
