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
  @Output() refresh = new EventEmitter<string>();
  colorsArr = [{Colorcode:"rgb(255, 255, 255)"},{Colorcode:"rgb(242, 139, 130)"},{Colorcode:"rgb(251, 188, 4)"},{Colorcode:"rgb(255, 244, 117)"},{Colorcode:"rgb(204, 255, 144)"},{Colorcode:"rgb(167, 255, 235)"},{Colorcode:"rgb(203, 240, 248)"},{Colorcode:"rgb(174, 203, 250)"},{Colorcode:"rgb(215, 174, 251)"},{Colorcode:"rgb(253, 207, 232)"},{Colorcode:"rgb(230, 201, 168)"},{Colorcode:"rgb(232, 234, 237)"}];
  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    

  }
  Trash() {
    console.log(this.notedata.notesID)
    
    this.note.Trashnote(this.notedata.notesID).subscribe((response: any) => {
      console.log("trash response=", response);
      this.refresh.emit("Hello")
    },
    )
  }
  
  Archive() {
    console.log(this.notedata.notesID)
    
    this.note.ArchiveNote(this.notedata.notesID).subscribe((response: any) => {
      console.log("trash response=", response);
      this.refresh.emit("Hello")
    },
    )
  }
  changeColor(color:any)
  {
    
    console.log(color);
    this.note.colorPallete(this.notedata.notesID,color).subscribe((response:any)=>{
      console.log(response);
      this.refresh.emit("Hello")
    })
  }
}

