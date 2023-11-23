import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food =>food.id==id)!;
  }
  
  getAllTags():Tag[]{
    return[
      {name:'All',count:9},
      {name:'FastFood',count:2},
      {name:'Pizza',count:2},
      {name:'Biryani',count:2},
      {name:'Curry',count:2},
      {name:'Cake',count:1},
    ];

  }



  getAllFoodsByTag(tag:string): Food[]{

    if(tag =="All"){
       return this.getAll();
    }else{
        return this.getAll().filter(food =>food.tags?.includes(tag));
    }
    
  }

  
  getAll():Food[]{
    return[
      {
        id:1,
        name:'Chicken Biryani',
        price:120,
        tags:['Biryani','Chicken Biryani'],
        favorite:true,
        stars:5,
        imageUrl:'/assets/images/Biryani.jpg',
        origins:['Hyderabadhi'],
        cookTime:'30-50',
      },
      {
        id:2,
        name:'Butter Chicken',
        price:200,
        tags:['Butter Chiken','Chicken Curry','Curry'],
        favorite:false,
        stars:4.0,
        imageUrl:'/assets/images/Butter-Chicken.jpg',
        origins:['India dish'],
        cookTime:'20-30',
      },
      {
        id:3,
        name:'Chocolet Cake',
        price:250,
        tags:['Chocolet Cake','Cake'],
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/images/Cake.jpg',
        origins:['USA'],
        cookTime:'20-30',
      },
      {
        id:4,
        name:'Fride Chicken',
        price:230,
        tags:['Fride Chicken','FastFood'],
        favorite:false,
        stars:3.8,
        imageUrl:'/assets/images/Fried-Chicken.jpg',
        origins:['USA','southern'],
        cookTime:'10-20',
      },
      {
        id:5,
        name:'Veg Pizza',
        price:100,
        tags:['Pizza','Veg pizza'],
        favorite:false,
        stars:4.6,
        imageUrl:'/assets/images/Pizza.jpg',
        origins:['Italian'],
        cookTime:'20-30',
      },
      {
        id:6,
        name:'Chicken Pakoda',
        price:70,
        tags:['Chicken Pakoda','FastFood'],
        favorite:false,
        stars:4.8,
        imageUrl:'/assets/images/Chicken-Pakoda.jpg',
        origins:['Indian Spicy'],
        cookTime:'10-20',
      },
      {
        id:7,
        name:'Chicken Pizza',
        price:130,
        tags:['ChickenPizza','Pizza'],
        favorite:false,
        stars:4.8,
        imageUrl:'/assets/images/Chicken-Pizza.jpg',
        origins:['Italian'],
        cookTime:'20-30',
      },
      {
        id:8,
        name:'Mutton Biryani',
        price:150,
        tags:['MuttonBiryani','Biryani'],
        favorite:false,
        stars:4.9,
        imageUrl:'/assets/images/Mutton-Biryani.jpg',
        origins:['Hyderabadhi Biryani'],
        cookTime:'30-50',
      },
      {
        id:9,
        name:'Mutton Curry',
        price:200,
        tags:['MuttonCurry','Curry'],
        favorite:false,
        stars:4.9,
        imageUrl:'/assets/images/Mutton-Curry.jpg',
        origins:['Indian Spaices'],
        cookTime:'30-40',
      },
    ]
  }
}
