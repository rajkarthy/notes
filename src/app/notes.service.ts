import { Injectable } from '@angular/core';
import { Notes } from "./notes";
import { NOTES } from "./notes-data";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class NotesService {
  private notes: Notes[] = NOTES;
  constructor(private http : HttpClient) { }

 getValues(id:number):Notes{
     for(var i=0;i<this.notes.length;i++)
     {
         if(this.notes[i].id === id )
            return this.notes[i];
     }
 }
 saveValues(content:string,id:number):void{
      this.notes[id-1].content = content;

 }
 addNotes(content:string):Observable<Notes>{
     const thisNote : Notes ={
         id : this.notes.length+1,
         content: content,
         isCompleted : false
     };
     this.notes.push(thisNote);
     return this.http.post<Notes>('http://localhost:8080/notes/add',thisNote);
 }
 getNotes():void{

 }
 getJobs():Observable<any>{
     return this.http.get<any>('https://www.reddit.com/r/gifs/top/.json?limit=2');
 }
}
