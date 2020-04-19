import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Class } from './models/Class';
import { Person } from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'BootstrapFormsAndValidation';
  uf: Array<string> = ["AC","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS",
  "MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
  turmas: Array<Class> = [
    new Class("LPWEB","0720"),
    new Class("IA","0420"),
    new Class("SI","0219"),
    new Class("TS","0121")
  ];
  students: Array<Person> = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ])],
      birth: ['', Validators.required],
      sex: ['', Validators.required],
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
      ])],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required,
      ])],
      phone: ['', Validators.required],
      address: ['', Validators.compose([
        Validators.required,
        Validators.minLength(30),
      ])],
      cep: ['', Validators.required],
      uf: ['', Validators.required],
      city: ['', Validators.required],
      turmas: [{value: '', disabled: true}, Validators.required],
      documentsValid: [false, Validators.required]
    });
  }

  save(){
    if (this.form.invalid) return;
    const { name, birth, sex, cpf, email, phone, address, cep, uf, city, turmas, documentsValid } = this.form.value;
    this.students.push(
      new Person(name, birth, sex, cpf, email, phone, address, cep, uf, city, turmas, documentsValid)
    );
  }

  onReset() {
    this.form.reset({
      documentsValid: false,
    });
  }

  public calcAge(date: string) {
    const [y, m, d] = date.split('-');
    const currentDate = new Date();
    const age = currentDate.getFullYear() - parseInt(y);
    if (currentDate.getMonth() >= parseInt(m)) return age;
    return age -1;
  }

  public enableOrDisable() {
    const fieldTurma = this.form.controls["turmas"];

    if (!this.form.controls["documentsValid"].value) {
      fieldTurma.enable();
      return;
    }
    fieldTurma.disable()
  }
}
