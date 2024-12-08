import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsumoComponent } from './consumo/consumo.component'; // Importa el componente
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que AppComponent también sea standalone

  imports: [RouterOutlet, HttpClientModule, ConsumoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'telcox-frontend';

 
}


 