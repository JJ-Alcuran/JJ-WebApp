import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlPanelPage } from './control-panel.page';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path: '',
    component: ControlPanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlPanelPageRoutingModule {}
