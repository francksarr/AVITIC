import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-utilisateur',
  templateUrl: './profile-utilisateur.page.html',
  styleUrls: ['./profile-utilisateur.page.scss'],
})
export class ProfileUtilisateurPage implements OnInit {
  Profile: { id: number, nom: string, numero: number, adresse: string, photo:string }[] = [
    { id: 0, nom: "Moussa SARR", numero: 76887654, adresse: "Aci", photo:"photo.jpg" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
