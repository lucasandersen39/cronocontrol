import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.scss'
})
export class FormCardComponent {
  formNewCard: FormGroup;

  constructor(private fb: FormBuilder, private cardDataService: CardDataService) {
    this.formNewCard = this.fb.group({
      nombre: ['', Validators.required],
      proyecto: ['', Validators.required],
      estado: 'Pendiente',
      descripcion: ''
    });
  }

  save_card() {
    if (this.formNewCard.valid) {
      //Agregar el campo minutos en 0
      this.formNewCard.value.minutos = 0;
      this.cardDataService.saveCard(this.formNewCard.value).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }

  campo_invalido(campo: string, errorType: string) {
    return this.formNewCard.get(campo)?.hasError(errorType) && this.formNewCard.get(campo)?.touched;
  }
}
