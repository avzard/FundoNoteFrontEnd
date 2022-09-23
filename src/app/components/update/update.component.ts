import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any
  noteId:any
  description: any
  @Output()  refreshEvent = new EventEmitter<string>();
  constructor(private note: NotesServiceService, public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public reqdata: any) { }

  ngOnInit(): void {
    console.log(this.reqdata);
    this.title = this.reqdata.title
    this.description = this.reqdata.description
    this.noteId = this.reqdata.notesID
    console.log("d=========>"+this.noteId)
  }
  onNoClick(): void {
    let reqdata =
    {
      title: this.title,
      description: this.description,  
      notesID:this.noteId  
    }
    this.note.updateNote(reqdata,this.reqdata.noteId).subscribe((response: any) => {
      console.log("update response=",response);
     
      this.dialogRef.close(response);
    })
  }
  receivedMessage(event:any){
    this.onNoClick()
    
  }
}


