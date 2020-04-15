export class BitacoraEntity {
    Id?: number;
    OperadorId?:number;
    TractoId?: number;
    Folio?: string;
    FechaCaptura?: string;
    OrigenId?: number;
    DestinoId?:number;
    Descripcion?: string;
    Gasto?: number;
    TipoMercancia?:string;
    Toneladas?: number;
    NoControl?: string;
    EstatusBitacora?: string;
    CostoFlete?: number;
    PagoChofer?: number;
    Costos?: any[];
    Viaticos?:any[];
    Repartos?:any[];
  }