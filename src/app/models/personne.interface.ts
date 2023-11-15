export interface Personne {
  nom: string;
	prenom: string;
	age: number;
	sexe: string;
	enfants?: Personne[];
}