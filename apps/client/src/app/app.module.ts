import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSONPlaceholderApiModule } from '@jsonplaceholder/api-codegen';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JSONPlaceholderApiModule.forRoot({
      rootUrl: 'https://jsonplaceholder.typicode.com',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
