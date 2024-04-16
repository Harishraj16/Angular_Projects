import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isSidePanelVisible: boolean = false;

  productObj: any = {
    "id": 0,
    "title": "",
    "description": "",
    "price": 0,
    "discountPercentage": 0,
    "rating": 0,
    "stock": 0,
    "brand": "",
    "category": "",
    "thumbnail": "",
    "images": [
      "",
      "",
      "",
      "",
      ""
    ]

  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
}
