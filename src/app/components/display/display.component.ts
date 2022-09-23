import { Component,EventEmitter, OnInit ,Input,Output } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UpdateComponent} from 'src/app/components/update/update.component';
import {DataServiceService} from 'src/app/services/dataService/data-service.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note:any
  
  constructor(public dialog: MatDialog,private Data:DataServiceService) { }
  @Input() Notesarray: any;
  @Output() refreshEvent= new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.Notesarray)
    this.Data.currentMessage.subscribe(message=>{
      console.log(message)})
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      data:note,
      panelClass:'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
      this.note=response
      this.refreshEvent.emit("hello")
    });
    
  }
  receivedMessage(event:any){
    console.log(event);
    this.refreshEvent.emit("hello")
  }
}
