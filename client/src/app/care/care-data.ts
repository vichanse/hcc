import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Care } from './care';
import { Refound } from './refound';


export class CareData implements InMemoryDbService {

  createDb() {
    const cares: Care[] = [
      {
        'id': 1,
        'date': '21/03/2017',
        'intitule': 'Visite maux de tête',
        'beneficiaire': 'Vicky',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'CB',
        'montant': 23,
        'refounds': [
          {
            'id': 1,
            'transmission': 'Télétransmission',
            'dateEnvoi': '21/03/2017',
            'dateRemb': '21/03/2017',
            'taux': '70%',
            'montantRemb': 16,
            'rembReel': 15,
            'dateCpt': '21/03/2017',
            'type': 'CPAM',
          },
          {
            'id': 2,
            'transmission': 'Télétransmission',
            'dateEnvoi': '21/03/2017',
            'dateRemb': '21/03/2017',
            'taux': '30%',
            'montantRemb': 7,
            'rembReel': 7,
            'dateCpt': '21/03/2017',
            'type': 'MUTUELLE',
          }
        ]
      },
      {
        'id': 2,
        'date': '21/03/2017',
        'intitule': 'Visite maux de tête',
        'beneficiaire': 'Vicky',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'CB',
        'montant': 23,
        'refounds': [
          {
            'id': 3,
            'transmission': 'Télétransmission',
            'dateEnvoi': '21/03/2017',
            'dateRemb': '21/03/2017',
            'taux': '70%',
            'montantRemb': 16,
            'rembReel': 15,
            'dateCpt': '21/03/2017',
            'type': 'CPAM',
          },
          {
            'id': 4,
            'transmission': 'Télétransmission',
            'dateEnvoi': '21/03/2017',
            'dateRemb': '21/03/2017',
            'taux': '30%',
            'montantRemb': 7,
            'rembReel': 7,
            'dateCpt': '21/03/2017',
            'type': 'MUTUELLE',
          }
        ]
      },
      {
        'id': 4,
        'date': '21/01/2017',
        'intitule': 'Visite Janvier',
        'beneficiaire': 'Keylia',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 5,
        'date': '12/02/2017',
        'intitule': 'Visite maux de ventre',
        'beneficiaire': 'Arlette',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'Chèque',
        'montant': 23
      },
      {
        'id': 6,
        'date': '18/02/2017',
        'intitule': 'Visite de routine',
        'beneficiaire': 'Keyshawn',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Arlette',
        'carteVitale': 'Arlette',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 7,
        'date': '01/03/2017',
        'intitule': 'Visite maux de gorge',
        'beneficiaire': 'Arlette',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Arlette',
        'carteVitale': 'Arlette',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 8,
        'date': '12/03/2017',
        'intitule': 'Dentiste',
        'beneficiaire': 'Vicky',
        'professionnel': 'Dr Menyo',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 9,
        'date': '15/03/2017',
        'intitule': 'Fracture au pied',
        'beneficiaire': 'Keylia',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 10,
        'date': '18/03/2017',
        'intitule': 'Imisuzi',
        'beneficiaire': 'Arlette',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Arlette',
        'carteVitale': 'Arlette',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 11,
        'date': '22/03/2017',
        'intitule': 'Kwijyaho',
        'beneficiaire': 'Vicky',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Vicky',
        'carteVitale': 'Vicky',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 12,
        'date': '02/04/2017',
        'intitule': 'Mal au dos',
        'beneficiaire': 'Arlette',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Arlette',
        'carteVitale': 'Arlette',
        'modePaiement': 'CB',
        'montant': 23
      },
      {
        'id': 13,
        'date': '04/03/2017',
        'intitule': 'Varicelle',
        'beneficiaire': 'Vicky',
        'professionnel': 'DANISEVICIUS',
        'payeur': 'Arlette',
        'carteVitale': 'Arlette',
        'modePaiement': 'CB',
        'montant': 23
      }
    ];

    return { cares };
  }


}
