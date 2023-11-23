import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../Service/Food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string='center';

  tags?:Tag[];
  constructor(private foodservice:FoodService){}

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags=this.foodservice.getAllTags();
    
  }

}
