import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dugoKit'; 
  public userItems: Array<any> = new Array<any>();

  ngOnInit() {
    this.userItems.push({
      id: 0,
      name: 'Walter White',
      imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/17ogioga7phd7jpg.jpg'
    },{
      id: 1,
      name: 'Jesse Pinkman',
      imageUrl: 'https://valentinadelgizzo.files.wordpress.com/2015/06/season_4_-_jesse.jpg'
    },{
      id: 2,
      name: 'Unknown'
    },{
      id: 3,
      name: 'User 3'
    },{
      id: 4,
      name: 'User 4'
    },{
      id: 5,
      name: 'User 5'
    });
  }

  showUserForm(event: any) {
    console.log("Clicked on: " + event.name);
  }

}
