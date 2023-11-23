import { Component,OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../Service/Food/food.service';
import { CartService } from '../Service/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{

   food!:Food;
  constructor(private activatedRoute:ActivatedRoute, private foodservice:FoodService,private cartService:CartService , private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=this.foodservice.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
    
  }

}
