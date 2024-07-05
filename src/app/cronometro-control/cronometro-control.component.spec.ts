import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroControlComponent } from './cronometro-control.component';

describe('CronometroControlComponent', () => {
  let component: CronometroControlComponent;
  let fixture: ComponentFixture<CronometroControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronometroControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronometroControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
