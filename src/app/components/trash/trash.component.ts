import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList: any
  
  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.GetAllNotes()
  }
  GetAllNotes() {
    this.note.getallnote().subscribe((response: any) => {
      console.log("trash response=", response);
    })
  }

}
