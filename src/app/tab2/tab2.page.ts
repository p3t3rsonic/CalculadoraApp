import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  public calculo = '';
  public resultado: string;

   constructor(){}

   adicionarNumero(valor: string){

    this.calculo = this.calculo + valor;
   }

   adicionarPonto(){
     this.calculo = this.calculo + ".";
   }

   adicionarOp(op: string){
     this.calculo = this.calculo + op;
    }

}
