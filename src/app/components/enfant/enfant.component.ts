import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../models/personne.interface';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule, EditComponent],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
  @Input() enfants?: Personne[];
  selectedEnfant?: Personne;

  selectEnfant(enfant: Personne) {
    this.selectedEnfant = enfant;
  }

  sauvegardeEnfant(event: Personne) {
    console.log(event);
  }
}
