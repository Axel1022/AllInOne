import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {
  constructor() {}

  num1: string = '';
  num2: string = '';

  resultado: string = '-';

  sumar(): void {
    this.resultado = (parseInt(this.num1) + parseInt(this.num2)).toString();
  }

  ngOnInit() {}
}
