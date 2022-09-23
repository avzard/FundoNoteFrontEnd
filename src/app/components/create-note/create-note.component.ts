import { Token } from '@angular/compiler';
import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  noteform!: FormGroup;
  isShow = false
  Title: any
  Description: any
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder, private note: NotesServiceService) { }

  ngOnInit(): void {
    this.noteform = this.formBuilder.group({

      title: ['', Validators.required],
      description: ['', Validators.required],


    });
  }

  show() {
    console.log("opentab");
    this.isShow = true
  }
  close() {

    console.log("closetab");
    this.isShow = false
    let reqdata = {
      Title: this.noteform.value.title,
      Description: this.noteform.value.description,
      
    }
    this.note.addnote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit("hello")
    })
  }
}