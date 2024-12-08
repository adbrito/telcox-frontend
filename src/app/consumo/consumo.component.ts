import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../consumo.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Usa provideHttpClient
import { ChartOptions, ChartType, ChartData } from 'chart.js';
//import { NgChartsModule } from 'ng2-charts';

export interface Cliente {
  nombre: string;
  saldo: number;
  dato_usado: number; // Agrega esta propiedad
  minuto_usado: number; // Agrega esta propiedad
}

@Component({
  selector: 'app-consumo',
  standalone: true,
  imports: [
    CommonModule,
    //NgChartsModule, // Importación necesaria
  ], // Agrega CommonModule
  providers: [HttpClient,ConsumoService], // Configura HttpClient aquí

  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css'],
})
export class ConsumoComponent implements OnInit {
  cliente: any[] = []; // Inicializado como un array vacío, nunca será null
  errorMessage: string | null = null;

  // constructor() {}

   
  constructor(private consumoService: ConsumoService) {}

  ngOnInit(): void {
    this.loadCliente(null); // Simula la llamada para obtener todos los clientes
  }

  loadCliente(id: number | null) {
    this.consumoService.getCliente(id).subscribe({
      next: (data) => {
        this.cliente = Array.isArray(data) ? data : [data]; // Si la respuesta no es un array, la convierto en uno
        console.log(data); // Muestra los datos cargados
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar datos del cliente';
        console.error(err); // Muestra el error en caso de fallo
      },
    });
  }
}
