import { Component, Input } from '@angular/core';
import { Proyecto } from '../models/Proyecto';
import { Cronometro } from '../models/Cronometro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RealTimeFormatPipe } from '../../pipes/real-time-format.pipe';

@Component({
  selector: 'app-reloj-cronometro',
  standalone: true,
  imports: [CommonModule, FormsModule, RealTimeFormatPipe],
  templateUrl: './reloj-cronometro.component.html',
  styleUrl: './reloj-cronometro.component.scss'
})
export class RelojCronometroComponent {
  @Input()
  texto_pantalla: string = '';

  fecha_hoy: Date = new Date();
  segundos_acumulados: number = 0;
  intervalId: any = null;
  fechaIntervalId: any = null;
  private startTime: number | null = null;

  constructor() { }

  ngOnInit() {
    this.updateFechaHoy();
    this.fechaIntervalId = setInterval(() => {
      this.updateFechaHoy();
    }, 60000);
  }
  updateFechaHoy() {
    this.fecha_hoy = new Date();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.fechaIntervalId) {
      clearInterval(this.fechaIntervalId);
    }
  }

  iniciar() {
    if (!this.startTime) {
      this.startTime = Date.now();
    }
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.updateSegundosAcumulados();
      }, 1000);
    }
  }

  pausar() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  detener() {
    this.pausar();
    this.startTime = null;
    this.segundos_acumulados = 0;
  }

  private updateSegundosAcumulados() {
    if (this.startTime) {
      const now = Date.now();
      this.segundos_acumulados = Math.floor((now - this.startTime) / 1000);
    }
  }
}
