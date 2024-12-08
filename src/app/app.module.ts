import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Si usas rutas
import { provideHttpClient } from '@angular/common/http';  // Usa provideHttpClient
import { ConsumoModule } from './consumo/consumo.module';
import { AppRoutingModule } from './app-routing.module';
import { ConsumoComponent } from './consumo/consumo.component';
import { ConsumoService } from './consumo.service'; // Si no está, también importa el servicio
import { ChartsModule } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
   // ConsumoComponent // Declara aquí el componente

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    ChartsModule,  // Usar ChartsModule aquí

  //  ChartsModule , // Añade ChartsModule aquí
  //  NgChartsModule
    // ConsumoModule,
   // RouterModule.forRoot([{ path: 'consumo', loadChildren: () => import('./consumo/consumo.module').then(m => m.ConsumoModule) }])  // Agrega rutas básicas si usas enrutamiento
  ],
  providers: [ConsumoService,     provideHttpClient()  // Configura HttpClient usando provideHttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 