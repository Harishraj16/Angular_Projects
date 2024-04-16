import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
