import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BooklistComponent } from './booklist/booklist.component';
import { MenuComponent } from './menu/menu.component';
import { DataserviceService } from './dataservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS}    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { dataInterceptor } from './interceptor'
import { Utility } from './utility';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooklistComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule
    
  ],
  providers: [DataserviceService, Utility],
  bootstrap: [AppComponent],
  schemas: [],
  exports: []
})
export class AppModule { 
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: AppModule,
      providers:[DataserviceService, {provide: HTTP_INTERCEPTORS,
      useClass: dataInterceptor, multi: true}]
    }
  }
}
