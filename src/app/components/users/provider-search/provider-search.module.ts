import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderSearchComponent } from './provider-search.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ProviderSearchComponent
  }
];

@NgModule({
  declarations: [ProviderSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderSearchModule { }
