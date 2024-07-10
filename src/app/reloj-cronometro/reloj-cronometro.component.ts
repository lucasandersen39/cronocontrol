import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RealTimeFormatPipe } from '../../pipes/real-time-format.pipe';
import { RelojService } from '../services/reloj.service';
import { Reloj } from '../models/Reloj';

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

  @Input()
  segundos_acumulados: number = 0;

  reloj_iniciado: boolean = false;
  fecha_hoy: Date = new Date();
  intervalId: any = null;
  fechaIntervalId: any = null;
  startTime: number | null = null;

  constructor(private relojService: RelojService) { }

  ngOnInit() {
    if (this.segundos_acumulados > 0) {
      this.iniciar();
    }
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
    this.reloj_iniciado = true;
    this.relojService.start();
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.updateSegundosAcumulados();
      }, 1000);
    }

  }

  detener() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.reloj_iniciado = false;
    this.relojService.stop(this.segundos_acumulados);
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
