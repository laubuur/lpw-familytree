import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../../models/personne.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  @Input() enfant?: Personne;
  @Output() save = new EventEmitter(); 

  enfantEdition?: Personne;

  ngOnInit() {
    this.enfantEdition = JSON.parse(JSON.stringify(this.enfant));
  }

  saveAction() {
    this.save.emit(this.enfantEdition);
  }
}
