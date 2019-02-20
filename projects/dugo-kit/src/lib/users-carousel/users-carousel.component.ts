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

  @Input() styleSettings;

  @Output() itemSelectedOutput: EventEmitter<any> = new EventEmitter();

  itemSelected: any;
  owl: any;
  canIGoLeft = false;
  canIGoRight = true;

  itemIndex = 0;
  itemCount = 0;

  /*
    User custom settings
  */
  arrowColor = '#3166D6';
  arrowColorDisabled = '#DDDDDD';
  
  titleColor = '#3166D6';
  titleSize = '24px';
  titleWeight = 'bold';

  isInfoLabelToShow = true;
  infoLabelColor = '#3166D6';
  infoLabelSize = '22px';
  infoLabelWeight = 'bold';

  borderColor = '#3166D6';

  addButtonLabel = 'Add';
  
  constructor() { }

  ngOnInit() {

    this.initStyleSettings();

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
        name: this.addButtonLabel,
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

  private initStyleSettings() {
    if (this.styleSettings != null) {

      if (this.styleSettings.arrowColor) {
        this.arrowColor = this.styleSettings.arrowColor;
      }

      if (this.styleSettings.arrowColorDisabled) {
        this.arrowColorDisabled = this.styleSettings.arrowColorDisabled;
      }
  
      if (this.styleSettings.titleColor) {
        this.titleColor = this.styleSettings.titleColor;
      }
  
      if (this.styleSettings.titleSize) {
        this.titleSize = this.styleSettings.titleSize;
      }
  
      if (this.styleSettings.titleWeight) {
        this.titleWeight = this.styleSettings.titleWeight;
      }
  
      if (this.styleSettings.isInfoLabelToShow) {
        this.isInfoLabelToShow = this.styleSettings.isInfoLabelToShow;
      }
  
      if (this.styleSettings.infoLabelColor) {
        this.infoLabelColor = this.styleSettings.infoLabelColor;
      }
  
      if (this.styleSettings.infoLabelSize) {
        this.infoLabelSize = this.styleSettings.infoLabelSize;
      }
  
      if (this.styleSettings.infoLabelWeight) {
        this.infoLabelWeight = this.styleSettings.infoLabelWeight;
      }

      if (this.styleSettings.borderColor) {
        this.borderColor = this.styleSettings.borderColor;
      }

      if (this.styleSettings.addButtonLabel) {
        this.addButtonLabel = this.styleSettings.addButtonLabel;
      }
    }
  }

  ngOnDestroy() {
  }

}
