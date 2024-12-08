import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConsumoComponent } from './consumo.component';
//import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: '', component: ConsumoComponent }
];

@NgModule({
  declarations: [
    ConsumoComponent
  ],
  imports: [
    CommonModule,
  //  ChartsModule
    //RouterModule.forChild(routes)
  ],
  exports: [ConsumoComponent], // Exportar el componente

})
export class ConsumoModule { }
