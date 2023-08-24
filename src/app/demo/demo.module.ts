import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoPageRoutingModule } from './demo-routing.module';

import { DemoPage } from './demo.page';
import { OpenCloseComponent } from '../open-close/open-close.component';

@NgModule({
   
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoPageRoutingModule
  ],
   
  declarations: [DemoPage, OpenCloseComponent]
})
export class DemoPageModule {}
