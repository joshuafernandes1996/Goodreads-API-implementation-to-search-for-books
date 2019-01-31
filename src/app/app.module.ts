import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BooklistComponent } from './booklist/booklist.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooklistComponent,
    MenuComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxPaginationModule
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent],
  schemas: [],
  exports: [ PaginationComponent ]
})
export class AppModule { }
