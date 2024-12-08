import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConsumoComponent } from './consumo.component';
import { NgChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: '', component: ConsumoComponent }
];

@NgModule({
  declarations: [
    ConsumoComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule    //RouterModule.forChild(routes)
  ],
  exports: [ConsumoComponent], // Exportar el componente

})
export class ConsumoModule { }
