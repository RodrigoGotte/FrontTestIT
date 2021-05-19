export class Usuario{

    constructor(
      public idusuario: number,
      public nombre: string,
      public contraseña:string,
      public tipocarrito:number, 
      public Ultimacompra:Date,
      public acucompras:number 
      ) {}
  }
  