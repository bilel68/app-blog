import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postloveIts: number;
  @Input() postDate: date;

  constructor() { }

  loveIts() {
    this.postloveIts++;
    return this.postloveIts;
  }

  DislikeIts()
    {
     this.postloveIts--;
   }

  ngOnInit() {}

}
