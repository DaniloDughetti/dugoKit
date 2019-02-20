import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CarouselItem } from '../models/carousel-item.model';
import { Constants } from '../utils/constants';
declare var $: any;

@Component({
  selector: 'users-carousel',
  templateUrl: './users-carousel.component.html',
  styleUrls: ['./users-carousel.component.sass']
})
export class UsersCarousel implements OnInit, OnDestroy {

  @Input() items;
  @Input() itemsNumberPerRow;
  @Input() addItems;
  @Input() title;

  @Output() itemSelectedOutput: EventEmitter<any> = new EventEmitter();

  itemSelected: any;
  owl: any;
  canIGoLeft = false;
  canIGoRight = true;

  itemIndex = 0;
  itemCount = 0;
  

  constructor() { }

  ngOnInit() {

    this.canIGoLeft = false;
    this.canIGoRight = false;

    if (this.items != null && this.items.length > 0) {
      this.itemSelected = this.items[0];
      this.canIGoRight = this.items.length > this.itemsNumberPerRow;
    }

    if (this.itemsNumberPerRow == null) {
      this.itemsNumberPerRow = 4;
    }
    if (this.addItems != null && this.addItems === true) {
      const additem: CarouselItem = {
        id: -1,
        imageUrl: 'assets/images/add_button.svg',
        name: 'Aggiungi',
        type: Constants.carouselItemTypeAdd
      }

      if (this.items != null && this.items.length > 0) {
        const tempItems = Array<CarouselItem>();
        tempItems.push(additem);
        for (const item of this.items) {
          tempItems.push(item);
        }
        this.items = tempItems;
        this.itemSelected = this.items[0];
      } else {

        this.items = Array<CarouselItem>();
        this.items.push(additem);
        this.itemSelected = this.items[0];
      }
    }

    this.init();
  }

  init() {
    const thisComponent = this;
    const carousel = $('#carousel');
    $(document).ready(function () {
      carousel
        .owlCarousel({
          loop: false,
          lazyLoad: false,
          nav: false,
          items: thisComponent.itemsNumberPerRow,
          dots: false,
          mouseDrag: false,
          slideBy: thisComponent.itemsNumberPerRow,
          
          onTranslate: function (event) {
            thisComponent.itemIndex = event.item.index;
            thisComponent.itemCount = event.item.count;
          },
          onTranslated: function (event) {
            thisComponent.itemIndex = event.item.index;
            thisComponent.itemCount = event.item.count;
            thisComponent.setNavigationButtons(event.item.index, event.item.count);
          }
        });
    });
  }

  setNavigationButtons(index: any, count: any) {
    this.canIGoLeft = (index > 0);
    this.canIGoRight = ((count - index) > this.itemsNumberPerRow);
  }

  goCarouselNext() {
    $('.owl-carousel').trigger('next.owl.carousel');
    this.setNavigationButtons(this.itemIndex, this.itemCount);
  }

  goCarouselPrev() {
    $('.owl-carousel').trigger('prev.owl.carousel');
    this.setNavigationButtons(this.itemIndex, this.itemCount);
  }

  selectedItem(item: any) {
    if (item) {
      if (this.itemSelected.id != item.id) {
        this.itemSelected = item;
        this.itemSelectedOutput.emit(this.itemSelected);
      }
    }
  }

  ngOnDestroy() {
  }
}
