import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../models/personne.interface';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, EnfantComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  @Input() personnes: Personne[] = [];

  selectedParent?: Personne;

  selectParent(parent: Personne) {
    this.selectedParent = parent;
  }
}
