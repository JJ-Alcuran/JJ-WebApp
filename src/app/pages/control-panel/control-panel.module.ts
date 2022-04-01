import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlPanelPageRoutingModule } from './control-panel-routing.module';

import { ControlPanelPage } from './control-panel.page';

import { NgChartsModule } from 'ng2-charts';

import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlPanelPageRoutingModule,
    NgChartsModule
  ],
  declarations: [ControlPanelPage, BarChartComponent]
})
export class ControlPanelPageModule {}
