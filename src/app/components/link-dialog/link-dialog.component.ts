import { Component, Inject, ViewChild, ElementRef } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.styl']
})

export class LinkDialogComponent {
  @ViewChild('input') input: ElementRef

  constructor(public dialogRef: MatDialogRef<LinkDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  copyLink() {
    this.input.nativeElement.select()
    document.execCommand('copy')
  }
}
