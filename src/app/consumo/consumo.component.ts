import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../consumo.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Usa provideHttpClient
import { ChartData,ChartOptions } from 'chart.js';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';

export interface Cliente {
  mes: string;
  saldo: number;
  dato_usado: number; // Agrega esta propiedad
  minuto_usado: number; // Agrega esta propiedad
}

@Component({
  selector: 'app-consumo',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule,
    NgxChartsModule, // Importar ngx-charts
  ], // Agrega CommonModule
  providers: [HttpClient,ConsumoService], // Configura HttpClient aquí

  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css'],
})
export class ConsumoComponent implements OnInit {
  cliente: Cliente[] = []; // Inicializado como un array vacío, nunca será null
  errorMessage: string | null = null;


  donutChartData = {
    datasets: [
      {
        data: [0, 100], // Datos iniciales, se actualizarán luego
        backgroundColor: [ 'purple' ,'orange'],
      }
    ],
    labels: [ 'Gigas Disponibles','Gigas Usados' ],
  };

  // Asegúrate de usar 'doughnut' y no 'string'
  donutChartType: 'doughnut' = 'doughnut'; // Tipo de gráfico
  donutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Asegúrate de que la posición sea un valor permitido
      },
    },
  };

  donutChartDataMin = {
    datasets: [
      {
        data: [0, 100], // Datos iniciales, se actualizarán luego
        backgroundColor: ['purple' ,'orange'],
      }
    ],
    labels: [ 'Minutos disponibles' ,'Minutos Usados'],
  };

  // Asegúrate de usar 'doughnut' y no 'string'
  donutChartTypeMin: 'doughnut' = 'doughnut'; // Tipo de gráfico
  donutChartOptionsMin = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Asegúrate de que la posición sea un valor permitido
      },
    },
  };
  constructor(private consumoService: ConsumoService) {}

  ngOnInit(): void {
    this.loadCliente(null); // Simula la llamada para obtener todos los clientes
   
    
  }

  loadCliente(id: number | null) {
    this.consumoService.getCliente(id).subscribe({
      next: (data) => {
        this.cliente = Array.isArray(data) ? data : [data]; // Si la respuesta no es un array, la convierto en uno
        console.log(this.cliente[0]['saldo']);
        console.log("d",(this.cliente[0].dato_usado / 20000) * 100    );
        const porcentajeUso = (this.cliente[0].dato_usado / 10) * 100;
        const porcentajeMinUso = (this.cliente[0].minuto_usado / 1000) * 100;

        this.donutChartData.datasets[0].data = [(100 - porcentajeUso),porcentajeUso];
        this.donutChartDataMin.datasets[0].data = [(100 - porcentajeMinUso),porcentajeMinUso];
        
        
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar datos del cliente';
        console.error(err); // Muestra el error en caso de fallo
      },
    });
  }
}
