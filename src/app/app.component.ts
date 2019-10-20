import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  supes_initial=[
    {id:1, name:"Superman"}, {id:2, name:"Batman"}, {id:3, name:"Wonder Woman"}]

supes_modified=[
  {id:1, name:"Superman"}, {id:2, name:"Batman"}, {id:3, name:"Wonder Woman"},
  {id:4, name:"Flash"}
];
supes=[];

  constructor(){
    this.supes=this.supes_initial;
  }

  refresh(){
    this.supes=this.supes_modified;
  }

  recognize(index, item){
    return item.id;
  }
}
