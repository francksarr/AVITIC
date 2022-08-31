import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients: { idclient: number, nom: string, numero: number, adresse: string, localisation_poulailler:string}[] = [
    { idclient: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", localisation_poulailler:""},
    { idclient: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro", localisation_poulailler:""},
    { idclient: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye", localisation_poulailler:"" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
