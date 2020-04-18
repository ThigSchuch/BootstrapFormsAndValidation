import { Class } from "./Class";

export class Person{
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
    class: Array<Class>;
    documentsValid: boolean;
}