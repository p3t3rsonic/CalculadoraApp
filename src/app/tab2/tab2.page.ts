import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  public calculo = '';
  public resultado: string;

  public ponto = false;

   constructor(){}

   adicionarNumero(valor: string){

    this.calculo = this.calculo + valor;
   }

   adicionarPonto(){
     if (this.ponto){
       return;
     }
     this.calculo = this.calculo + ".";
     this.ponto = true;
   }

   adicionarOp(op: string){
     this.calculo = this.calculo + op;
    }

    public limparTudo(){
      this.calculo = '';
      this.resultado = null;
      this.ponto = false;
    }

    public limparUlt(){
      const ult = this.calculo.slice(-1);
      if (ult == '.'){
        this.ponto=false;
      }
      this.calculo = this.calculo.slice(0, -1);
    }

    public calcRes(){
      try{
        this.resultado = evaluate(this.calculo);
      }catch (e){
        this.resultado = '';
      }

    }

}
