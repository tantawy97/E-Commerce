import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from '../models/Category.model';
import { Product } from '../models/Product.model';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  categories:Category[]=[]
  selectfile:File=null;
  addproduct:FormGroup=new FormGroup({
    'productname':new FormControl(null,[Validators.required]),
    'quantity':new FormControl(null,[Validators.required,Validators.min(1)]),
    'price':new FormControl(null,[Validators.required]),
    'categoryId':new FormControl(null,[Validators.required]),
     'image':new FormControl(null,[Validators.required]),
  })
  constructor(private productService:ProductService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.GetAll().subscribe(res=>this.categories=res)

  }
  onFileSelected(event){
this.selectfile=<File>event.target.files[0]
console.log(this.selectfile)
  }
add(){

  const fd=new FormData();
 fd.append('image',this.selectfile,this.selectfile.name)
 fd.append('name',this.addproduct.value.productname)
 fd.append('price',this.addproduct.value.price)
fd.append('quantity',this.addproduct.value.quantity)
fd.append('categoryid',this.addproduct.value.categoryId)

  this.productService.Create(fd



).subscribe(res=>console.log(res))

}
}
