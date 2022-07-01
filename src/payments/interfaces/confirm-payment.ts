// Generated by https://quicktype.io

export interface WompiWebhookBody {
  IdCuenta: string;
  FechaTransaccion: string;
  Monto: number;
  ModuloUtilizado: string;
  FormaPagoUtilizada: string;
  IdTransaccion: string;
  ResultadoTransaccion: string;
  CodigoAutorizacion: string;
  IdIntentoPago: string;
  Cantidad: number;
  EsProductiva: boolean;
  Aplicativo: Aplicativo;
  EnlacePago: EnlacePago;
  cliente: Cliente;
}

export interface Aplicativo {
  Nombre: string;
  Url: string;
  Id: string;
}

export interface EnlacePago {
  Id: number;
  IdentificadorEnlaceComercio: string;
  NombreProducto: string;
}

export interface Cliente {
  Nombre: string;
  Email: string;
  additionalProp1: string;
  additionalProp2: string;
}
