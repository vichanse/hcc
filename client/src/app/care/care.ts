export class Care {

  id?: number;
  date?: Date;
  intitule?: string;
  professionnel?: string;
  payeur?: string;
  beneficiaire?: string;
  carteVitale?: string;
  modePaiement?: string;
  montant?: number;

 constructor(json?: any) {
        if (json != null) {
            this.id = json.id;
            if (json.date != null) {
                this.date = new Date(json.date);
            }
            this.intitule = json.intitule;
            this.professionnel = json.professionnel;
            this.payeur = json.payeur;
            this.beneficiaire = json.beneficiaire;
            this.carteVitale = json.carteVitale;
            this.modePaiement = json.modePaiement;

            this.montant = json.montant;

        }
    }

    // Utils

    static toArray(jsons : any[]) : Care[] {
        let cares : Care[] = [];
        if (jsons != null) {
            for (let json of jsons) {
                cares.push(new Care(json));
            }
        }
        return cares;
    }
}
