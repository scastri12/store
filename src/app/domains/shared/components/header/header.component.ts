import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
