import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/Client';
@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.page.html',
  styleUrls: ['./edit-clients.page.scss'],
})

export class EditClientsPage implements OnInit {
  idClient: string;
  cl: Client;
  clients: { idclient: number, nom: string, numero: number, adresse: string, localisation_poulailler:string}[] = [
    { idclient: 0, nom: "Aissata DIARRA", numero: 76887654, adresse: "Aci", localisation_poulailler:"" },
    { idclient: 1, nom: "Fatimata TOURE", numero: 76887654, adresse: "Sébénicoro", localisation_poulailler:"" },
    { idclient: 2, nom: "Fodé DIAKITE", numero: 76887654, adresse: "Hamdalaye", localisation_poulailler:"" }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let idClient = this.route.snapshot.paramMap.get('idclient');
    this.cl = this.clients.find(function (c) {
      return c.idclient == parseInt(idClient);
  })

}
}
