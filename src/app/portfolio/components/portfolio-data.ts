export type PortfolioCategory =
  | "Sites institucionais"
  | "Landing pages"
  | "Aplicativos e delivery"
  | "Gestão de tráfego";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  segment: string;
  description: string;
  image: string;
  link?: string;
  services: string[];
}

function createProjects(
  category: PortfolioCategory,
  segment: string,
  services: string[],
  projects: { id: string; title: string; image: string; link?: string }[]
): PortfolioItem[] {
  return projects.map(project => ({
    ...project,
    category,
    segment,
    services,
    description: `Projeto desenvolvido para o segmento de ${segment.toLowerCase()}, com foco em presença digital, apresentação dos serviços e experiência de navegação.`,
  }));
}

export const portfolioItems: PortfolioItem[] = [
  // SITES INSTITUCIONAIS — CONSTRUÇÃO E ESQUADRIAS
  ...createProjects(
    "Sites institucionais",
    "Construção, vidraçaria e esquadrias",
    ["Desenvolvimento web", "Design responsivo"],
    [
      {
        id: "vidrosa",
        title: "Vidrosa",
        image: "/assets/images/vidrosa-site.webp",
      },
      {
        id: "wm-esquadrias",
        title: "WM Esquadrias e Vidros",
        image: "/assets/images/wmaesquadriasevidros.webp",
      },
      {
        id: "bn-esquadrias",
        title: "BN Esquadrias",
        image: "/assets/images/bnesquadrias-site.webp",
      },
      {
        id: "new-formes",
        title: "New Formes",
        image: "/assets/images/newformesquadrias-site.webp",
      },
      {
        id: "gm-glass",
        title: "GM Glass",
        image: "/assets/images/gmglass-site.webp",
      },
      {
        id: "jc-esquadrias",
        title: "JC Esquadrias MG",
        image: "/assets/images/jc-esquadrias-site.webp",
      },
      {
        id: "wedson-construcoes",
        title: "Wedson Construções",
        image: "/assets/images/wedsonconstrucoes-site.webp",
      },
      {
        id: "fce-serralheria-deluxe",
        title: "FCE Serralheria Deluxe",
        image: "/assets/images/fce-serralheria-2.webp",
      },
      {
        id: "fce-serralheria",
        title: "FCE Serralheria",
        image: "/assets/images/fce-serralheria-1.webp",
      },
    ]
  ),

  // SITES INSTITUCIONAIS — NEGÓCIOS LOCAIS
  ...createProjects(
    "Sites institucionais",
    "Empresas e negócios locais",
    ["Desenvolvimento web", "Design responsivo"],
    [
      {
        id: "angela-modas",
        title: "Angela Modas",
        image: "/assets/images/angelamodas-site.webp",
      },
      {
        id: "hr-eletronicos",
        title: "HR Eletrônicos",
        image: "/assets/images/hreletronicos-site.webp",
      },
      {
        id: "dnb-luxembourg",
        title: "DNB Luxembourg",
        image: "/assets/images/dbnluxembourg-site.webp",
      },
      {
        id: "international-car",
        title: "International Car Services",
        image: "/assets/images/international-car-services-site.webp",
      },
      {
        id: "dll-group",
        title: "DLL Group",
        image: "/assets/images/dllgroup-site.webp",
      },
      {
        id: "diniz-transportes",
        title: "Diniz Transportes",
        image: "/assets/images/diniztransportes-site.webp",
      },
      {
        id: "harmonia-psicanalitica",
        title: "Harmonia Psicanalítica",
        image: "/assets/images/harmoniapsicanalitica-site.webp",
      },
      {
        id: "kennoa-beauty",
        title: "Kennoa Beauty",
        image: "/assets/images/kennoa-beauty-site.webp",
      },
      {
        id: "ferias-dos-sonhos",
        title: "Férias dos Sonhos",
        image: "/assets/images/feriasdossonhos-site.webp",
      },
      {
        id: "gran-mais-natural",
        title: "Gran Mais Natural",
        image: "/assets/images/grannatural-site.webp",
      },
      {
        id: "disk-filtro",
        title: "Disk Filtro",
        image: "/assets/images/diskfiltro-site.webp",
      },
      {
        id: "eu-arrumo",
        title: "Eu Arrumo",
        image: "/assets/images/euarrumo.webp",
      },
    ]
  ),

  // SITES PARA PROVEDORES
  ...createProjects(
    "Sites institucionais",
    "Provedores de internet e telecomunicações",
    ["Desenvolvimento web", "Design responsivo"],
    [
      {
        id: "fujitel",
        title: "Fujitel",
        image: "/assets/images/fujitel-site.webp",
      },
      {
        id: "vital-servicos",
        title: "Vital Serviços Telecom",
        image: "/assets/images/vitalservicos-site.webp",
      },
      {
        id: "soares-fibra",
        title: "Soares Fibra",
        image: "/assets/images/soaresfibra-site.webp",
      },
      {
        id: "fc-telecom",
        title: "FC Telecom",
        image: "/assets/images/fc-telecom-site.webp",
      },
      {
        id: "tf-telecom",
        title: "TF Telecom",
        image: "/assets/images/tftelecom-site.webp",
      },
    ]
  ),

  // LANDING PAGES
  ...createProjects(
    "Landing pages",
    "Vendas, infoprodutos e captação de clientes",
    ["Landing page", "Design responsivo", "Estrutura comercial"],
    [
      {
        id: "resistencia-cavalar",
        title: "Resistência Cavalar",
        image: "/assets/images/resistencia-cavalar-site.webp",
      },
      {
        id: "amanda-pas",
        title: "Amanda Pas",
        image: "/assets/images/amandapas-site.webp",
      },
      {
        id: "lipo-training",
        title: "Lipo Training",
        image: "/assets/images/lipotraining-site.webp",
      },
      {
        id: "pai-dos-estofados",
        title: "Pai dos Estofados",
        image: "/assets/images/paidosestofados-site.webp",
      },
      {
        id: "fature-1k",
        title: "Fature 1K",
        image: "/assets/images/karinaferraira-site.webp",
      },
      {
        id: "sissi-bolinhos",
        title: "Sissi Bolinhos",
        image: "/assets/images/sissi-bolinhos.webp",
      },
      {
        id: "clicks-chat",
        title: "Clicks Chat",
        image: "/assets/images/clickschat-site.webp",
      },
      {
        id: "clube-psicopedagogos",
        title: "Clube dos Psicopedagogos",
        image: "/assets/images/clubedospsicopedagogos-site.webp",
      },
    ]
  ),

  // APLICATIVOS E DELIVERY
  ...createProjects(
    "Aplicativos e delivery",
    "Alimentação, delivery e utilitários",
    ["Aplicação web", "Interface responsiva"],
    [
      {
        id: "ceara-delivery",
        title: "Ceará Burguer e Açaí",
        image: "/assets/images/cearaburugeracai-app.webp",
      },
      {
        id: "ceara-delivery-2",
        title: "Ceará Burguer e Açaí — Aplicativo",
        image: "/assets/images/cearaburgueracai-app-2.webp",
      },
      {
        id: "sergio-lanches",
        title: "Sergio Lanches Kazzau",
        image: "/assets/images/sergiolanches-links.webp",
      },
      {
        id: "linkcardflix",
        title: "LinkCardFlix",
        image: "/assets/images/linkcardflix-app.webp",
      },
    ]
  ),

  // GESTÃO DE TRÁFEGO — META ADS
  ...createProjects(
    "Gestão de tráfego",
    "Campanhas Meta Ads",
    ["Gestão de campanhas", "Facebook Ads", "Instagram Ads"],
    [
      {
        id: "meta-bn",
        title: "BN Esquadrias",
        image: "/assets/images/meta_ads_bnesquadrias.webp",
      },
      {
        id: "meta-clintin",
        title: "Clintin dos Sites",
        image: "/assets/images/meta_ads_clintin_dos_sites.webp",
      },
      {
        id: "meta-hr",
        title: "HR Eletrônicos",
        image: "/assets/images/meta_ads_hreletronicos.webp",
      },
      {
        id: "meta-newform",
        title: "New Form",
        image: "/assets/images/meta_ads_newform.webp",
      },
      {
        id: "meta-pizzaria",
        title: "Pizzaria Prazeres da Massa",
        image: "/assets/images/meta_ads_pizzaria_prazeres_da_massa.webp",
      },
      {
        id: "meta-retifica",
        title: "Retífica",
        image: "/assets/images/meta_ads_retifica.webp",
      },
      {
        id: "meta-telecom",
        title: "Telecomunicações",
        image: "/assets/images/meta_ads_telecom.webp",
      },
      {
        id: "meta-telecom-2",
        title: "Campanha Telecom 02",
        image: "/assets/images/meta_ads_telecom2.webp",
      },
      {
        id: "meta-telecom-3",
        title: "Campanha Telecom 03",
        image: "/assets/images/meta_ads_telecom3.webp",
      },
      {
        id: "meta-vidrosa",
        title: "Vidrosa",
        image: "/assets/images/meta_ads_vidrosa.webp",
      },
    ]
  ),

  // GESTÃO DE TRÁFEGO — GOOGLE ADS
  ...createProjects(
    "Gestão de tráfego",
    "Campanhas Google Ads",
    ["Gestão de campanhas", "Google Ads", "Rede de pesquisa"],
    [
      {
        id: "google-bn",
        title: "BN Esquadrias",
        image: "/assets/images/google_ads_bnesquadrias.webp",
      },
      {
        id: "google-jc",
        title: "JC Esquadrias",
        image: "/assets/images/google_ads_jcesquadrias.webp",
      },
      {
        id: "google-vidrosa",
        title: "Vidrosa",
        image: "/assets/images/google_ads_ vidrosa.webp",
      },
      {
        id: "google-newform",
        title: "New Form",
        image: "/assets/images/google_ads_newfom.webp",
      },
      {
        id: "google-wm",
        title: "WM Esquadrias",
        image: "/assets/images/google_ads_wmaesquadrias.webp",
      },
      {
        id: "google-print",
        title: "Campanha Google Ads",
        image: "/assets/images/google-print-2.png",
      },
    ]
  ),
];
