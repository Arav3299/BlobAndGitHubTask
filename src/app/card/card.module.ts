import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { DesignComponent } from './design/design.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DesignComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,Ng2SearchPipeModule,FormsModule
  ]
})
export class CardModule { }
