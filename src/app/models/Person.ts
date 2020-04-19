import { Class } from "./Class";

export class Person {
    name: string;
    birth: Date;
    sex: string;
    cpf: number;
    email: string;
    phone: number;
    address: string;
    cep: number;
    uf: string;
    city: string;
    turmas: Array<Class>;
    documentsValid: boolean;

    constructor(
        name: string,
        birth: Date,
        sex: string,
        cpf: number,
        email: string,
        phone: number,
        address: string,
        cep: number,
        uf: string,
        city: string,
        turmas: Array<Class>,
        documentsValid: boolean = false
    ){
        this.name = name;
        this.birth = birth;
        this.sex = sex;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.cep = cep;
        this.uf = uf;
        this.city = city;
        this.turmas = turmas;
        this.documentsValid = documentsValid;
    }
}
