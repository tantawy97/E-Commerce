import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Product } from '../models/Product.model';
import { ProductService } from '../Services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[]=[]
image=[]
totalLength:any;
page:number=1;
  constructor(private productServce:ProductService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
this.productServce.GetAll().subscribe(
  res=> {
    this.products=res
    this.totalLength=res.length
    console.log(this.totalLength)
    for(let item of this.products){
      let objectURL = 'data:image/png;base64,' + item.image;
     item.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
  }
)
  }
  isactive=false
  change(){
    this.isactive=!this.isactive
  }
}
