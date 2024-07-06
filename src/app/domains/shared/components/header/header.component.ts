import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) products: Product[] = [];
  hideSideMenu = signal(true);
  total = signal(0);
  

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges) {
    const products = changes['products'];
    if (products) {
      this.total.set(this.calcTotal());
    }
  }

  calcTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
  

}
