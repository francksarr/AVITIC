import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sujet } from '../models/sujet';
import { Poulailler } from '../models/poulailler';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-poulailler',
  templateUrl: './poulailler.page.html',
  styleUrls: ['./poulailler.page.scss'],
})

export class PoulaillerPage implements OnInit {
ids: string;
su:Sujet;
   
   poulailler:{idpoulailler:number,nom_poulailler:string}[]=[
    { idpoulailler: 1, nom_poulailler: "chèso mali"  },
    { idpoulailler: 2, nom_poulailler: "chèso hèrè"},
  ];
  sujets: { idsujet: number, nom_sujet: string}[] = [
    { idsujet: 1, nom_sujet: "CHAIRE",  },
    { idsujet: 2, nom_sujet: "PONDEUSE",  },
  ];
  clients: { idclient: number, nom: string, numero: number, adresse: string, localisation_poulailler:string}[] = [
    { idclient: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci",localisation_poulailler:"" },
    { idclient: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro", localisation_poulailler:"" },
    { idclient: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye", localisation_poulailler:"" }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let ids = this.route.snapshot.paramMap.get('idsujet');
    this.su = this.sujets.find(function (s) {
      return s.idsujet == parseInt(ids);
})
}
}
