import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
  digito: number = 0;

  opciones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor() {}

  ngOnInit() {}
}
