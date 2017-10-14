import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container';
import { HeaderComponent } from './header';
import { ContainerListComponent } from './container/container-list';
import { ListRowComponent } from './container/list-row';
import { ApiService } from './api/api.service';
import { routes } from './routes/app.router';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    ContainerListComponent,
    ListRowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
