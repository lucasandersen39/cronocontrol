import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroReporteComponent } from './cronometro-reporte.component';

describe('CronometroReporteComponent', () => {
  let component: CronometroReporteComponent;
  let fixture: ComponentFixture<CronometroReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronometroReporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronometroReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
