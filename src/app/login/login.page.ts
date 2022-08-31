import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Profile: { id: number, nom: string, numero: number, adresse: string, photo:string }[] = [
    { id: 0, nom: "Moussa SARR", numero: 76887654, adresse: "Aci", photo:"photo.jpg" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
