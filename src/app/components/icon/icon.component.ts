import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() notedata: any;

  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    console.log(this.notedata.noteID)

  }
  Trash() {
    console.log(this.notedata.notesID)
    
    this.note.deleteNote(this.notedata.notesID).subscribe((response: any) => {
      console.log("trash response=", response);

    },
    )
  }
  

}

