import { Component, OnInit } from '@angular/core';
import { NotesService } from "../notes.service";
import { Notes } from "../notes";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(public noteservice : NotesService) { }

  ngOnInit() {

  }
  getNotes():void{
      this.noteservice.getNotes();
  }
  addNotes(content:string):void{
      this.noteservice.addNotes(content).subscribe(
          (data:Notes) => { }
      );
  }

  getJobs():void{
      this.noteservice.getJobs().subscribe((data:any)=>{
          console.log(data);
      });
  }
}
