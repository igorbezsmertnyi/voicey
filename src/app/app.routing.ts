
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common'
import { CreateMessageComponent } from './components/create-message/create-message.component'
import { ListenMessageComponent } from './components/listen-message/listen-message.component'

const routes: Routes = [
  { path: '', component: CreateMessageComponent },
  { path: 'message/:id', component: ListenMessageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : window['_app_base'] || '/' }]
})

export class AppRoutingModule { }