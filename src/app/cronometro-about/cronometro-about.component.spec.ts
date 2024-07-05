import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroAboutComponent } from './cronometro-about.component';

describe('CronometroAboutComponent', () => {
  let component: CronometroAboutComponent;
  let fixture: ComponentFixture<CronometroAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronometroAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronometroAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
