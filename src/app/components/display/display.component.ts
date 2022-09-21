import { Component, OnInit ,Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateComponent} from 'src/app/components/update/update.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note:any
  
  constructor(public dialog: MatDialog) { }
  @Input() Notesarray: any;
  ngOnInit(): void {
    console.log(this.Notesarray)
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
      
    });
    
  }
}
