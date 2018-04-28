import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material'
import { LinkDialogComponent } from '../link-dialog/link-dialog.component'
import * as uniq from 'lodash/uniq'

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.styl']
})

export class CreateMessageComponent implements OnInit {
  messageForm: FormGroup
  langs: Array<string> = []

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.messageForm = this.fb.group({
      lang: ['', Validators.required],
      msg: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.loadLangs()

    speechSynthesis.onvoiceschanged = () => this.loadLangs()
  }

  generateMessage() {
    const msg = this.messageForm.value.msg
    const lang = this.messageForm.value.lang
    const hash = this.utoa(`${lang},${msg}`)
    const link = `${window.location.host}${window['_app_base']}/message/${hash}`

    let dialogRef = this.dialog.open(LinkDialogComponent, {
      width: '650px',
      data: { link: link }
    })
  }

  private utoa(str) {
    return window.btoa(encodeURIComponent(str))
  }

  private loadLangs () {
    const voices = window.speechSynthesis.getVoices()
    this.langs = uniq(voices.map(voice => voice.lang))
  }
}
