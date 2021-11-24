/* tslint:disable */
/* eslint-disable */
import { HttpResponse } from '@angular/common/http';

/**
 * Constrains the http response to not have the body defined as `T | null`, but `T` only.
 */
export type JSONPlaceholderApiStrictHttpResponse<T> = HttpResponse<T> & {
  readonly body: T;
}
