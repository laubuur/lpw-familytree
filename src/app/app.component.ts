import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Personne } from './models/personne.interface';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personnesOrigine: Personne[] = [
    {
      nom: "Dupont",
      prenom: "Alice",
      age: 30,
      sexe: "Femme",
      enfants: [
        { nom: "Dupont", prenom: "Lucas", age: 5, sexe: "Garçon" },
        { nom: "Dupont", prenom: "Emma", age: 8, sexe: "Fille" },
      ],
    },
    {
      nom: "Martin",
      prenom: "Jean",
      age: 35,
      sexe: "Homme",
      enfants: [
        { nom: "Martin", prenom: "Sophie", age: 6, sexe: "Fille" },
        { nom: "Martin", prenom: "Thomas", age: 9, sexe: "Garçon" },
      ],
    },
    {
      nom: "Durand",
      prenom: "Marie",
      age: 32,
      sexe: "Femme",
      enfants: [
        { nom: "Durand", prenom: "Léa", age: 4, sexe: "Fille" },
        { nom: "Durand", prenom: "Alexandre", age: 7, sexe: "Garçon" },
      ],
    },
  ];
}
