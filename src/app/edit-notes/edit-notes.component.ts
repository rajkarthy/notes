import { Component, OnInit } from '@angular/core';
import { NotesService } from "../notes.service";
import { ActivatedRoute } from "@angular/router";
import { Notes } from "../notes";

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {
  private currentNote: Notes;
  private currentNoteId: number;
  constructor(private noteservice : NotesService,
      private routes: ActivatedRoute )
      { }

  ngOnInit() {
      this.getValues();
  }

  getValues():void{
      this.currentNoteId =  parseInt(this.routes.snapshot.paramMap.get('id'));
      this.currentNote = this.noteservice.getValues(this.currentNoteId);
  }
  saveValues(content:string):void{
      this.noteservice.saveValues(content,this.currentNoteId);
  }

}
