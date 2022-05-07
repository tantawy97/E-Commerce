import { Byte } from "@angular/compiler/src/util";
import { Category } from "./Category.model";

export class Product{
constructor(
  public id:number,
  public name:string,
  public image:any,

  public quantity:number,
  public price:number,
  public categoryid:number,
  public category:Category,

){}
}
