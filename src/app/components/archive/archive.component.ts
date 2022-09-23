import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList:any
  
  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getallnote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
      
      this.noteList = this.noteList.filter((object:any)=>{
        return object.archive===true
      })
    }
  )}
  receiveMessage(event:any){
    this.GetAllNotes()
    
  }
}
