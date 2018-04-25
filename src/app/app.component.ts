import { Component } from '@angular/core'
import * as speech from 'speech-js'

// const speech = require('speech-js')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  ngOnInit() {
    speech.synthesis('Welcome to voicey', 'en')
  }
}
