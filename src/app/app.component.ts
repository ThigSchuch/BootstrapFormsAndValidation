import { Class } from './models/Class';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BootstrapFormsAndValidation';
  uf = ["AC","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]
  turmas = [
    new Class("LPWEB","0720"),
    new Class("IA","0420"),
    new Class("SI","0219"),
    new Class("TS","0121")
  ]
  people = []
  name;
  birth;
  cpf;
  email;
  phone;
  endereco;
  estado;
  cep;
  cidade;
  turma;
  documentos=false;

  save(){
    console.log(this.documentos);
  }
  checkboxTrue(e){
    this.documentos=e.target.checked;
  
  }


}
