import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { WishlistService } from './wishlist.service';

/**PrimeNG modules */
import { MenuModule, TabMenuModule, DataGridModule, InputTextModule, MessagesModule } from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MenuModule,
    TabMenuModule,
    DataGridModule,
    InputTextModule,
    MessagesModule
  ],
  providers: [WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
