import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoComponent } from './consumo/consumo.component';

const routes: Routes = [
    // { path: '', redirectTo: '/consumo', pathMatch: 'full' }, // Ruta por defecto
    // { path: 'consumo', component: ConsumoComponent },    // Ruta para el módulo
    { path: '', component: ConsumoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
