import { Component, OnInit } from '@angular/core';

import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  notelist = []
  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.getnotes();
  }
  getnotes() {
    this.note.getallnote().subscribe((response: any) => {
      console.log(response);
      this.notelist = response.data.data
      console.log(this.notelist);
    })


  }
}
