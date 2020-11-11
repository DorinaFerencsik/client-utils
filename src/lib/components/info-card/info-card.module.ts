import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VendorModule } from '../vendor.module';

import { InfoCardComponent } from './info-card.component';

@NgModule({
  declarations: [InfoCardComponent],
  imports: [
    CommonModule,
    VendorModule,
  ],
  exports: [InfoCardComponent],
})
export class InfoCardModule { }
