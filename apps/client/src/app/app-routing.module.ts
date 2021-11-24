import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('@jsonplaceholder/posts').then((m) => m.PostsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
