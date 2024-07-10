import { Component } from '@angular/core';
import { Registro } from '../models/Registro';
import { RegistroDataService } from '../services/registro-data.service';
import { RealTimeFormatPipe } from '../../pipes/real-time-format.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cronometro-reporte',
  standalone: true,
  imports: [CommonModule, RealTimeFormatPipe],
  templateUrl: './cronometro-reporte.component.html',
  styleUrl: './cronometro-reporte.component.scss'
})
export class CronometroReporteComponent {

  registros: Registro[] = [];

  constructor(private registroDataService: RegistroDataService) { }

  ngOnInit() {
    this.registroDataService.getAllRegistros().subscribe(registros => {
      this.registros = registros;
      console.log(this.registros);
    });

  }
}
