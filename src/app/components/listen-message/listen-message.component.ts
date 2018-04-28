import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import * as speech from 'speech-js'

@Component({
  selector: 'listen-message',
  templateUrl: './listen-message.component.html',
  styleUrls: ['./listen-message.component.styl']
})

export class ListenMessageComponent implements OnInit {
  link
  msg: string = ''
  lang: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.link = params['id'])
    this.getMessage()
  }

  private getMessage() {
    if (!this.link) return

    const tmp = this.atou(this.link).split(',')

    this.lang = tmp[0]
    this.msg = tmp.splice(1, tmp.length).join('')

    speech.synthesis(this.msg, this.lang)
  }

  private atou(str) {
    return decodeURIComponent(window.atob(str))
  }
}
