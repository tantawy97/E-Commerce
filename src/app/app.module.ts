import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import{HttpClientModule} from '@angular/common/http';
import { AuthguardService } from './Services/authguard.service';
export function tokenGetter(){
  return localStorage.getItem("jwt");
}
let routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent,canActivate:[AuthguardService]},
  {path:"forgetpassword", component:ForgetpasswordComponent},
 {path:"register", component:RegisterComponent},
  {path:"home", component:HomeComponent},
  {path:"product", component:ProductComponent},


  {path:"**", component:ErrorComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    RegisterComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:5155"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
