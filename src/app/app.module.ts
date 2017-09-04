import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite/favorite.directive';
import { CategoryListPipe } from './custom-pipe/category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './service/media-item.service';
import { lookupListToken, lookupLists } from './provider/providers';
import { MockXHRBackend } from './provider/mock-xhr-backend';
import { routing } from './router/app.routing';

@NgModule({  
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }
