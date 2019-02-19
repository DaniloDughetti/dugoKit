import { Component, OnInit } from '@angular/core';
// import { UsersCarousel } from 'dugo-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dugoKit'; 
  public userItems: Array<any> = new Array<any>();

  ngOnInit() {
    // let carouselItem = new CarouselItem();
    // carouselItem.id = 0;
    // carouselItem.name = 'User 1';
    // carouselItem.type = Constants.carouselItemTypeFromApi;
    this.userItems.push({
      id: 0,
      name: 'User 0',
      type: 0
    },{
      id: 1,
      name: 'User 1',
      type: 0
    },{
      id: 2,
      name: 'User 2',
      type: 0
    },{
      id: 3,
      name: 'User 3',
      type: 0
    },{
      id: 4,
      name: 'User 4',
      type: 0
    },{
      id: 5,
      name: 'User 5',
      type: 0
    });
  }

  showUserForm(event: any) {
    console.log(event);
  }

}
