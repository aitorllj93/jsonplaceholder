/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONPlaceholderApiConfiguration, JSONPlaceholderApiConfigurationParams } from './json-placeholder-api-configuration';

import { PostService } from './services/post.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    PostService,
    JSONPlaceholderApiConfiguration
  ],
})
export class JSONPlaceholderApiModule {
  static forRoot(params: JSONPlaceholderApiConfigurationParams): ModuleWithProviders<JSONPlaceholderApiModule> {
    return {
      ngModule: JSONPlaceholderApiModule,
      providers: [
        {
          provide: JSONPlaceholderApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: JSONPlaceholderApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('JSONPlaceholderApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
