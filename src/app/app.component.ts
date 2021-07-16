import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  posts = 
  [
    {
      title: 'neat tree',
      imageurl: 'assests/tree.jpeg',
      username: 'nature',
      content: 'I saw this tree today'
    },
    {
      title: 'snowy mountain',
      imageurl: 'assests/mountain.jpeg',
      username: 'mountainlove',
      content: 'the mountain picture'
    },
    {
      title: 'mountain biking',
      imageurl: 'assests/biking.jpeg',
      username: 'biking',
      content: 'I did biking today'
    }
  ]
}
