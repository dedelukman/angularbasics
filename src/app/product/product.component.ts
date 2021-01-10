import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any[];
  

  constructor() { 
   this.products = [
     {
       id:"1",
       name:"Apple"
     },
     {
       id:"2",
       name:"Acer"
     }

   ];
  }

  public getProducts(){
    return this.products;
  }

  ngOnInit(): void {
  }

}
