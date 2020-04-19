import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BootstrapFormsAndValidation';
  uf=["AC","AC","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]
  turmas=["0720- LPweb","0420- Inteligencial Artificial","0219- Sistemas de Informação I","0121- Teste de Software"]
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
