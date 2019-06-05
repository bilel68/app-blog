import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Posts";
  posts=[
    {
      title : "Mon premier post",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      loveIts : 5,
      created_at : new Date("10/24/2017 11:00:00")
    },
    {
      title : "Mon deuxième post",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      loveIts : -5,
      created_at : new Date("10/24/2017 11:00:00")
    },
    {
      title : "Autre post",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      loveIts : 3,
      created_at : new Date("10/24/2017 11:00:00")
    }
  ];
}
