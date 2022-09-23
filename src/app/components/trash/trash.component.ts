import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList: any
  @Output() trashEvent = new EventEmitter<string>();
  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.GetAllNotes()
  }
  GetAllNotes() {
    this.note.getallnote().subscribe((response: any) => {
      console.log("trash response=", response.data);
      this.noteList=response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object:any)=>{
        return object.trash===true
      })
    })
  }
  receiveMessage(event:any){
    this.GetAllNotes();
 }
}
