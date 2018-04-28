import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule, MatCheckboxModule, MatInputModule,
         MatSliderModule, MatSelectModule, 
         MatDialogModule } from '@angular/material'
import { NgModule } from '@angular/core'
import 'hammerjs'

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './components/app/app.component'
import { CreateMessageComponent } from './components/create-message/create-message.component'
import { LinkDialogComponent } from './components/link-dialog/link-dialog.component'
import { ListenMessageComponent } from './components/listen-message/listen-message.component'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateMessageComponent,
    LinkDialogComponent,
    ListenMessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    LinkDialogComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
