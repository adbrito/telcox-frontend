import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  // Importa provideHttpClient
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,  // Usar la configuración existente
  providers: [
    provideHttpClient(),  // Proporciona HttpClient aquí
    // Aquí puedes agregar otros proveedores si los necesitas
  ]
})
  .catch((err) => console.error(err));
