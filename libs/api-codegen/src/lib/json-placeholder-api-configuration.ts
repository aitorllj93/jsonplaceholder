/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class JSONPlaceholderApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `JSONPlaceholderApiModule.forRoot()`
 */
export interface JSONPlaceholderApiConfigurationParams {
  rootUrl?: string;
}
