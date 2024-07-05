import { Routes } from '@angular/router';
import { CronometroControlComponent } from './cronometro-control/cronometro-control.component';
import { CronometroAboutComponent } from './cronometro-about/cronometro-about.component';
import { CronometroReporteComponent } from './cronometro-reporte/cronometro-reporte.component';

export const routes: Routes = [
    { path: '', component: CronometroControlComponent },
    { path: 'reportes', component: CronometroReporteComponent },
    { path: 'about', component: CronometroAboutComponent },
];
