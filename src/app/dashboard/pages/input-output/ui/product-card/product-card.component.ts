import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  //todo: Input antes
  // @Input({required:true})
  // public product!: Product;

  //todo: Output antes
  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public product = input.required<Product>();
  public onIncrementQuantity = output<number>();

  public incrementQuantity():void{
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect( ()=> {
    console.log(this.product().name);
  })



}
