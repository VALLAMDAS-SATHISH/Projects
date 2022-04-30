import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    { name:"pencil",price:"8.3",code:"GDN-0011",available:"04-04-2022",rating:4.8},
    {name:"pen",price:"10",code:"GMC-0011",available:"05-04-2022",rating:4.0},
    {name:"eraser",price:"5",code:"TBX-0011",available:"03-04-2022",rating:4.5},
    {name:"scale",price:"20",code:"GDN-0011",available:"10-04-2022",rating:4.9}
  ];
  flag=false;
  show(){
    this.flag=!this.flag;
  }

}