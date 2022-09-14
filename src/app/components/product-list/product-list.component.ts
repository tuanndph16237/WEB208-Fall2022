import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = 'Product List';
  status: boolean = true;
  products = [
    {id: 1, name: 'San pham A'},
    {id: 2, name: 'San pham B'},
  ];
  setTitle(){
    this.title = 'Tieu de moi cap nhat';
  }
  showLog(){
    console.log('Hallo');
  }
  changeStatus(){
    this.status = !this.status;
  }
}
