import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {
  digito: string = '';
  resultado: string = '-';

  constructor() {}

  traducir(): void {
    if (!this.digito) {
      this.resultado = 'Ingrese un numero!';
      return;
    }

    switch (this.digito) {
      case '1':
        this.resultado = 'Uno';
        break;
      case '2':
        this.resultado = 'Dos';
        break;
      case '3':
        this.resultado = 'Tres';
        break;
      case '4':
        this.resultado = 'Cuatro';
        break;
      case '5':
        this.resultado = 'Cinco';
        break;
      case '6':
        this.resultado = 'Seis';
        break;
      case '7':
        this.resultado = 'Siete';
        break;
      case '8':
        this.resultado = 'Ocho';
        break;
      case '9':
        this.resultado = 'Nueve';
        break;
      case '10':
        this.resultado = 'Diez';
        break;
      case '11':
        this.resultado = 'Once';
        break;
      case '12':
        this.resultado = 'Doce';
        break;
      case '13':
        this.resultado = 'Trece';
        break;
      case '14':
        this.resultado = 'Catorce';
        break;
      case '15':
        this.resultado = 'Quince';
        break;
      case '16':
        this.resultado = 'Dieciséis';
        break;
      case '17':
        this.resultado = 'Diecisiete';
        break;
      case '18':
        this.resultado = 'Dieciocho';
        break;
      case '19':
        this.resultado = 'Diecinueve';
        break;
      case '20':
        this.resultado = 'Veinte';
        break;
      case '21':
        this.resultado = 'Veintiuno';
        break;
      case '22':
        this.resultado = 'Veintidós';
        break;
      case '23':
        this.resultado = 'Veintitrés';
        break;
      case '24':
        this.resultado = 'Veinticuatro';
        break;
      case '25':
        this.resultado = 'Veinticinco';
        break;
      case '26':
        this.resultado = 'Veintiséis';
        break;
      case '27':
        this.resultado = 'Veintisiete';
        break;
      case '28':
        this.resultado = 'Veintiocho';
        break;
      case '29':
        this.resultado = 'Veintinueve';
        break;
      case '30':
        this.resultado = 'Treinta';
        break;
      case '31':
        this.resultado = 'Treinta y uno';
        break;
      case '32':
        this.resultado = 'Treinta y dos';
        break;
      case '33':
        this.resultado = 'Treinta y tres';
        break;
      case '34':
        this.resultado = 'Treinta y cuatro';
        break;
      case '35':
        this.resultado = 'Treinta y cinco';
        break;
      case '36':
        this.resultado = 'Treinta y seis';
        break;
      case '37':
        this.resultado = 'Treinta y siete';
        break;
      case '38':
        this.resultado = 'Treinta y ocho';
        break;
      case '39':
        this.resultado = 'Treinta y nueve';
        break;
      case '40':
        this.resultado = 'Cuarenta';
        break;
      case '41':
        this.resultado = 'Cuarenta y uno';
        break;
      case '42':
        this.resultado = 'Cuarenta y dos';
        break;
      case '43':
        this.resultado = 'Cuarenta y tres';
        break;
      case '44':
        this.resultado = 'Cuarenta y cuatro';
        break;
      case '45':
        this.resultado = 'Cuarenta y cinco';
        break;
      case '46':
        this.resultado = 'Cuarenta y seis';
        break;
      case '47':
        this.resultado = 'Cuarenta y siete';
        break;
      case '48':
        this.resultado = 'Cuarenta y ocho';
        break;
      case '49':
        this.resultado = 'Cuarenta y nueve';
        break;
      case '50':
        this.resultado = 'Cincuenta';
        break;
      case '51':
        this.resultado = 'Cincuenta y uno';
        break;
      case '52':
        this.resultado = 'Cincuenta y dos';
        break;
      case '53':
        this.resultado = 'Cincuenta y tres';
        break;
      case '54':
        this.resultado = 'Cincuenta y cuatro';
        break;
      case '55':
        this.resultado = 'Cincuenta y cinco';
        break;
      case '56':
        this.resultado = 'Cincuenta y seis';
        break;
      case '57':
        this.resultado = 'Cincuenta y siete';
        break;
      case '58':
        this.resultado = 'Cincuenta y ocho';
        break;
      case '59':
        this.resultado = 'Cincuenta y nueve';
        break;
      case '60':
        this.resultado = 'Sesenta';
        break;
      case '61':
        this.resultado = 'Sesenta y uno';
        break;
      case '62':
        this.resultado = 'Sesenta y dos';
        break;
      case '63':
        this.resultado = 'Sesenta y tres';
        break;
      case '64':
        this.resultado = 'Sesenta y cuatro';
        break;
      case '65':
        this.resultado = 'Sesenta y cinco';
        break;
      case '66':
        this.resultado = 'Sesenta y seis';
        break;
      case '67':
        this.resultado = 'Sesenta y siete';
        break;
      case '68':
        this.resultado = 'Sesenta y ocho';
        break;
      case '69':
        this.resultado = 'Sesenta y nueve';
        break;
      case '70':
        this.resultado = 'Setenta';
        break;
      case '71':
        this.resultado = 'Setenta y uno';
        break;
      case '72':
        this.resultado = 'Setenta y dos';
        break;
      case '73':
        this.resultado = 'Setenta y tres';
        break;
      case '74':
        this.resultado = 'Setenta y cuatro';
        break;
      case '75':
        this.resultado = 'Setenta y cinco';
        break;
      case '76':
        this.resultado = 'Setenta y seis';
        break;
      case '77':
        this.resultado = 'Setenta y siete';
        break;
      case '78':
        this.resultado = 'Setenta y ocho';
        break;
      case '79':
        this.resultado = 'Setenta y nueve';
        break;
      case '80':
        this.resultado = 'Ochenta';
        break;
      case '81':
        this.resultado = 'Ochenta y uno';
        break;
      case '82':
        this.resultado = 'Ochenta y dos';
        break;
      case '83':
        this.resultado = 'Ochenta y tres';
        break;
      case '84':
        this.resultado = 'Ochenta y cuatro';
        break;
      case '85':
        this.resultado = 'Ochenta y cinco';
        break;
      case '86':
        this.resultado = 'Ochenta y seis';
        break;
      case '87':
        this.resultado = 'Ochenta y siete';
        break;
      case '88':
        this.resultado = 'Ochenta y ocho';
        break;
      case '89':
        this.resultado = 'Ochenta y nueve';
        break;
      case '90':
        this.resultado = 'Noventa';
        break;
      case '91':
        this.resultado = 'Noventa y uno';
        break;
      case '92':
        this.resultado = 'Noventa y dos';
        break;
      case '93':
        this.resultado = 'Noventa y tres';
        break;
      case '94':
        this.resultado = 'Noventa y cuatro';
        break;
      case '95':
        this.resultado = 'Noventa y cinco';
        break;
      case '96':
        this.resultado = 'Noventa y seis';
        break;
      case '97':
        this.resultado = 'Noventa y siete';
        break;
      case '98':
        this.resultado = 'Noventa y ocho';
        break;
      case '99':
        this.resultado = 'Noventa y nueve';
        break;
      case '100':
        this.resultado = 'Cien';
        break;
      case '101':
        this.resultado = 'Ciento uno';
        break;
      case '102':
        this.resultado = 'Ciento dos';
        break;
      case '103':
        this.resultado = 'Ciento tres';
        break;
      case '104':
        this.resultado = 'Ciento cuatro';
        break;
      case '105':
        this.resultado = 'Ciento cinco';
        break;
      case '106':
        this.resultado = 'Ciento seis';
        break;
      case '107':
        this.resultado = 'Ciento siete';
        break;
      case '108':
        this.resultado = 'Ciento ocho';
        break;
      case '109':
        this.resultado = 'Ciento nueve';
        break;
      case '110':
        this.resultado = 'Ciento diez';
        break;
      case '111':
        this.resultado = 'Ciento once';
        break;
      case '112':
        this.resultado = 'Ciento doce';
        break;
      case '113':
        this.resultado = 'Ciento trece';
        break;
      case '114':
        this.resultado = 'Ciento catorce';
        break;
      case '115':
        this.resultado = 'Ciento quince';
        break;
      case '116':
        this.resultado = 'Ciento dieciséis';
        break;
      case '117':
        this.resultado = 'Ciento diecisiete';
        break;
      case '118':
        this.resultado = 'Ciento dieciocho';
        break;
      case '119':
        this.resultado = 'Ciento diecinueve';
        break;
      case '120':
        this.resultado = 'Ciento veinte';
        break;
      case '121':
        this.resultado = 'Ciento veintiuno';
        break;
      case '122':
        this.resultado = 'Ciento veintidós';
        break;
      case '123':
        this.resultado = 'Ciento veintitrés';
        break;
      case '124':
        this.resultado = 'Ciento veinticuatro';
        break;
      case '125':
        this.resultado = 'Ciento veinticinco';
        break;
      case '126':
        this.resultado = 'Ciento veintiséis';
        break;
      case '127':
        this.resultado = 'Ciento veintisiete';
        break;
      case '128':
        this.resultado = 'Ciento veintiocho';
        break;
      case '129':
        this.resultado = 'Ciento veintinueve';
        break;
      case '130':
        this.resultado = 'Ciento treinta';
        break;
      case '131':
        this.resultado = 'Ciento treinta y uno';
        break;
      case '132':
        this.resultado = 'Ciento treinta y dos';
        break;
      case '133':
        this.resultado = 'Ciento treinta y tres';
        break;
      case '134':
        this.resultado = 'Ciento treinta y cuatro';
        break;
      case '135':
        this.resultado = 'Ciento treinta y cinco';
        break;
      case '136':
        this.resultado = 'Ciento treinta y seis';
        break;
      case '137':
        this.resultado = 'Ciento treinta y siete';
        break;
      case '138':
        this.resultado = 'Ciento treinta y ocho';
        break;
      case '139':
        this.resultado = 'Ciento treinta y nueve';
        break;
      case '140':
        this.resultado = 'Ciento cuarenta';
        break;
      case '141':
        this.resultado = 'Ciento cuarenta y uno';
        break;
      case '142':
        this.resultado = 'Ciento cuarenta y dos';
        break;
      case '143':
        this.resultado = 'Ciento cuarenta y tres';
        break;
      case '144':
        this.resultado = 'Ciento cuarenta y cuatro';
        break;
      case '145':
        this.resultado = 'Ciento cuarenta y cinco';
        break;
      case '146':
        this.resultado = 'Ciento cuarenta y seis';
        break;
      case '147':
        this.resultado = 'Ciento cuarenta y siete';
        break;
      case '148':
        this.resultado = 'Ciento cuarenta y ocho';
        break;
      case '149':
        this.resultado = 'Ciento cuarenta y nueve';
        break;
      case '150':
        this.resultado = 'Ciento cincuenta';
        break;
      case '151':
        this.resultado = 'Ciento cincuenta y uno';
        break;
      case '152':
        this.resultado = 'Ciento cincuenta y dos';
        break;
      case '153':
        this.resultado = 'Ciento cincuenta y tres';
        break;
      case '154':
        this.resultado = 'Ciento cincuenta y cuatro';
        break;
      case '155':
        this.resultado = 'Ciento cincuenta y cinco';
        break;
      case '156':
        this.resultado = 'Ciento cincuenta y seis';
        break;
      case '157':
        this.resultado = 'Ciento cincuenta y siete';
        break;
      case '158':
        this.resultado = 'Ciento cincuenta y ocho';
        break;
      case '159':
        this.resultado = 'Ciento cincuenta y nueve';
        break;
      case '160':
        this.resultado = 'Ciento sesenta';
        break;
      case '161':
        this.resultado = 'Ciento sesenta y uno';
        break;
      case '162':
        this.resultado = 'Ciento sesenta y dos';
        break;
      case '163':
        this.resultado = 'Ciento sesenta y tres';
        break;
      case '164':
        this.resultado = 'Ciento sesenta y cuatro';
        break;
      case '165':
        this.resultado = 'Ciento sesenta y cinco';
        break;
      case '166':
        this.resultado = 'Ciento sesenta y seis';
        break;
      case '167':
        this.resultado = 'Ciento sesenta y siete';
        break;
      case '168':
        this.resultado = 'Ciento sesenta y ocho';
        break;
      case '169':
        this.resultado = 'Ciento sesenta y nueve';
        break;
      case '170':
        this.resultado = 'Ciento setenta';
        break;
      case '171':
        this.resultado = 'Ciento setenta y uno';
        break;
      case '172':
        this.resultado = 'Ciento setenta y dos';
        break;
      case '173':
        this.resultado = 'Ciento setenta y tres';
        break;
      case '174':
        this.resultado = 'Ciento setenta y cuatro';
        break;
      case '175':
        this.resultado = 'Ciento setenta y cinco';
        break;
      case '176':
        this.resultado = 'Ciento setenta y seis';
        break;
      case '177':
        this.resultado = 'Ciento setenta y siete';
        break;
      case '178':
        this.resultado = 'Ciento setenta y ocho';
        break;
      case '179':
        this.resultado = 'Ciento setenta y nueve';
        break;
      case '180':
        this.resultado = 'Ciento ochenta';
        break;
      case '181':
        this.resultado = 'Ciento ochenta y uno';
        break;
      case '182':
        this.resultado = 'Ciento ochenta y dos';
        break;
      case '183':
        this.resultado = 'Ciento ochenta y tres';
        break;
      case '184':
        this.resultado = 'Ciento ochenta y cuatro';
        break;
      case '185':
        this.resultado = 'Ciento ochenta y cinco';
        break;
      case '186':
        this.resultado = 'Ciento ochenta y seis';
        break;
      case '187':
        this.resultado = 'Ciento ochenta y siete';
        break;
      case '188':
        this.resultado = 'Ciento ochenta y ocho';
        break;
      case '189':
        this.resultado = 'Ciento ochenta y nueve';
        break;
      case '190':
        this.resultado = 'Ciento noventa';
        break;
      case '191':
        this.resultado = 'Ciento noventa y uno';
        break;
      case '192':
        this.resultado = 'Ciento noventa y dos';
        break;
      case '193':
        this.resultado = 'Ciento noventa y tres';
        break;
      case '194':
        this.resultado = 'Ciento noventa y cuatro';
        break;
      case '195':
        this.resultado = 'Ciento noventa y cinco';
        break;
      case '196':
        this.resultado = 'Ciento noventa y seis';
        break;
      case '197':
        this.resultado = 'Ciento noventa y siete';
        break;
      case '198':
        this.resultado = 'Ciento noventa y ocho';
        break;
      case '199':
        this.resultado = 'Ciento noventa y nueve';
        break;
      case '200':
        this.resultado = 'Doscientos';
        break;
      case '201':
        this.resultado = 'Doscientos uno';
        break;
      case '202':
        this.resultado = 'Doscientos dos';
        break;
      case '203':
        this.resultado = 'Doscientos tres';
        break;
      case '204':
        this.resultado = 'Doscientos cuatro';
        break;
      case '205':
        this.resultado = 'Doscientos cinco';
        break;
      case '206':
        this.resultado = 'Doscientos seis';
        break;
      case '207':
        this.resultado = 'Doscientos siete';
        break;
      case '208':
        this.resultado = 'Doscientos ocho';
        break;
      case '209':
        this.resultado = 'Doscientos nueve';
        break;
      case '210':
        this.resultado = 'Doscientos diez';
        break;
      case '211':
        this.resultado = 'Doscientos once';
        break;
      case '212':
        this.resultado = 'Doscientos doce';
        break;
      case '213':
        this.resultado = 'Doscientos trece';
        break;
      case '214':
        this.resultado = 'Doscientos catorce';
        break;
      case '215':
        this.resultado = 'Doscientos quince';
        break;
      case '216':
        this.resultado = 'Doscientos dieciséis';
        break;
      case '217':
        this.resultado = 'Doscientos diecisiete';
        break;
      case '218':
        this.resultado = 'Doscientos dieciocho';
        break;
      case '219':
        this.resultado = 'Doscientos diecinueve';
        break;
      case '220':
        this.resultado = 'Doscientos veinte';
        break;
      case '221':
        this.resultado = 'Doscientos veintiuno';
        break;
      case '222':
        this.resultado = 'Doscientos veintidós';
        break;
      case '223':
        this.resultado = 'Doscientos veintitrés';
        break;
      case '224':
        this.resultado = 'Doscientos veinticuatro';
        break;
      case '225':
        this.resultado = 'Doscientos veinticinco';
        break;
      case '226':
        this.resultado = 'Doscientos veintiséis';
        break;
      case '227':
        this.resultado = 'Doscientos veintisiete';
        break;
      case '228':
        this.resultado = 'Doscientos veintiocho';
        break;
      case '229':
        this.resultado = 'Doscientos veintinueve';
        break;
      case '230':
        this.resultado = 'Doscientos treinta';
        break;
      case '231':
        this.resultado = 'Doscientos treinta y uno';
        break;
      case '232':
        this.resultado = 'Doscientos treinta y dos';
        break;
      case '233':
        this.resultado = 'Doscientos treinta y tres';
        break;
      case '234':
        this.resultado = 'Doscientos treinta y cuatro';
        break;
      case '235':
        this.resultado = 'Doscientos treinta y cinco';
        break;
      case '236':
        this.resultado = 'Doscientos treinta y seis';
        break;
      case '237':
        this.resultado = 'Doscientos treinta y siete';
        break;
      case '238':
        this.resultado = 'Doscientos treinta y ocho';
        break;
      case '239':
        this.resultado = 'Doscientos treinta y nueve';
        break;
      case '240':
        this.resultado = 'Doscientos cuarenta';
        break;
      case '241':
        this.resultado = 'Doscientos cuarenta y uno';
        break;
      case '242':
        this.resultado = 'Doscientos cuarenta y dos';
        break;
      case '243':
        this.resultado = 'Doscientos cuarenta y tres';
        break;
      case '244':
        this.resultado = 'Doscientos cuarenta y cuatro';
        break;
      case '245':
        this.resultado = 'Doscientos cuarenta y cinco';
        break;
      case '246':
        this.resultado = 'Doscientos cuarenta y seis';
        break;
      case '247':
        this.resultado = 'Doscientos cuarenta y siete';
        break;
      case '248':
        this.resultado = 'Doscientos cuarenta y ocho';
        break;
      case '249':
        this.resultado = 'Doscientos cuarenta y nueve';
        break;
      case '250':
        this.resultado = 'Doscientos cincuenta';
        break;
      case '251':
        this.resultado = 'Doscientos cincuenta y uno';
        break;
      case '252':
        this.resultado = 'Doscientos cincuenta y dos';
        break;
      case '253':
        this.resultado = 'Doscientos cincuenta y tres';
        break;
      case '254':
        this.resultado = 'Doscientos cincuenta y cuatro';
        break;
      case '255':
        this.resultado = 'Doscientos cincuenta y cinco';
        break;
      case '256':
        this.resultado = 'Doscientos cincuenta y seis';
        break;
      case '257':
        this.resultado = 'Doscientos cincuenta y siete';
        break;
      case '258':
        this.resultado = 'Doscientos cincuenta y ocho';
        break;
      case '259':
        this.resultado = 'Doscientos cincuenta y nueve';
        break;
      case '260':
        this.resultado = 'Doscientos sesenta';
        break;
      case '261':
        this.resultado = 'Doscientos sesenta y uno';
        break;
      case '262':
        this.resultado = 'Doscientos sesenta y dos';
        break;
      case '263':
        this.resultado = 'Doscientos sesenta y tres';
        break;
      case '264':
        this.resultado = 'Doscientos sesenta y cuatro';
        break;
      case '265':
        this.resultado = 'Doscientos sesenta y cinco';
        break;
      case '266':
        this.resultado = 'Doscientos sesenta y seis';
        break;
      case '267':
        this.resultado = 'Doscientos sesenta y siete';
        break;
      case '268':
        this.resultado = 'Doscientos sesenta y ocho';
        break;
      case '269':
        this.resultado = 'Doscientos sesenta y nueve';
        break;
      case '270':
        this.resultado = 'Doscientos setenta';
        break;
      case '271':
        this.resultado = 'Doscientos setenta y uno';
        break;
      case '272':
        this.resultado = 'Doscientos setenta y dos';
        break;
      case '273':
        this.resultado = 'Doscientos setenta y tres';
        break;
      case '274':
        this.resultado = 'Doscientos setenta y cuatro';
        break;
      case '275':
        this.resultado = 'Doscientos setenta y cinco';
        break;
      case '276':
        this.resultado = 'Doscientos setenta y seis';
        break;
      case '277':
        this.resultado = 'Doscientos setenta y siete';
        break;
      case '278':
        this.resultado = 'Doscientos setenta y ocho';
        break;
      case '279':
        this.resultado = 'Doscientos setenta y nueve';
        break;
      case '280':
        this.resultado = 'Doscientos ochenta';
        break;
      case '281':
        this.resultado = 'Doscientos ochenta y uno';
        break;
      case '282':
        this.resultado = 'Doscientos ochenta y dos';
        break;
      case '283':
        this.resultado = 'Doscientos ochenta y tres';
        break;
      case '284':
        this.resultado = 'Doscientos ochenta y cuatro';
        break;
      case '285':
        this.resultado = 'Doscientos ochenta y cinco';
        break;
      case '286':
        this.resultado = 'Doscientos ochenta y seis';
        break;
      case '287':
        this.resultado = 'Doscientos ochenta y siete';
        break;
      case '288':
        this.resultado = 'Doscientos ochenta y ocho';
        break;
      case '289':
        this.resultado = 'Doscientos ochenta y nueve';
        break;
      case '290':
        this.resultado = 'Doscientos noventa';
        break;
      case '291':
        this.resultado = 'Doscientos noventa y uno';
        break;
      case '292':
        this.resultado = 'Doscientos noventa y dos';
        break;
      case '293':
        this.resultado = 'Doscientos noventa y tres';
        break;
      case '294':
        this.resultado = 'Doscientos noventa y cuatro';
        break;
      case '295':
        this.resultado = 'Doscientos noventa y cinco';
        break;
      case '296':
        this.resultado = 'Doscientos noventa y seis';
        break;
      case '297':
        this.resultado = 'Doscientos noventa y siete';
        break;
      case '298':
        this.resultado = 'Doscientos noventa y ocho';
        break;
      case '299':
        this.resultado = 'Doscientos noventa y nueve';
        break;
      case '300':
        this.resultado = 'Trescientos';
        break;
      case '401':
        this.resultado = 'Cuatrocientos uno';
        break;
      case '402':
        this.resultado = 'Cuatrocientos dos';
        break;
      case '403':
        this.resultado = 'Cuatrocientos tres';
        break;
      case '404':
        this.resultado = 'Cuatrocientos cuatro';
        break;
      case '405':
        this.resultado = 'Cuatrocientos cinco';
        break;
      case '406':
        this.resultado = 'Cuatrocientos seis';
        break;
      case '407':
        this.resultado = 'Cuatrocientos siete';
        break;
      case '408':
        this.resultado = 'Cuatrocientos ocho';
        break;
      case '409':
        this.resultado = 'Cuatrocientos nueve';
        break;
      case '410':
        this.resultado = 'Cuatrocientos diez';
        break;
      case '411':
        this.resultado = 'Cuatrocientos once';
        break;
      case '412':
        this.resultado = 'Cuatrocientos doce';
        break;
      case '413':
        this.resultado = 'Cuatrocientos trece';
        break;
      case '414':
        this.resultado = 'Cuatrocientos catorce';
        break;
      case '415':
        this.resultado = 'Cuatrocientos quince';
        break;
      case '416':
        this.resultado = 'Cuatrocientos dieciséis';
        break;
      case '417':
        this.resultado = 'Cuatrocientos diecisiete';
        break;
      case '418':
        this.resultado = 'Cuatrocientos dieciocho';
        break;
      case '419':
        this.resultado = 'Cuatrocientos diecinueve';
        break;
      case '420':
        this.resultado = 'Cuatrocientos veinte';
        break;
      case '421':
        this.resultado = 'Cuatrocientos veintiuno';
        break;
      case '422':
        this.resultado = 'Cuatrocientos veintidós';
        break;
      case '423':
        this.resultado = 'Cuatrocientos veintitrés';
        break;
      case '424':
        this.resultado = 'Cuatrocientos veinticuatro';
        break;
      case '425':
        this.resultado = 'Cuatrocientos veinticinco';
        break;
      case '426':
        this.resultado = 'Cuatrocientos veintiséis';
        break;
      case '427':
        this.resultado = 'Cuatrocientos veintisiete';
        break;
      case '428':
        this.resultado = 'Cuatrocientos veintiocho';
        break;
      case '429':
        this.resultado = 'Cuatrocientos veintinueve';
        break;
      case '430':
        this.resultado = 'Cuatrocientos treinta';
        break;
      case '431':
        this.resultado = 'Cuatrocientos treinta y uno';
        break;
      case '432':
        this.resultado = 'Cuatrocientos treinta y dos';
        break;
      case '433':
        this.resultado = 'Cuatrocientos treinta y tres';
        break;
      case '434':
        this.resultado = 'Cuatrocientos treinta y cuatro';
        break;
      case '435':
        this.resultado = 'Cuatrocientos treinta y cinco';
        break;
      case '436':
        this.resultado = 'Cuatrocientos treinta y seis';
        break;
      case '437':
        this.resultado = 'Cuatrocientos treinta y siete';
        break;
      case '438':
        this.resultado = 'Cuatrocientos treinta y ocho';
        break;
      case '439':
        this.resultado = 'Cuatrocientos treinta y nueve';
        break;
      case '440':
        this.resultado = 'Cuatrocientos cuarenta';
        break;
      case '441':
        this.resultado = 'Cuatrocientos cuarenta y uno';
        break;
      case '442':
        this.resultado = 'Cuatrocientos cuarenta y dos';
        break;
      case '443':
        this.resultado = 'Cuatrocientos cuarenta y tres';
        break;
      case '444':
        this.resultado = 'Cuatrocientos cuarenta y cuatro';
        break;
      case '445':
        this.resultado = 'Cuatrocientos cuarenta y cinco';
        break;
      case '446':
        this.resultado = 'Cuatrocientos cuarenta y seis';
        break;
      case '447':
        this.resultado = 'Cuatrocientos cuarenta y siete';
        break;
      case '448':
        this.resultado = 'Cuatrocientos cuarenta y ocho';
        break;
      case '449':
        this.resultado = 'Cuatrocientos cuarenta y nueve';
        break;
      case '450':
        this.resultado = 'Cuatrocientos cincuenta';
        break;
      case '451':
        this.resultado = 'Cuatrocientos cincuenta y uno';
        break;
      case '452':
        this.resultado = 'Cuatrocientos cincuenta y dos';
        break;
      case '453':
        this.resultado = 'Cuatrocientos cincuenta y tres';
        break;
      case '454':
        this.resultado = 'Cuatrocientos cincuenta y cuatro';
        break;
      case '455':
        this.resultado = 'Cuatrocientos cincuenta y cinco';
        break;
      case '456':
        this.resultado = 'Cuatrocientos cincuenta y seis';
        break;
      case '457':
        this.resultado = 'Cuatrocientos cincuenta y siete';
        break;
      case '458':
        this.resultado = 'Cuatrocientos cincuenta y ocho';
        break;
      case '459':
        this.resultado = 'Cuatrocientos cincuenta y nueve';
        break;
      case '460':
        this.resultado = 'Cuatrocientos sesenta';
        break;
      case '461':
        this.resultado = 'Cuatrocientos sesenta y uno';
        break;
      case '462':
        this.resultado = 'Cuatrocientos sesenta y dos';
        break;
      case '463':
        this.resultado = 'Cuatrocientos sesenta y tres';
        break;
      case '464':
        this.resultado = 'Cuatrocientos sesenta y cuatro';
        break;
      case '465':
        this.resultado = 'Cuatrocientos sesenta y cinco';
        break;
      case '466':
        this.resultado = 'Cuatrocientos sesenta y seis';
        break;
      case '467':
        this.resultado = 'Cuatrocientos sesenta y siete';
        break;
      case '468':
        this.resultado = 'Cuatrocientos sesenta y ocho';
        break;
      case '469':
        this.resultado = 'Cuatrocientos sesenta y nueve';
        break;
      case '470':
        this.resultado = 'Cuatrocientos setenta';
        break;
      case '471':
        this.resultado = 'Cuatrocientos setenta y uno';
        break;
      case '472':
        this.resultado = 'Cuatrocientos setenta y dos';
        break;
      case '473':
        this.resultado = 'Cuatrocientos setenta y tres';
        break;
      case '474':
        this.resultado = 'Cuatrocientos setenta y cuatro';
        break;
      case '475':
        this.resultado = 'Cuatrocientos setenta y cinco';
        break;
      case '476':
        this.resultado = 'Cuatrocientos setenta y seis';
        break;
      case '477':
        this.resultado = 'Cuatrocientos setenta y siete';
        break;
      case '478':
        this.resultado = 'Cuatrocientos setenta y ocho';
        break;
      case '479':
        this.resultado = 'Cuatrocientos setenta y nueve';
        break;
      case '480':
        this.resultado = 'Cuatrocientos ochenta';
        break;
      case '481':
        this.resultado = 'Cuatrocientos ochenta y uno';
        break;
      case '482':
        this.resultado = 'Cuatrocientos ochenta y dos';
        break;
      case '483':
        this.resultado = 'Cuatrocientos ochenta y tres';
        break;
      case '484':
        this.resultado = 'Cuatrocientos ochenta y cuatro';
        break;
      case '485':
        this.resultado = 'Cuatrocientos ochenta y cinco';
        break;
      case '486':
        this.resultado = 'Cuatrocientos ochenta y seis';
        break;
      case '487':
        this.resultado = 'Cuatrocientos ochenta y siete';
        break;
      case '488':
        this.resultado = 'Cuatrocientos ochenta y ocho';
        break;
      case '489':
        this.resultado = 'Cuatrocientos ochenta y nueve';
        break;
      case '490':
        this.resultado = 'Cuatrocientos noventa';
        break;
      case '491':
        this.resultado = 'Cuatrocientos noventa y uno';
        break;
      case '492':
        this.resultado = 'Cuatrocientos noventa y dos';
        break;
      case '493':
        this.resultado = 'Cuatrocientos noventa y tres';
        break;
      case '494':
        this.resultado = 'Cuatrocientos noventa y cuatro';
        break;
      case '495':
        this.resultado = 'Cuatrocientos noventa y cinco';
        break;
      case '496':
        this.resultado = 'Cuatrocientos noventa y seis';
        break;
      case '497':
        this.resultado = 'Cuatrocientos noventa y siete';
        break;
      case '498':
        this.resultado = 'Cuatrocientos noventa y ocho';
        break;
      case '499':
        this.resultado = 'Cuatrocientos noventa y nueve';
        break;
      case '500':
        this.resultado = 'Quinientos';
        break;
      case '501':
        this.resultado = 'Quinientos uno';
        break;
      case '502':
        this.resultado = 'Quinientos dos';
        break;
      case '503':
        this.resultado = 'Quinientos tres';
        break;
      case '504':
        this.resultado = 'Quinientos cuatro';
        break;
      case '505':
        this.resultado = 'Quinientos cinco';
        break;
      case '506':
        this.resultado = 'Quinientos seis';
        break;
      case '507':
        this.resultado = 'Quinientos siete';
        break;
      case '508':
        this.resultado = 'Quinientos ocho';
        break;
      case '509':
        this.resultado = 'Quinientos nueve';
        break;
      case '510':
        this.resultado = 'Quinientos diez';
        break;
      case '511':
        this.resultado = 'Quinientos once';
        break;
      case '512':
        this.resultado = 'Quinientos doce';
        break;
      case '513':
        this.resultado = 'Quinientos trece';
        break;
      case '514':
        this.resultado = 'Quinientos catorce';
        break;
      case '515':
        this.resultado = 'Quinientos quince';
        break;
      case '516':
        this.resultado = 'Quinientos dieciséis';
        break;
      case '517':
        this.resultado = 'Quinientos diecisiete';
        break;
      case '518':
        this.resultado = 'Quinientos dieciocho';
        break;
      case '519':
        this.resultado = 'Quinientos diecinueve';
        break;
      case '520':
        this.resultado = 'Quinientos veinte';
        break;
      case '521':
        this.resultado = 'Quinientos veintiuno';
        break;
      case '522':
        this.resultado = 'Quinientos veintidós';
        break;
      case '523':
        this.resultado = 'Quinientos veintitrés';
        break;
      case '524':
        this.resultado = 'Quinientos veinticuatro';
        break;
      case '525':
        this.resultado = 'Quinientos veinticinco';
        break;
      case '526':
        this.resultado = 'Quinientos veintiséis';
        break;
      case '527':
        this.resultado = 'Quinientos veintisiete';
        break;
      case '528':
        this.resultado = 'Quinientos veintiocho';
        break;
      case '529':
        this.resultado = 'Quinientos veintinueve';
        break;
      case '530':
        this.resultado = 'Quinientos treinta';
        break;
      case '531':
        this.resultado = 'Quinientos treinta y uno';
        break;
      case '532':
        this.resultado = 'Quinientos treinta y dos';
        break;
      case '533':
        this.resultado = 'Quinientos treinta y tres';
        break;
      case '534':
        this.resultado = 'Quinientos treinta y cuatro';
        break;
      case '535':
        this.resultado = 'Quinientos treinta y cinco';
        break;
      case '536':
        this.resultado = 'Quinientos treinta y seis';
        break;
      case '537':
        this.resultado = 'Quinientos treinta y siete';
        break;
      case '538':
        this.resultado = 'Quinientos treinta y ocho';
        break;
      case '539':
        this.resultado = 'Quinientos treinta y nueve';
        break;
      case '540':
        this.resultado = 'Quinientos cuarenta';
        break;
      case '541':
        this.resultado = 'Quinientos cuarenta y uno';
        break;
      case '542':
        this.resultado = 'Quinientos cuarenta y dos';
        break;
      case '543':
        this.resultado = 'Quinientos cuarenta y tres';
        break;
      case '544':
        this.resultado = 'Quinientos cuarenta y cuatro';
        break;
      case '545':
        this.resultado = 'Quinientos cuarenta y cinco';
        break;
      case '546':
        this.resultado = 'Quinientos cuarenta y seis';
        break;
      case '547':
        this.resultado = 'Quinientos cuarenta y siete';
        break;
      case '548':
        this.resultado = 'Quinientos cuarenta y ocho';
        break;
      case '549':
        this.resultado = 'Quinientos cuarenta y nueve';
        break;
      case '550':
        this.resultado = 'Quinientos cincuenta';
        break;
      case '551':
        this.resultado = 'Quinientos cincuenta y uno';
        break;
      case '552':
        this.resultado = 'Quinientos cincuenta y dos';
        break;
      case '553':
        this.resultado = 'Quinientos cincuenta y tres';
        break;
      case '554':
        this.resultado = 'Quinientos cincuenta y cuatro';
        break;
      case '555':
        this.resultado = 'Quinientos cincuenta y cinco';
        break;
      case '556':
        this.resultado = 'Quinientos cincuenta y seis';
        break;
      case '557':
        this.resultado = 'Quinientos cincuenta y siete';
        break;
      case '558':
        this.resultado = 'Quinientos cincuenta y ocho';
        break;
      case '559':
        this.resultado = 'Quinientos cincuenta y nueve';
        break;
      case '560':
        this.resultado = 'Quinientos sesenta';
        break;
      case '561':
        this.resultado = 'Quinientos sesenta y uno';
        break;
      case '562':
        this.resultado = 'Quinientos sesenta y dos';
        break;
      case '563':
        this.resultado = 'Quinientos sesenta y tres';
        break;
      case '564':
        this.resultado = 'Quinientos sesenta y cuatro';
        break;
      case '565':
        this.resultado = 'Quinientos sesenta y cinco';
        break;
      case '566':
        this.resultado = 'Quinientos sesenta y seis';
        break;
      case '567':
        this.resultado = 'Quinientos sesenta y siete';
        break;
      case '568':
        this.resultado = 'Quinientos sesenta y ocho';
        break;
      case '569':
        this.resultado = 'Quinientos sesenta y nueve';
        break;
      case '570':
        this.resultado = 'Quinientos setenta';
        break;
      case '571':
        this.resultado = 'Quinientos setenta y uno';
        break;
      case '572':
        this.resultado = 'Quinientos setenta y dos';
        break;
      case '573':
        this.resultado = 'Quinientos setenta y tres';
        break;
      case '574':
        this.resultado = 'Quinientos setenta y cuatro';
        break;
      case '575':
        this.resultado = 'Quinientos setenta y cinco';
        break;
      case '576':
        this.resultado = 'Quinientos setenta y seis';
        break;
      case '577':
        this.resultado = 'Quinientos setenta y siete';
        break;
      case '578':
        this.resultado = 'Quinientos setenta y ocho';
        break;
      case '579':
        this.resultado = 'Quinientos setenta y nueve';
        break;
      case '580':
        this.resultado = 'Quinientos ochenta';
        break;
      case '581':
        this.resultado = 'Quinientos ochenta y uno';
        break;
      case '582':
        this.resultado = 'Quinientos ochenta y dos';
        break;
      case '583':
        this.resultado = 'Quinientos ochenta y tres';
        break;
      case '584':
        this.resultado = 'Quinientos ochenta y cuatro';
        break;
      case '585':
        this.resultado = 'Quinientos ochenta y cinco';
        break;
      case '586':
        this.resultado = 'Quinientos ochenta y seis';
        break;
      case '587':
        this.resultado = 'Quinientos ochenta y siete';
        break;
      case '588':
        this.resultado = 'Quinientos ochenta y ocho';
        break;
      case '589':
        this.resultado = 'Quinientos ochenta y nueve';
        break;
      case '590':
        this.resultado = 'Quinientos noventa';
        break;
      case '591':
        this.resultado = 'Quinientos noventa y uno';
        break;
      case '592':
        this.resultado = 'Quinientos noventa y dos';
        break;
      case '593':
        this.resultado = 'Quinientos noventa y tres';
        break;
      case '594':
        this.resultado = 'Quinientos noventa y cuatro';
        break;
      case '595':
        this.resultado = 'Quinientos noventa y cinco';
        break;
      case '596':
        this.resultado = 'Quinientos noventa y seis';
        break;
      case '597':
        this.resultado = 'Quinientos noventa y siete';
        break;
      case '598':
        this.resultado = 'Quinientos noventa y ocho';
        break;
      case '599':
        this.resultado = 'Quinientos noventa y nueve';
        break;
      case '600':
        this.resultado = 'Seiscientos';
        break;
      case '600':
        this.resultado = 'Seiscientos';
        break;
      case '601':
        this.resultado = 'Seiscientos uno';
        break;
      case '602':
        this.resultado = 'Seiscientos dos';
        break;
      case '603':
        this.resultado = 'Seiscientos tres';
        break;
      case '604':
        this.resultado = 'Seiscientos cuatro';
        break;
      case '605':
        this.resultado = 'Seiscientos cinco';
        break;
      case '606':
        this.resultado = 'Seiscientos seis';
        break;
      case '607':
        this.resultado = 'Seiscientos siete';
        break;
      case '608':
        this.resultado = 'Seiscientos ocho';
        break;
      case '609':
        this.resultado = 'Seiscientos nueve';
        break;
      case '610':
        this.resultado = 'Seiscientos diez';
        break;
      case '611':
        this.resultado = 'Seiscientos once';
        break;
      case '612':
        this.resultado = 'Seiscientos doce';
        break;
      case '613':
        this.resultado = 'Seiscientos trece';
        break;
      case '614':
        this.resultado = 'Seiscientos catorce';
        break;
      case '615':
        this.resultado = 'Seiscientos quince';
        break;
      case '616':
        this.resultado = 'Seiscientos dieciséis';
        break;
      case '617':
        this.resultado = 'Seiscientos diecisiete';
        break;
      case '618':
        this.resultado = 'Seiscientos dieciocho';
        break;
      case '619':
        this.resultado = 'Seiscientos diecinueve';
        break;
      case '620':
        this.resultado = 'Seiscientos veinte';
        break;
      case '621':
        this.resultado = 'Seiscientos veintiuno';
        break;
      case '622':
        this.resultado = 'Seiscientos veintidós';
        break;
      case '623':
        this.resultado = 'Seiscientos veintitrés';
        break;
      case '624':
        this.resultado = 'Seiscientos veinticuatro';
        break;
      case '625':
        this.resultado = 'Seiscientos veinticinco';
        break;
      case '626':
        this.resultado = 'Seiscientos veintiséis';
        break;
      case '627':
        this.resultado = 'Seiscientos veintisiete';
        break;
      case '628':
        this.resultado = 'Seiscientos veintiocho';
        break;
      case '629':
        this.resultado = 'Seiscientos veintinueve';
        break;
      case '630':
        this.resultado = 'Seiscientos treinta';
        break;
      case '631':
        this.resultado = 'Seiscientos treinta y uno';
        break;
      case '632':
        this.resultado = 'Seiscientos treinta y dos';
        break;
      case '633':
        this.resultado = 'Seiscientos treinta y tres';
        break;
      case '634':
        this.resultado = 'Seiscientos treinta y cuatro';
        break;
      case '635':
        this.resultado = 'Seiscientos treinta y cinco';
        break;
      case '636':
        this.resultado = 'Seiscientos treinta y seis';
        break;
      case '637':
        this.resultado = 'Seiscientos treinta y siete';
        break;
      case '638':
        this.resultado = 'Seiscientos treinta y ocho';
        break;
      case '639':
        this.resultado = 'Seiscientos treinta y nueve';
        break;
      case '640':
        this.resultado = 'Seiscientos cuarenta';
        break;
      case '641':
        this.resultado = 'Seiscientos cuarenta y uno';
        break;
      case '642':
        this.resultado = 'Seiscientos cuarenta y dos';
        break;
      case '643':
        this.resultado = 'Seiscientos cuarenta y tres';
        break;
      case '644':
        this.resultado = 'Seiscientos cuarenta y cuatro';
        break;
      case '645':
        this.resultado = 'Seiscientos cuarenta y cinco';
        break;
      case '646':
        this.resultado = 'Seiscientos cuarenta y seis';
        break;
      case '647':
        this.resultado = 'Seiscientos cuarenta y siete';
        break;
      case '648':
        this.resultado = 'Seiscientos cuarenta y ocho';
        break;
      case '649':
        this.resultado = 'Seiscientos cuarenta y nueve';
        break;
      case '650':
        this.resultado = 'Seiscientos cincuenta';
        break;
      case '651':
        this.resultado = 'Seiscientos cincuenta y uno';
        break;
      case '652':
        this.resultado = 'Seiscientos cincuenta y dos';
        break;
      case '653':
        this.resultado = 'Seiscientos cincuenta y tres';
        break;
      case '654':
        this.resultado = 'Seiscientos cincuenta y cuatro';
        break;
      case '655':
        this.resultado = 'Seiscientos cincuenta y cinco';
        break;
      case '656':
        this.resultado = 'Seiscientos cincuenta y seis';
        break;
      case '657':
        this.resultado = 'Seiscientos cincuenta y siete';
        break;
      case '658':
        this.resultado = 'Seiscientos cincuenta y ocho';
        break;
      case '659':
        this.resultado = 'Seiscientos cincuenta y nueve';
        break;
      case '660':
        this.resultado = 'Seiscientos sesenta';
        break;
      case '661':
        this.resultado = 'Seiscientos sesenta y uno';
        break;
      case '662':
        this.resultado = 'Seiscientos sesenta y dos';
        break;
      case '663':
        this.resultado = 'Seiscientos sesenta y tres';
        break;
      case '664':
        this.resultado = 'Seiscientos sesenta y cuatro';
        break;
      case '665':
        this.resultado = 'Seiscientos sesenta y cinco';
        break;
      case '666':
        this.resultado = 'Seiscientos sesenta y seis';
        break;
      case '667':
        this.resultado = 'Seiscientos sesenta y siete';
        break;
      case '668':
        this.resultado = 'Seiscientos sesenta y ocho';
        break;
      case '669':
        this.resultado = 'Seiscientos sesenta y nueve';
        break;
      case '670':
        this.resultado = 'Seiscientos setenta';
        break;
      case '671':
        this.resultado = 'Seiscientos setenta y uno';
        break;
      case '672':
        this.resultado = 'Seiscientos setenta y dos';
        break;
      case '673':
        this.resultado = 'Seiscientos setenta y tres';
        break;
      case '674':
        this.resultado = 'Seiscientos setenta y cuatro';
        break;
      case '675':
        this.resultado = 'Seiscientos setenta y cinco';
        break;
      case '676':
        this.resultado = 'Seiscientos setenta y seis';
        break;
      case '677':
        this.resultado = 'Seiscientos setenta y siete';
        break;
      case '678':
        this.resultado = 'Seiscientos setenta y ocho';
        break;
      case '679':
        this.resultado = 'Seiscientos setenta y nueve';
        break;
      case '680':
        this.resultado = 'Seiscientos ochenta';
        break;
      case '681':
        this.resultado = 'Seiscientos ochenta y uno';
        break;
      case '682':
        this.resultado = 'Seiscientos ochenta y dos';
        break;
      case '683':
        this.resultado = 'Seiscientos ochenta y tres';
        break;
      case '684':
        this.resultado = 'Seiscientos ochenta y cuatro';
        break;
      case '685':
        this.resultado = 'Seiscientos ochenta y cinco';
        break;
      case '686':
        this.resultado = 'Seiscientos ochenta y seis';
        break;
      case '687':
        this.resultado = 'Seiscientos ochenta y siete';
        break;
      case '688':
        this.resultado = 'Seiscientos ochenta y ocho';
        break;
      case '689':
        this.resultado = 'Seiscientos ochenta y nueve';
        break;
      case '690':
        this.resultado = 'Seiscientos noventa';
        break;
      case '691':
        this.resultado = 'Seiscientos noventa y uno';
        break;
      case '692':
        this.resultado = 'Seiscientos noventa y dos';
        break;
      case '693':
        this.resultado = 'Seiscientos noventa y tres';
        break;
      case '694':
        this.resultado = 'Seiscientos noventa y cuatro';
        break;
      case '695':
        this.resultado = 'Seiscientos noventa y cinco';
        break;
      case '696':
        this.resultado = 'Seiscientos noventa y seis';
        break;
      case '697':
        this.resultado = 'Seiscientos noventa y siete';
        break;
      case '698':
        this.resultado = 'Seiscientos noventa y ocho';
        break;
      case '699':
        this.resultado = 'Seiscientos noventa y nueve';
        break;
      case '700':
        this.resultado = 'Setecientos';
        break;
      case '701':
        this.resultado = 'Setecientos uno';
        break;
      case '702':
        this.resultado = 'Setecientos dos';
        break;
      case '703':
        this.resultado = 'Setecientos tres';
        break;
      case '704':
        this.resultado = 'Setecientos cuatro';
        break;
      case '705':
        this.resultado = 'Setecientos cinco';
        break;
      case '706':
        this.resultado = 'Setecientos seis';
        break;
      case '707':
        this.resultado = 'Setecientos siete';
        break;
      case '708':
        this.resultado = 'Setecientos ocho';
        break;
      case '709':
        this.resultado = 'Setecientos nueve';
        break;
      case '710':
        this.resultado = 'Setecientos diez';
        break;
      case '711':
        this.resultado = 'Setecientos once';
        break;
      case '712':
        this.resultado = 'Setecientos doce';
        break;
      case '713':
        this.resultado = 'Setecientos trece';
        break;
      case '714':
        this.resultado = 'Setecientos catorce';
        break;
      case '715':
        this.resultado = 'Setecientos quince';
        break;
      case '716':
        this.resultado = 'Setecientos dieciséis';
        break;
      case '717':
        this.resultado = 'Setecientos diecisiete';
        break;
      case '718':
        this.resultado = 'Setecientos dieciocho';
        break;
      case '719':
        this.resultado = 'Setecientos diecinueve';
        break;
      case '720':
        this.resultado = 'Setecientos veinte';
        break;
      case '721':
        this.resultado = 'Setecientos veintiuno';
        break;
      case '722':
        this.resultado = 'Setecientos veintidós';
        break;
      case '723':
        this.resultado = 'Setecientos veintitrés';
        break;
      case '724':
        this.resultado = 'Setecientos veinticuatro';
        break;
      case '725':
        this.resultado = 'Setecientos veinticinco';
        break;
      case '726':
        this.resultado = 'Setecientos veintiséis';
        break;
      case '727':
        this.resultado = 'Setecientos veintisiete';
        break;
      case '728':
        this.resultado = 'Setecientos veintiocho';
        break;
      case '729':
        this.resultado = 'Setecientos veintinueve';
        break;
      case '730':
        this.resultado = 'Setecientos treinta';
        break;
      case '731':
        this.resultado = 'Setecientos treinta y uno';
        break;
      case '732':
        this.resultado = 'Setecientos treinta y dos';
        break;
      case '733':
        this.resultado = 'Setecientos treinta y tres';
        break;
      case '734':
        this.resultado = 'Setecientos treinta y cuatro';
        break;
      case '735':
        this.resultado = 'Setecientos treinta y cinco';
        break;
      case '736':
        this.resultado = 'Setecientos treinta y seis';
        break;
      case '737':
        this.resultado = 'Setecientos treinta y siete';
        break;
      case '738':
        this.resultado = 'Setecientos treinta y ocho';
        break;
      case '739':
        this.resultado = 'Setecientos treinta y nueve';
        break;
      case '740':
        this.resultado = 'Setecientos cuarenta';
        break;
      case '741':
        this.resultado = 'Setecientos cuarenta y uno';
        break;
      case '742':
        this.resultado = 'Setecientos cuarenta y dos';
        break;
      case '743':
        this.resultado = 'Setecientos cuarenta y tres';
        break;
      case '744':
        this.resultado = 'Setecientos cuarenta y cuatro';
        break;
      case '745':
        this.resultado = 'Setecientos cuarenta y cinco';
        break;
      case '746':
        this.resultado = 'Setecientos cuarenta y seis';
        break;
      case '747':
        this.resultado = 'Setecientos cuarenta y siete';
        break;
      case '748':
        this.resultado = 'Setecientos cuarenta y ocho';
        break;
      case '749':
        this.resultado = 'Setecientos cuarenta y nueve';
        break;
      case '750':
        this.resultado = 'Setecientos cincuenta';
        break;
      case '751':
        this.resultado = 'Setecientos cincuenta y uno';
        break;
      case '752':
        this.resultado = 'Setecientos cincuenta y dos';
        break;
      case '753':
        this.resultado = 'Setecientos cincuenta y tres';
        break;
      case '754':
        this.resultado = 'Setecientos cincuenta y cuatro';
        break;
      case '755':
        this.resultado = 'Setecientos cincuenta y cinco';
        break;
      case '756':
        this.resultado = 'Setecientos cincuenta y seis';
        break;
      case '757':
        this.resultado = 'Setecientos cincuenta y siete';
        break;
      case '758':
        this.resultado = 'Setecientos cincuenta y ocho';
        break;
      case '759':
        this.resultado = 'Setecientos cincuenta y nueve';
        break;
      case '760':
        this.resultado = 'Setecientos sesenta';
        break;
      case '761':
        this.resultado = 'Setecientos sesenta y uno';
        break;
      case '762':
        this.resultado = 'Setecientos sesenta y dos';
        break;
      case '763':
        this.resultado = 'Setecientos sesenta y tres';
        break;
      case '764':
        this.resultado = 'Setecientos sesenta y cuatro';
        break;
      case '765':
        this.resultado = 'Setecientos sesenta y cinco';
        break;
      case '766':
        this.resultado = 'Setecientos sesenta y seis';
        break;
      case '767':
        this.resultado = 'Setecientos sesenta y siete';
        break;
      case '768':
        this.resultado = 'Setecientos sesenta y ocho';
        break;
      case '769':
        this.resultado = 'Setecientos sesenta y nueve';
        break;
      case '770':
        this.resultado = 'Setecientos setenta';
        break;
      case '771':
        this.resultado = 'Setecientos setenta y uno';
        break;
      case '772':
        this.resultado = 'Setecientos setenta y dos';
        break;
      case '773':
        this.resultado = 'Setecientos setenta y tres';
        break;
      case '774':
        this.resultado = 'Setecientos setenta y cuatro';
        break;
      case '775':
        this.resultado = 'Setecientos setenta y cinco';
        break;
      case '776':
        this.resultado = 'Setecientos setenta y seis';
        break;
      case '777':
        this.resultado = 'Setecientos setenta y siete';
        break;
      case '778':
        this.resultado = 'Setecientos setenta y ocho';
        break;
      case '779':
        this.resultado = 'Setecientos setenta y nueve';
        break;
      case '780':
        this.resultado = 'Setecientos ochenta';
        break;
      case '781':
        this.resultado = 'Setecientos ochenta y uno';
        break;
      case '782':
        this.resultado = 'Setecientos ochenta y dos';
        break;
      case '783':
        this.resultado = 'Setecientos ochenta y tres';
        break;
      case '784':
        this.resultado = 'Setecientos ochenta y cuatro';
        break;
      case '785':
        this.resultado = 'Setecientos ochenta y cinco';
        break;
      case '786':
        this.resultado = 'Setecientos ochenta y seis';
        break;
      case '787':
        this.resultado = 'Setecientos ochenta y siete';
        break;
      case '788':
        this.resultado = 'Setecientos ochenta y ocho';
        break;
      case '789':
        this.resultado = 'Setecientos ochenta y nueve';
        break;
      case '790':
        this.resultado = 'Setecientos noventa';
        break;
      case '791':
        this.resultado = 'Setecientos noventa y uno';
        break;
      case '792':
        this.resultado = 'Setecientos noventa y dos';
        break;
      case '793':
        this.resultado = 'Setecientos noventa y tres';
        break;
      case '794':
        this.resultado = 'Setecientos noventa y cuatro';
        break;
      case '795':
        this.resultado = 'Setecientos noventa y cinco';
        break;
      case '796':
        this.resultado = 'Setecientos noventa y seis';
        break;
      case '797':
        this.resultado = 'Setecientos noventa y siete';
        break;
      case '798':
        this.resultado = 'Setecientos noventa y ocho';
        break;
      case '799':
        this.resultado = 'Setecientos noventa y nueve';
        break;
      case '800':
        this.resultado = 'Ochocientos';
        break;
      case '801':
        this.resultado = 'Ochocientos uno';
        break;
      case '802':
        this.resultado = 'Ochocientos dos';
        break;
      case '803':
        this.resultado = 'Ochocientos tres';
        break;
      case '804':
        this.resultado = 'Ochocientos cuatro';
        break;
      case '805':
        this.resultado = 'Ochocientos cinco';
        break;
      case '806':
        this.resultado = 'Ochocientos seis';
        break;
      case '807':
        this.resultado = 'Ochocientos siete';
        break;
      case '808':
        this.resultado = 'Ochocientos ocho';
        break;
      case '809':
        this.resultado = 'Ochocientos nueve';
        break;
      case '810':
        this.resultado = 'Ochocientos diez';
        break;
      case '811':
        this.resultado = 'Ochocientos once';
        break;
      case '812':
        this.resultado = 'Ochocientos doce';
        break;
      case '813':
        this.resultado = 'Ochocientos trece';
        break;
      case '814':
        this.resultado = 'Ochocientos catorce';
        break;
      case '815':
        this.resultado = 'Ochocientos quince';
        break;
      case '816':
        this.resultado = 'Ochocientos dieciséis';
        break;
      case '817':
        this.resultado = 'Ochocientos diecisiete';
        break;
      case '818':
        this.resultado = 'Ochocientos dieciocho';
        break;
      case '819':
        this.resultado = 'Ochocientos diecinueve';
        break;
      case '820':
        this.resultado = 'Ochocientos veinte';
        break;
      case '821':
        this.resultado = 'Ochocientos veintiuno';
        break;
      case '822':
        this.resultado = 'Ochocientos veintidós';
        break;
      case '823':
        this.resultado = 'Ochocientos veintitrés';
        break;
      case '824':
        this.resultado = 'Ochocientos veinticuatro';
        break;
      case '825':
        this.resultado = 'Ochocientos veinticinco';
        break;
      case '826':
        this.resultado = 'Ochocientos veintiséis';
        break;
      case '827':
        this.resultado = 'Ochocientos veintisiete';
        break;
      case '828':
        this.resultado = 'Ochocientos veintiocho';
        break;
      case '829':
        this.resultado = 'Ochocientos veintinueve';
        break;
      case '830':
        this.resultado = 'Ochocientos treinta';
        break;
      case '831':
        this.resultado = 'Ochocientos treinta y uno';
        break;
      case '832':
        this.resultado = 'Ochocientos treinta y dos';
        break;
      case '833':
        this.resultado = 'Ochocientos treinta y tres';
        break;
      case '834':
        this.resultado = 'Ochocientos treinta y cuatro';
        break;
      case '835':
        this.resultado = 'Ochocientos treinta y cinco';
        break;
      case '836':
        this.resultado = 'Ochocientos treinta y seis';
        break;
      case '837':
        this.resultado = 'Ochocientos treinta y siete';
        break;
      case '838':
        this.resultado = 'Ochocientos treinta y ocho';
        break;
      case '839':
        this.resultado = 'Ochocientos treinta y nueve';
        break;
      case '840':
        this.resultado = 'Ochocientos cuarenta';
        break;
      case '841':
        this.resultado = 'Ochocientos cuarenta y uno';
        break;
      case '842':
        this.resultado = 'Ochocientos cuarenta y dos';
        break;
      case '843':
        this.resultado = 'Ochocientos cuarenta y tres';
        break;
      case '844':
        this.resultado = 'Ochocientos cuarenta y cuatro';
        break;
      case '845':
        this.resultado = 'Ochocientos cuarenta y cinco';
        break;
      case '846':
        this.resultado = 'Ochocientos cuarenta y seis';
        break;
      case '847':
        this.resultado = 'Ochocientos cuarenta y siete';
        break;
      case '848':
        this.resultado = 'Ochocientos cuarenta y ocho';
        break;
      case '849':
        this.resultado = 'Ochocientos cuarenta y nueve';
        break;
      case '850':
        this.resultado = 'Ochocientos cincuenta';
        break;
      case '851':
        this.resultado = 'Ochocientos cincuenta y uno';
        break;
      case '852':
        this.resultado = 'Ochocientos cincuenta y dos';
        break;
      case '853':
        this.resultado = 'Ochocientos cincuenta y tres';
        break;
      case '854':
        this.resultado = 'Ochocientos cincuenta y cuatro';
        break;
      case '855':
        this.resultado = 'Ochocientos cincuenta y cinco';
        break;
      case '856':
        this.resultado = 'Ochocientos cincuenta y seis';
        break;
      case '857':
        this.resultado = 'Ochocientos cincuenta y siete';
        break;
      case '858':
        this.resultado = 'Ochocientos cincuenta y ocho';
        break;
      case '859':
        this.resultado = 'Ochocientos cincuenta y nueve';
        break;
      case '860':
        this.resultado = 'Ochocientos sesenta';
        break;
      case '861':
        this.resultado = 'Ochocientos sesenta y uno';
        break;
      case '862':
        this.resultado = 'Ochocientos sesenta y dos';
        break;
      case '863':
        this.resultado = 'Ochocientos sesenta y tres';
        break;
      case '864':
        this.resultado = 'Ochocientos sesenta y cuatro';
        break;
      case '865':
        this.resultado = 'Ochocientos sesenta y cinco';
        break;
      case '866':
        this.resultado = 'Ochocientos sesenta y seis';
        break;
      case '867':
        this.resultado = 'Ochocientos sesenta y siete';
        break;
      case '868':
        this.resultado = 'Ochocientos sesenta y ocho';
        break;
      case '869':
        this.resultado = 'Ochocientos sesenta y nueve';
        break;
      case '870':
        this.resultado = 'Ochocientos setenta';
        break;
      case '871':
        this.resultado = 'Ochocientos setenta y uno';
        break;
      case '872':
        this.resultado = 'Ochocientos setenta y dos';
        break;
      case '873':
        this.resultado = 'Ochocientos setenta y tres';
        break;
      case '874':
        this.resultado = 'Ochocientos setenta y cuatro';
        break;
      case '875':
        this.resultado = 'Ochocientos setenta y cinco';
        break;
      case '876':
        this.resultado = 'Ochocientos setenta y seis';
        break;
      case '877':
        this.resultado = 'Ochocientos setenta y siete';
        break;
      case '878':
        this.resultado = 'Ochocientos setenta y ocho';
        break;
      case '879':
        this.resultado = 'Ochocientos setenta y nueve';
        break;
      case '880':
        this.resultado = 'Ochocientos ochenta';
        break;
      case '881':
        this.resultado = 'Ochocientos ochenta y uno';
        break;
      case '882':
        this.resultado = 'Ochocientos ochenta y dos';
        break;
      case '883':
        this.resultado = 'Ochocientos ochenta y tres';
        break;
      case '884':
        this.resultado = 'Ochocientos ochenta y cuatro';
        break;
      case '885':
        this.resultado = 'Ochocientos ochenta y cinco';
        break;
      case '886':
        this.resultado = 'Ochocientos ochenta y seis';
        break;
      case '887':
        this.resultado = 'Ochocientos ochenta y siete';
        break;
      case '888':
        this.resultado = 'Ochocientos ochenta y ocho';
        break;
      case '889':
        this.resultado = 'Ochocientos ochenta y nueve';
        break;
      case '890':
        this.resultado = 'Ochocientos noventa';
        break;
      case '891':
        this.resultado = 'Ochocientos noventa y uno';
        break;
      case '892':
        this.resultado = 'Ochocientos noventa y dos';
        break;
      case '893':
        this.resultado = 'Ochocientos noventa y tres';
        break;
      case '894':
        this.resultado = 'Ochocientos noventa y cuatro';
        break;
      case '895':
        this.resultado = 'Ochocientos noventa y cinco';
        break;
      case '896':
        this.resultado = 'Ochocientos noventa y seis';
        break;
      case '897':
        this.resultado = 'Ochocientos noventa y siete';
        break;
      case '898':
        this.resultado = 'Ochocientos noventa y ocho';
        break;
      case '899':
        this.resultado = 'Ochocientos noventa y nueve';
        break;
      case '900':
        this.resultado = 'Novecientos';
        break;
      case '901':
        this.resultado = 'Novecientos uno';
        break;
      case '902':
        this.resultado = 'Novecientos dos';
        break;
      case '903':
        this.resultado = 'Novecientos tres';
        break;
      case '904':
        this.resultado = 'Novecientos cuatro';
        break;
      case '905':
        this.resultado = 'Novecientos cinco';
        break;
      case '906':
        this.resultado = 'Novecientos seis';
        break;
      case '907':
        this.resultado = 'Novecientos siete';
        break;
      case '908':
        this.resultado = 'Novecientos ocho';
        break;
      case '909':
        this.resultado = 'Novecientos nueve';
        break;
      case '910':
        this.resultado = 'Novecientos diez';
        break;
      case '911':
        this.resultado = 'Novecientos once';
        break;
      case '912':
        this.resultado = 'Novecientos doce';
        break;
      case '913':
        this.resultado = 'Novecientos trece';
        break;
      case '914':
        this.resultado = 'Novecientos catorce';
        break;
      case '915':
        this.resultado = 'Novecientos quince';
        break;
      case '916':
        this.resultado = 'Novecientos dieciséis';
        break;
      case '917':
        this.resultado = 'Novecientos diecisiete';
        break;
      case '918':
        this.resultado = 'Novecientos dieciocho';
        break;
      case '919':
        this.resultado = 'Novecientos diecinueve';
        break;
      case '920':
        this.resultado = 'Novecientos veinte';
        break;
      case '921':
        this.resultado = 'Novecientos veintiuno';
        break;
      case '922':
        this.resultado = 'Novecientos veintidós';
        break;
      case '923':
        this.resultado = 'Novecientos veintitrés';
        break;
      case '924':
        this.resultado = 'Novecientos veinticuatro';
        break;
      case '925':
        this.resultado = 'Novecientos veinticinco';
        break;
      case '926':
        this.resultado = 'Novecientos veintiséis';
        break;
      case '927':
        this.resultado = 'Novecientos veintisiete';
        break;
      case '928':
        this.resultado = 'Novecientos veintiocho';
        break;
      case '929':
        this.resultado = 'Novecientos veintinueve';
        break;
      case '930':
        this.resultado = 'Novecientos treinta';
        break;
      case '931':
        this.resultado = 'Novecientos treinta y uno';
        break;
      case '932':
        this.resultado = 'Novecientos treinta y dos';
        break;
      case '933':
        this.resultado = 'Novecientos treinta y tres';
        break;
      case '934':
        this.resultado = 'Novecientos treinta y cuatro';
        break;
      case '935':
        this.resultado = 'Novecientos treinta y cinco';
        break;
      case '936':
        this.resultado = 'Novecientos treinta y seis';
        break;
      case '937':
        this.resultado = 'Novecientos treinta y siete';
        break;
      case '938':
        this.resultado = 'Novecientos treinta y ocho';
        break;
      case '939':
        this.resultado = 'Novecientos treinta y nueve';
        break;
      case '940':
        this.resultado = 'Novecientos cuarenta';
        break;
      case '941':
        this.resultado = 'Novecientos cuarenta y uno';
        break;
      case '942':
        this.resultado = 'Novecientos cuarenta y dos';
        break;
      case '943':
        this.resultado = 'Novecientos cuarenta y tres';
        break;
      case '944':
        this.resultado = 'Novecientos cuarenta y cuatro';
        break;
      case '945':
        this.resultado = 'Novecientos cuarenta y cinco';
        break;
      case '946':
        this.resultado = 'Novecientos cuarenta y seis';
        break;
      case '947':
        this.resultado = 'Novecientos cuarenta y siete';
        break;
      case '948':
        this.resultado = 'Novecientos cuarenta y ocho';
        break;
      case '949':
        this.resultado = 'Novecientos cuarenta y nueve';
        break;
      case '950':
        this.resultado = 'Novecientos cincuenta';
        break;
      case '951':
        this.resultado = 'Novecientos cincuenta y uno';
        break;
      case '952':
        this.resultado = 'Novecientos cincuenta y dos';
        break;
      case '953':
        this.resultado = 'Novecientos cincuenta y tres';
        break;
      case '954':
        this.resultado = 'Novecientos cincuenta y cuatro';
        break;
      case '955':
        this.resultado = 'Novecientos cincuenta y cinco';
        break;
      case '956':
        this.resultado = 'Novecientos cincuenta y seis';
        break;
      case '957':
        this.resultado = 'Novecientos cincuenta y siete';
        break;
      case '958':
        this.resultado = 'Novecientos cincuenta y ocho';
        break;
      case '959':
        this.resultado = 'Novecientos cincuenta y nueve';
        break;
      case '960':
        this.resultado = 'Novecientos sesenta';
        break;
      case '961':
        this.resultado = 'Novecientos sesenta y uno';
        break;
      case '962':
        this.resultado = 'Novecientos sesenta y dos';
        break;
      case '963':
        this.resultado = 'Novecientos sesenta y tres';
        break;
      case '964':
        this.resultado = 'Novecientos sesenta y cuatro';
        break;
      case '965':
        this.resultado = 'Novecientos sesenta y cinco';
        break;
      case '966':
        this.resultado = 'Novecientos sesenta y seis';
        break;
      case '967':
        this.resultado = 'Novecientos sesenta y siete';
        break;
      case '968':
        this.resultado = 'Novecientos sesenta y ocho';
        break;
      case '969':
        this.resultado = 'Novecientos sesenta y nueve';
        break;
      case '970':
        this.resultado = 'Novecientos setenta';
        break;
      case '971':
        this.resultado = 'Novecientos setenta y uno';
        break;
      case '972':
        this.resultado = 'Novecientos setenta y dos';
        break;
      case '973':
        this.resultado = 'Novecientos setenta y tres';
        break;
      case '974':
        this.resultado = 'Novecientos setenta y cuatro';
        break;
      case '975':
        this.resultado = 'Novecientos setenta y cinco';
        break;
      case '976':
        this.resultado = 'Novecientos setenta y seis';
        break;
      case '977':
        this.resultado = 'Novecientos setenta y siete';
        break;
      case '978':
        this.resultado = 'Novecientos setenta y ocho';
        break;
      case '979':
        this.resultado = 'Novecientos setenta y nueve';
        break;
      case '980':
        this.resultado = 'Novecientos ochenta';
        break;
      case '981':
        this.resultado = 'Novecientos ochenta y uno';
        break;
      case '982':
        this.resultado = 'Novecientos ochenta y dos';
        break;
      case '983':
        this.resultado = 'Novecientos ochenta y tres';
        break;
      case '984':
        this.resultado = 'Novecientos ochenta y cuatro';
        break;
      case '985':
        this.resultado = 'Novecientos ochenta y cinco';
        break;
      case '986':
        this.resultado = 'Novecientos ochenta y seis';
        break;
      case '987':
        this.resultado = 'Novecientos ochenta y siete';
        break;
      case '988':
        this.resultado = 'Novecientos ochenta y ocho';
        break;
      case '989':
        this.resultado = 'Novecientos ochenta y nueve';
        break;
      case '990':
        this.resultado = 'Novecientos noventa';
        break;
      case '991':
        this.resultado = 'Novecientos noventa y uno';
        break;
      case '992':
        this.resultado = 'Novecientos noventa y dos';
        break;
      case '993':
        this.resultado = 'Novecientos noventa y tres';
        break;
      case '994':
        this.resultado = 'Novecientos noventa y cuatro';
        break;
      case '995':
        this.resultado = 'Novecientos noventa y cinco';
        break;
      case '996':
        this.resultado = 'Novecientos noventa y seis';
        break;
      case '997':
        this.resultado = 'Novecientos noventa y siete';
        break;
      case '998':
        this.resultado = 'Novecientos noventa y ocho';
        break;
      case '999':
        this.resultado = 'Novecientos noventa y nueve';
        break;
      case '1000':
        this.resultado = 'Mil';
        break;

      default:
        this.resultado = 'Número muy grande, xd';
    }
  }

  ngOnInit() {}
}
