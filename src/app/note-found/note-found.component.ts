import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-note-found',
  templateUrl: './note-found.component.html',
  styleUrls: ['./note-found.component.css']
})
export class NoteFoundComponent implements OnInit {

  @Input() visible:boolean=false;
  @Input() notFoundMassage:string='Nothing Found!';
  @Input() resetLinkText:string='Reset Search';
  @Input() resetLintRoute:string='/';

  constructor(){}

  ngOnInit(): void {
    
  }

}
