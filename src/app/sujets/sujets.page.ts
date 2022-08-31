import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.page.html',
  styleUrls: ['./sujets.page.scss'],
})
export class SujetsPage implements OnInit {
  sujets: { idsujet: number, nom_sujet: string,}[] = [
    { idsujet: 1, nom_sujet: "CHAIRE",  },
    { idsujet: 2, nom_sujet: "PONDEUSE",  },
  ]
  constructor() { }

  ngOnInit() {
  }

}
