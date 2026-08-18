// Logos reales de clientes LPG — usados en el marquee de Home y en la grilla por sector de Clientes.

import logoCocaCola   from "../../assets/logos/coca-cola.svg";
import logoCorfi      from "../../assets/logos/corfi.svg";
import logoCajaSocial from "../../assets/logos/banco-caja-social.svg";
import logoUan        from "../../assets/logos/uan.svg";
import logoGrupoAval  from "../../assets/logos/grupo-aval.png";
import logoCcCali     from "../../assets/logos/camara-comercio-cali.svg";
import logoCamacol    from "../../assets/logos/camacol.png";
import logoCarvajal   from "../../assets/logos/carvajal.svg";
import logoColmena    from "../../assets/logos/colmena.png";
import logoEstelar    from "../../assets/logos/estelar.png";
import logoCasaDeBolsa            from "../../assets/logos/casa-de-bolsa.png";
import logoPromoambientalDistrito from "../../assets/logos/promoambiental-distrito.png";
import logoPromoCaliValle         from "../../assets/logos/promo-cali-valle.png";
import logoPacaribe               from "../../assets/logos/pacaribe.png";
import logoCentralColombianaAseo  from "../../assets/logos/central-colombiana-de-aseo.png";
import logoIstmoGreen             from "../../assets/logos/istmo-green.png";
import logoFundacionGrupoSocial   from "../../assets/logos/fundacion-grupo-social.svg";
import logoCamacolBogota          from "../../assets/logos/camacol-bogota.png";
import logoEmprenderPaz           from "../../assets/logos/emprender-paz.svg";
import logoExperienciasAval       from "../../assets/logos/experiencias-aval.png";
import logoCccs                   from "../../assets/logos/cccs.png";
import logoMuzo                   from "../../assets/logos/muzo.png";
import logoProindesa              from "../../assets/logos/proindesa.png";
import logoCovipacifico           from "../../assets/logos/covipacifico.png";
import logoProantioquia           from "../../assets/logos/proantioquia.png";
import logoPuertoAntioquia        from "../../assets/logos/puerto-antioquia.png";
import logoCoomeva                from "../../assets/logos/coomeva.png";
import logoCoomevaMedicina        from "../../assets/logos/coomeva-medicina-prepagada.png";
import logoClubCampestreCali      from "../../assets/logos/club-campestre-cali.png";
import logoIngeurbe               from "../../assets/logos/ingeurbe.png";
import logoFiduciariaCajaSocial   from "../../assets/logos/fiduciaria-caja-social.png";
import logoClubElNogal            from "../../assets/logos/club-el-nogal.png";
import logoBanasan                from "../../assets/logos/banasan.png";
import logoAcaire                 from "../../assets/logos/acaire.png";
import logoFundacionWwb           from "../../assets/logos/fundacion-wwb.png";
import logoInteractuar            from "../../assets/logos/interactuar.png";
import logoUniban                 from "../../assets/logos/uniban.png";
import logoPropacifico            from "../../assets/logos/propacifico.png";
import logoSerAmbiental           from "../../assets/logos/ser-ambiental.png";
import logoRedPro                 from "../../assets/logos/red-pro.png";
import logoPrisa                  from "../../assets/logos/prisa.png";

// Lista plana para el marquee del Home (orden = orden pedido por el cliente).
export const ALL_LOGOS = [
  logoCocaCola, logoCorfi, logoCajaSocial, logoUan, logoGrupoAval, logoCcCali, logoCamacol, logoCarvajal, logoColmena, logoEstelar,
  logoCasaDeBolsa, logoPromoambientalDistrito, logoPromoCaliValle, logoPacaribe, logoCentralColombianaAseo, logoIstmoGreen,
  logoFundacionGrupoSocial, logoCamacolBogota, logoEmprenderPaz, logoExperienciasAval, logoCccs, logoMuzo, logoProindesa,
  logoCovipacifico, logoProantioquia, logoPuertoAntioquia, logoCoomeva, logoCoomevaMedicina, logoClubCampestreCali,
  logoIngeurbe, logoFiduciariaCajaSocial, logoClubElNogal, logoBanasan, logoAcaire, logoFundacionWwb,
  logoInteractuar, logoUniban, logoPropacifico, logoSerAmbiental, logoRedPro, logoPrisa,
];

// Agrupados por sector para la página Clientes.
export const SECTOR_LOGOS = [
  {
    name: "Gobierno y Servicios Públicos",
    logos: [logoPromoambientalDistrito, logoPromoCaliValle, logoCentralColombianaAseo, logoIstmoGreen, logoSerAmbiental, logoPacaribe, logoFundacionGrupoSocial],
  },
  {
    name: "Finanzas y Banca",
    logos: [logoCorfi, logoGrupoAval, logoCasaDeBolsa, logoExperienciasAval, logoCajaSocial, logoFiduciariaCajaSocial, logoColmena],
  },
  {
    name: "Construcción e Infraestructura",
    logos: [logoCamacol, logoCamacolBogota, logoIngeurbe, logoPuertoAntioquia, logoCovipacifico, logoCccs, logoMuzo],
  },
  {
    name: "Consumo, Retail y Turismo",
    logos: [logoCocaCola, logoCarvajal, logoUniban, logoEstelar],
  },
  {
    name: "Gremios, Fundaciones y Academia",
    logos: [logoCcCali, logoProindesa, logoProantioquia, logoInteractuar, logoPropacifico, logoFundacionWwb, logoRedPro, logoEmprenderPaz, logoUan, logoBanasan, logoAcaire],
  },
  {
    name: "Salud, Clubes y Medios",
    logos: [logoCoomeva, logoCoomevaMedicina, logoClubCampestreCali, logoClubElNogal, logoPrisa],
  },
];
