import { Service } from "@/types/service";

export const services: Record<string, Service> = {
  "criacao-de-sites": {
    slug: "criacao-de-sites",

    seo: {
      title: "Criação de Sites Profissionais Sob Medida",

      description:
        "Desenvolvimento de websites profissionais construídos do zero até a publicação. Sites rápidos, responsivos e otimizados para Google. Entrega em até 36 horas.",

      keywords: [
        "empresa de criação de sites",
        "criação de sites profissionais",
        "criação de sites em BH",
        "empresa que cria sites",
        "desenvolvimento de sites",
        "programador web",
        "site para empresas",
        "desenvolvimento web",
        "quanto custa um site",
        "quanto custa para fazer um site",
        "criação de site preço",
        "criação de sites sob medida",
        "sites sob medida",
        "profissional que faz site",
        "criação de sites em belo horizonte",
        "criação de sites em são paulo",
        "criação de sites em sp",
        "quanto custa para fazer um site",
      ],

      image: "/criacao-de-sites.webp",
    },

    hero: {
      title: "Criação de Sites Profissionais que vendem todos os dias",
      subtitle:
        "Desenvolvimento de sites profissionais sob medida para pequenas e grandes empresas a partir de R$997",

      ctaBtn: "Quero um site profissional para minha empresa",
      image: "/logo.png",
    },

    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Enviar para WhatsApp",

      whatsappMessage: "Olá! Gostaria de um orçamento para um site.",

      servicos: [
        "Site Institucional Básico",
        "Site Profissional",
        "Site Oferta Especial",
      ],

      orcamentos: [
        "Até R$ 1.497",
        "R$ 1.497 a R$ 2.997",
        "Acima de R$ 2.997",
        "R$997 (Oferta Especial)",
      ],
    },

    pains: {
      title: "Sua empresa passa por esses problemas?",
      subtitle:
        "Se sua empresa se identifica com algum desses desafios abaixo, nós podemos ajudar!",
      items: [
        {
          titulo: "Poucos Clientes",
          descricao:
            "Sua empresa conta apenas com clientes que passam na região ou vem de alguma indicação de um conhecido distante.",
        },
        {
          titulo: "Ninguém te acha na internet",
          descricao:
            "As pessoas procuram por serviços que sua empresa oferecem mas não te encontram, e nesse caso, você perdeu um cliente para seu concorrente.",
        },
        {
          titulo: "Faturamento Baixo",
          descricao:
            "Sua empresa tem um baixo faturamento por não ter vendas de produto e serviços em grande escala.",
        },
        {
          titulo: "Poucas vendas",
          descricao:
            "Sua empresa só conta com o comércio local e não está conseguindo alcançar as metas de vendas para o sucesso do negócio.",
        },
        {
          titulo: "Vontade de fechar as portas",
          descricao:
            "Você já está enlouquecendo com contas a pagar e despesas com funcionários, mas o dinheiro não entra e você já está pensando se vale a pena ou não continuar o seu negócio.",
        },

        {
          titulo: "Sensação de fracasso",
          descricao:
            "Você sente culpado por não estar conseguindo alcançar o sucesso que merece nos seus negócios e se julga pelo negócio não progredir como deseja.",
        },
      ],
    },

    benefits: {
      title: "A boa notícia é que agora o jogo mudou!",
      subtitle:
        "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
      ctaButton: "Quero meu site profissional",
      items: [
        {
          titulo: "Seus clientes podem te encontrar",
          descricao:
            "Clientes que pesquisam pelo produto ou serviço que sua empresa oferece agora poderão te encontrar pelo Google.",
        },
        {
          titulo: "Os clientes veem seriedade no seu negócio",
          descricao:
            "Agora os clientes veem o seu negócio a um nível profissional pois agora sua empresa pode ser encontrada e avaliada na internet.",
        },
        {
          titulo: "Faturamento aumenta",
          descricao:
            "Com visibilidade online, a sua empresa começa a crescer e se destacar no mercado passando seriedade, compromisso e profissionalismo para os seus clientes",
        },
        {
          titulo: "Suas vendas aumentam",
          descricao:
            "Sua empresa agora pode vender pela internet para qualquer pessoa do país, considerando a sua area de atendimento.",
        },
        {
          titulo: "A vontade de crescer só aumenta",
          descricao:
            "Com presença online, suas vendas aumentam e logo aquela vontade de fechar as portas não existe mais, pois agora sua empresa é sempre encontrada por quem procura.",
        },
        {
          titulo: "Sensação de sucesso",
          descricao:
            "Sua empresa vende todos os dias, torna-se refêrencia no mercado, bem avaliada no Google e o sucesso vem até a sua porta.",
        },
      ],
    },

    technologies: {
      title: "Como os sites são desenvolvidos?",
      subtitle:
        "Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as seguintes linguagens:",
      ctaButton: "Quero meu site profissional",
      items: [
        {
          nome: "HTML5",
          descricao:
            "Responsável pela estrutura e organização das páginas, garantindo um site moderno e compatível com todos os navegadores.",
          image: "/assets/technologies/html5-plain-wordmark.svg",
        },
        {
          nome: "JavaScript",
          descricao:
            "Adiciona interatividade e funcionalidades dinâmicas, proporcionando uma experiência mais moderna e intuitiva aos usuários.",
          image: "/assets/technologies/javascript-original.svg",
        },
        {
          nome: "CSS3",
          descricao:
            "Utilizado para criar layouts profissionais, responsivos e adaptados para computadores, tablets e smartphones.",
          image: "/assets/technologies/css3-plain-wordmark.svg",
        },
        {
          nome: "PHP",
          descricao:
            "Linguagem amplamente utilizada no desenvolvimento web para integrar formulários, sistemas e funcionalidades no servidor.",
          image: "/assets/technologies/php-original.svg",
        },
        {
          nome: "Next.js",
          descricao:
            "Framework moderno utilizado para criar sites rápidos, seguros e altamente otimizados para o Google e mecanismos de busca.",
          image: "/assets/technologies/nextjs-original.svg",
        },
        {
          nome: "React",
          descricao:
            "Biblioteca JavaScript utilizada para criar interfaces modernas, rápidas e com excelente experiência para o usuário.",
          image: "/assets/technologies/react-original.svg",
        },
        {
          nome: "TypeScript",
          descricao:
            "Adiciona mais segurança e organização ao código, permitindo o desenvolvimento de projetos mais robustos e confiáveis.",
          image: "/assets/technologies/typescript-original.svg",
        },
        {
          nome: "Tailwind CSS",
          descricao:
            "Framework de estilização que permite criar interfaces modernas, responsivas e com alta performance.",
          image: "/assets/technologies/tailwindcss-original-wordmark.svg",
        },
      ],
    },

    portfolio: {
      title: "Confira projetos já realizados",
      subtitle: "Projetos que já estão no ar sem fronteira de faturamento.",

      items: [
        {
          titulo: "Vidrosa",

          cliente: "Vidraçaria Vidrosa",

          segmento: "Esquadrias de Alumínio",

          descricao:
            "Site institucional desenvolvido para apresentar os serviços da empresa.",

          tecnologias: ["HTML", "CSS", "JavaScript"],

          img: "/assets/images/vidrosa-site.webp",

          link: "https://vidrosa.com.br",
        },
        {
          titulo: "NewForm Esquadrias",

          cliente: "NewForm Esquadrias de Alumínio e Vidros",

          segmento: "Vidraçaria e Serralheria de Alumínio",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "Javascript"],

          img: "/assets/images/newformesquadrias-site.webp",

          link: "https://newformesquadrias.com.br",
        },
        {
          titulo: "Saúde Vida Ocupacional",

          cliente: "Saúde Vida Ocupacional",

          segmento: "Segurança do trabalho",

          descricao: "...",

          tecnologias: ["NEXT.JS", "REACT"],

          img: "/assets/images/saudevidamed.webp",

          link: "https://saudevidamed.com.br",
        },
        {
          titulo: "Fujitel Telecom",

          cliente: "Fujitel Telecom",

          segmento: "Empresa de Telecomunicações",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JAVASCRIPT"],

          img: "/assets/images/fujitel.webp",

          link: "https://fujitel.com.br",
        },
        {
          titulo: "GM Glass",

          cliente: "GM Glass",

          segmento: "Vidraçaria",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JavaScript"],

          img: "/assets/images/gmglass.webp",

          link: "https://gmglass.com.br",
        },
        {
          titulo: "Jorge Mendonça",

          cliente: "Jorge Mendonça",

          segmento: "Intermediação de crédito",

          descricao: "...",

          tecnologias: ["Next.js", "React"],

          img: "/assets/images/jorgemendonca.webp",

          link: "https://jorgemendonca.com",
        },
        {
          titulo: "Turn One Technology",

          cliente: "Turn One Technology",

          segmento: "Segurança de Transito",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JAVASCRIPT", "PHP"],

          img: "/assets/images/turnone.webp",

          link: "https://turnone.com.br",
        },
        {
          titulo: "BN Esquadrias",

          cliente: "BN Esquadrias",

          segmento: "Esquadrias de Alumínio",

          descricao:
            "Site desenvolvido para atrair clientes para serralheria de alumínio",

          tecnologias: ["HTML", "CSS", "JavaScript"],

          img: "/assets/images/bnesquadrias-site.webp",

          link: "https://bnesquadrias.com.br",
        },

        {
          titulo: "WMA Esquadrias e Vidros",

          cliente: "WMA Esquadrias e vidros",

          segmento: "Vidraçaria e serralheria de alumínio",

          descricao: "...",

          tecnologias: ["Next.js", "React"],

          img: "/assets/images/wmaesquadriasevidros.webp",

          link: "https://wmaesquadriasevidros.com.br",
        },
        {
          titulo: "Wedson Engenharia",

          cliente: "Wedson Engenharia Construções e Reformas em geral",

          segmento: "Construtora",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/wedsonengenharia.webp",

          link: "https://wedsonconstrucoes.com.br",
        },

        {
          titulo: "0800 Mobily",

          cliente: "0800 Mobily",

          segmento: "Aplicativo de transporte",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/0800mobily.webp",

          link: "https://0800mobily.vercel.app",
        },
        {
          titulo: "VH Refrigeração",

          cliente: "VH Refrigeração",

          segmento: "Técnico de refrigeração",

          descricao: "...",

          tecnologias: ["Next.js", "React"],

          img: "/assets/images/vhrefrigeracao.webp",

          link: "https://vhrefrigeracao.com.br",
        },
        {
          titulo: "FCE Serralheria",

          cliente: "FCE Serralheria",

          segmento: "Serralheria",

          descricao: "...",

          tecnologias: ["Next.js", "React"],

          img: "/assets/images/fceserralherianew.webp",

          link: "https://fceserralheria.vercel.app",
        },
        {
          titulo: "Alliança EST",

          cliente: "Alliança EST",

          segmento: "Segurança do trabalho",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/alliancaest.webp",

          link: "https://alliancaest.com.br",
        },
        {
          titulo: "I9Seg",

          cliente: "I9Seg",

          segmento: "Segurança do trabalho",

          descricao: "...",

          tecnologias: ["NEXT.JS", "REACT"],

          img: "/assets/images/ie9seg.webp",

          link: "https://i9seg.vercel.app",
        },
      ],
    },

    pricing: {
      title: "E quanto custa um site?",
      subtitle:
        "Investir em um site profissional custa menos do que perder clientes todos os dias para os seus concorrentes.",
      cards: [
        {
          titulo: "Site Institucional",
          condicaoPagamento: "A partir de",
          preco: "R$ 1.497",
          parcela: "Ou parcele em até 5 vezes",
          descricao:
            "Ideal para empresas que precisam de presença profissional na internet.",
          itens: [
            "Até 5 páginas",
            "SEO básico",
            "WhatsApp",
            "Formulário",
            "Responsivo",
          ],
          ctaBtn: "Quero comprar meu site hoje mesmo",
        },

        {
          titulo: "Site Profissional",
          condicaoPagamento: "A partir de",
          preco: "R$ 2.997",
          parcela: "Ou parcele em até 5 vezes",
          descricao:
            "Ideal para empresas que precisam de funcionalidades avançadas e banco de dados.",
          destaque: true,
          itens: [
            "Área administrativa",
            "Banco de dados",
            "Painel personalizado",
            "APIs",
            "Escalável",
          ],
          ctaBtn: "Solicitar Orçamento pelo WhatsApp",
        },

        {
          titulo: "Oferta Especial",
          condicaoPagamento: "Por apenas",
          preco: "R$ 997",
          parcela: "No pagamento à vista",
          descricao:
            "Oferta por tempo limitado para pequenas empresas e empreendedores.",
          promocao: true,
          itens: [
            "Site profissional",
            "Até 3 páginas",
            "WhatsApp",
            "SEO básico",
            "Entrega rápida",
          ],
          ctaBtn: "Saiba mais sobre a promoção",
          href: "/promocao/oferta-criacao-de-sites",
        },
      ],
    },

    payment: {
      title: "...",
      subtitle: "...",
      methods: [],
      trust: [],
    },

    clients: {
      title: "Empresas que confiaram no Clintin dos Sites",
      subtitle:
        "Conheça algumas empresas que já escolheram nossos serviços para desenvolver sua presença digital.",
      items: [
        {
          nome: "Vidrosa",
          segmento: "Vidraçaria",

          descricao: "Site institucional desenvolvido em Next.js.",

          logo: "/assets/logos/vidrosa-logo.webp",

          link: "https://vidrosa.com.br",
        },
        {
          nome: "0800 Mobily",
          segmento: "Aplicativo de transporte",

          descricao:
            "Landing page desenvolvida para direcionar para a playstore e baixar o app da 0800 mobily.",

          logo: "/assets/logos/0800mobily-logo.webp",

          link: "https://0800mobily.vercel.app",
        },
        {
          nome: "DLL International Group",
          segmento: "Intermediação de crédito",

          descricao: "Landing page desenvolvida para agente bancário",

          logo: "/assets/logos/dllbank-logo.png",

          link: "https://bdllgroup.vercel.app/",
        },
        {
          nome: "Turn One Technology",
          segmento: "Empresa de segurança no transporte rodoviario",

          descricao:
            "Landing page desenvolvida para captar leads de empresas que precisam de segurança rodoviaria.",

          logo: "/assets/logos/turnone-logo.svg",

          link: "https://turnone.com.br",
        },

        {
          nome: "Aliança Proteção Veicular",
          segmento: "Proteção veicular",

          descricao:
            "Site institucional desenvolvido para apresentar os serviços da associação e gerar novos associados.",

          logo: "/assets/logos/allianca-logo.png",

          link: "https://alliancaest.com.br",
        },

        {
          nome: "Ceará Burguer",
          segmento: "Hamburgueria",

          descricao:
            "Sistema de delivery desenvolvido para pedidos online da hamburgueria.",

          logo: "/assets/logos/cearacaiburguer-logo.png",

          link: "https://cearacaiburguer.com.br",
        },

        {
          nome: "DNB",
          segmento: "Empresa",

          descricao:
            "Site institucional desenvolvido para divulgação dos serviços da empresa.",

          logo: "/assets/logos/dnb-logo.png",

          link: "https://dnbluxembourg.vercel.app/",
        },

        {
          nome: "Eu Arrumo",
          segmento: "Assistência técnica",

          descricao:
            "Site institucional desenvolvido para divulgação dos serviços de manutenção.",

          logo: "/assets/logos/euarrumo-logo.png",

          link: "https://euarrumo.vercel.app",
        },

        {
          nome: "Fujitel",
          segmento: "Telecom",

          descricao:
            "Landing page desenvolvida para divulgação dos serviços da empresa.",

          logo: "/assets/logos/fujitel-logo.png",

          link: "https://fujitel.com.br",
        },

        {
          nome: "GM Glass",
          segmento: "Esquadrias de Alumínio",

          descricao:
            "Site institucional desenvolvido para apresentação da empresa e geração de clientes.",

          logo: "/assets/logos/gmglass-logo.png",

          link: "https://gmglass.com.br",
        },

        {
          nome: "Gran Natural",
          segmento: "Mármores e Granitos",

          descricao:
            "Site institucional desenvolvido para apresentação dos produtos e serviços.",

          logo: "/assets/logos/grannatural-logo.png",

          link: "https://grannatural.vercel.app/",
        },

        {
          nome: "I9SEG",
          segmento: "Medicina do Trabalho",

          descricao:
            "Site institucional para apresentação e captação de leads que querem contratar empresas de segurança do trabalho.",

          logo: "/assets/logos/i9seg-logo.webp",

          link: "https://i9seg.vercel.app/",
        },

        {
          nome: "NewForm",
          segmento: "Empresa",

          descricao:
            "Site institucional desenvolvido para fortalecer a presença digital da empresa.",

          logo: "/assets/logos/newform-logo.png",

          link: "https://newformesquadrias.com.br",
        },

        {
          nome: "Saude Vida",
          segmento: "Plano de Saúde",

          descricao:
            "Landing page desenvolvida para captação de novos clientes.",

          logo: "/assets/logos/saudevidamed-logo.png",

          link: "https://saudevidamed.com.br",
        },

        {
          nome: "Turn One Technology",
          segmento: "Empresa de segurança no transporte rodoviário",

          descricao:
            "Landing page desenvolvida para captar leads de empresas que precisam de segurança rodoviária.",

          logo: "/assets/logos/turnone-logo.svg",

          link: "https://turnone.com.br",
        },

        {
          nome: "VH Refrigeração",
          segmento: "Técnico de refrigeração",

          descricao:
            "Site desesnvolvido para captar leads precisando de tecnico de refrigeração",

          logo: "/assets/logos/vhrefrigeracao-logo.webp",

          link: "https://...",
        },

        {
          nome: "Vital Telecom",
          segmento: "Provedor de Internet",

          descricao:
            "Landing page desenvolvida para venda de planos de internet.",

          logo: "/assets/logos/vital-logo.png",

          link: "https://vitaltelecom.vercel.app",
        },

        {
          nome: "Wedson",
          segmento: "Empresa",

          descricao:
            "Site institucional desenvolvido para fortalecer a presença digital da empresa.",

          logo: "/assets/logos/wedson-logo.webp",

          link: "https://wedsonconstrucoes.com.br",
        },

        {
          nome: "WMA",
          segmento: "Empresa",

          descricao:
            "Landing page desenvolvida para divulgação dos serviços da empresa.",

          logo: "/assets/logos/wma-logo.png",

          link: "https://wmaesquadriasevidros.com.br",
        },
      ],
    },

    process: {
      title: "Como funciona o desenvolvimento?",
      subtitle: "Você acompanha todas as etapas do projeto.",
      items: [
        {
          titulo: "Briefing",
          descricao: "...",
          icon: "MessageCircle",
        },
        {
          titulo: "Planejamento",
          descricao: "...",
          icon: "PenTool",
        },
      ],
    },

    faq: {
      title: "Ainda está com alguma dúvida?",
      subtitle:
        "Estas são algumas das perguntas mais comuns antes de contratar um site profissional.",
      items: [
        {
          pergunta: "Ter um site realmente traz mais clientes?",
          resposta:
            "Sim. Todos os dias pessoas pesquisam no Google por produtos e serviços. Um site profissional permite que sua empresa seja encontrada por esses clientes.",
        },
        {
          pergunta: "Eu já tenho Instagram, preciso mesmo de um site?",
          resposta:
            "Sim. As redes sociais são importantes, mas um site transmite mais profissionalismo, aumenta a credibilidade e permite aparecer no Google.",
        },
        {
          pergunta: "Meu negócio é pequeno, vale a pena investir?",
          resposta:
            "Com certeza. Um site é um investimento que trabalha para sua empresa 24 horas por dia, ajudando a conquistar novos clientes.",
        },
        {
          pergunta: "O site funciona no celular?",
          resposta:
            "Sim. Todos os nossos projetos são responsivos e funcionam perfeitamente em computadores, tablets e smartphones.",
        },
        {
          pergunta: "Depois de pronto eu posso fazer alterações?",
          resposta:
            "Sim. Você pode solicitar alterações e também oferecemos planos de manutenção para manter o site sempre atualizado.",
        },
        {
          pergunta: "Em quanto tempo o site fica pronto?",
          resposta:
            "O prazo depende da complexidade do projeto, mas muitos sites são entregues em até 3 dias.",
        },
      ],
    },

    cta: {
      title: "Chegou a hora de colocar a sua empresa online!",
      subtitle:
        "Quer aumentar o faturamento da sua empresa com um site profissional? Clique no botão abaixo e solicite um orçamento direto com o desenvolvedor!",
      button: "Quero meu site profissional!",
      whatsappMessage:
        "Olá, vim pelo site e queria um orçamento para fazer um site...",
    },
    finalCTA: {
      title: "Transforme visitantes em clientes com um site profissional",
      plan: "Site Profissional",
      subtitle:
        "Desenvolvemos um site moderno, rápido e totalmente personalizado para destacar sua empresa na internet, transmitir mais credibilidade e facilitar o contato com seus clientes através do WhatsApp e formulários inteligentes. Você recebe um projeto completo, pronto para divulgar seu negócio e começar a vender.",

      oldPrice: "R$ 1.497",

      price: "R$ 997",

      installment: "Pagamento à vista",

      badge: "Oferta válida até 31/07/2026",

      cta: "Quero essa promoção",

      whatsapp:
        "Olá! Vi a promoção do Site Profisional por R$997 e gostaria de fazer um projeto...",

      benefits: [],

      guarantee: "Garantia de suporte após a entrega.",

      urgency: "Vagas limitadas para início imediato.",
    },
  },
  "criacao-landing-page": {
    slug: "criacao-de-landing-page",

    seo: {
      title: "Criação de Landing Pages Profissionais que Geram Leads",

      description:
        "Landing pages de alta conversão para campanhas no Google Ads, Facebook Ads e tráfego pago. Desenvolvidas para transformar visitantes em clientes.",

      keywords: [
        "criação de landing page",
        "landing page profissional",
        "landing page para vendas",
        "landing page para google ads",
        "landing page para facebook ads",
        "landing page de alta conversão",
        "landing page responsiva",
        "landing page para captar clientes",
        "landing page para empresas",
        "landing page personalizada",
        "desenvolvimento de landing page",
        "landing page otimizada",
      ],

      image: "/criacao-de-landing-page.webp",
    },

    hero: {
      title: "Landing Pages que Transformam Cliques em Clientes",

      subtitle:
        "Ideal para campanhas de Google Ads, Facebook Ads e Instagram. Desenvolvemos páginas rápidas, persuasivas e preparadas para gerar mais contatos e vendas.",

      ctaBtn: "Quero uma Landing Page",

      image: "/logo.png",
    },
    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Quero minha Landing Page",

      whatsappMessage: "Olá! Gostaria de um orçamento para uma landing page.",

      servicos: [
        "Landing Page Básica",
        "Landing Page Premium",
        "Landing Page Oferta Especial",
      ],

      orcamentos: [
        "Até R$ 697",
        "R$ 697 a R$ 1.297",
        "R$ 1.297 a R$ 2.000",
        "R$497 (Oferta Especial)",
      ],
    },
    pains: {
      title: "Sua campanha gera visitas, mas quase ninguém entra em contato?",

      subtitle:
        "Investir em anúncios sem uma landing page otimizada significa desperdiçar dinheiro todos os dias.",

      items: [
        {
          titulo: "Poucos contatos",
          descricao:
            "As pessoas clicam no anúncio, mas abandonam a página antes de entrar em contato.",
        },
        {
          titulo: "Campanhas caras",
          descricao:
            "Você investe em Google Ads ou Facebook Ads, mas o retorno está muito abaixo do esperado.",
        },
        {
          titulo: "Baixa conversão",
          descricao:
            "Sua página não convence o visitante a solicitar orçamento ou comprar.",
        },
        {
          titulo: "Visual amador",
          descricao:
            "Uma página mal construída transmite pouca credibilidade e reduz drasticamente as vendas.",
        },
        {
          titulo: "Sem estratégia",
          descricao:
            "Não existe uma estrutura pensada para conduzir o visitante até a conversão.",
        },
        {
          titulo: "Dinheiro perdido",
          descricao:
            "Cada clique desperdiçado representa investimento perdido e oportunidades que vão para seus concorrentes.",
        },
      ],
    },

    benefits: {
      title: "Transforme visitantes em clientes todos os dias",

      subtitle:
        "Criamos landing pages desenvolvidas com técnicas de marketing e programação para aumentar significativamente sua taxa de conversão.",

      ctaButton: "Quero vender mais",

      items: [
        {
          titulo: "Mais conversões",
          descricao:
            "Estrutura criada para convencer o visitante a solicitar orçamento ou comprar.",
        },
        {
          titulo: "Mais leads",
          descricao:
            "Capte contatos qualificados através de formulários inteligentes e integração com WhatsApp.",
        },
        {
          titulo: "Carregamento rápido",
          descricao:
            "Landing pages leves aumentam a conversão e reduzem o abandono.",
        },
        {
          titulo: "Mais retorno sobre anúncios",
          descricao:
            "Melhore o desempenho das campanhas e aproveite melhor cada real investido.",
        },
        {
          titulo: "Funciona em qualquer dispositivo",
          descricao:
            "Layout totalmente responsivo para celular, tablet e computador.",
        },
        {
          titulo: "SEO e Performance",
          descricao:
            "Código otimizado para velocidade, indexação e melhor experiência do usuário.",
        },
      ],
    },

    technologies: {
      title: "Tecnologia de alto desempenho",

      subtitle:
        "Nossas landing pages são desenvolvidas utilizando tecnologias modernas, garantindo velocidade, segurança e excelente experiência para seus clientes.",

      ctaButton: "Quero minha Landing Page",

      items: [
        {
          nome: "Next.js",
          descricao:
            "Framework extremamente rápido para criação de páginas de alta performance.",
          image: "/assets/technologies/nextjs-original.svg",
        },
        {
          nome: "React",
          descricao: "Interfaces modernas e altamente interativas.",
          image: "/assets/technologies/react-original.svg",
        },
        {
          nome: "TypeScript",
          descricao: "Código seguro e escalável.",
          image: "/assets/technologies/typescript-original.svg",
        },
        {
          nome: "Tailwind CSS",
          descricao: "Design moderno e responsivo.",
          image: "/assets/technologies/tailwindcss-original-wordmark.svg",
        },
      ],
    },

    portfolio: {
      title: "Landing Pages Desenvolvidas",
      subtitle:
        "Alguns projetos desenvolvidos voltados para campanhas de tráfego pago.",

      items: [
        {
          titulo: "Vidrosa",

          cliente: "Vidraçaria Vidrosa",

          segmento: "Esquadrias de Alumínio",

          descricao:
            "Site institucional desenvolvido para apresentar os serviços da empresa.",

          tecnologias: ["HTML", "CSS", "JavaScript"],

          img: "/assets/images/vidrosa-site.webp",

          link: "https://vidrosa.com.br",
        },
        {
          titulo: "NewForm Esquadrias",

          cliente: "NewForm Esquadrias de Alumínio e Vidros",

          segmento: "Vidraçaria e Serralheria de Alumínio",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "Javascript"],

          img: "/assets/images/newformesquadrias-site.webp",

          link: "https://newformesquadrias.com.br",
        },
        {
          titulo: "Termo Lipo",

          cliente: "Termo Lipo",

          segmento: "Encapsulados",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JAVASCRIPT"],

          img: "/assets/images/termolipo-lp.webp",

          link: "https://termolipo.com.br",
        },
        {
          titulo: "Fujitel Telecom",

          cliente: "Fujitel Telecom",

          segmento: "Empresa de Telecomunicações",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JAVASCRIPT"],

          img: "/assets/images/paidosestofados-site.webp",

          link: "https://paidosestofados-ten.vercel.app/",
        },
        {
          titulo: "Harmonia Psicanalitica",

          cliente: "Leandro Morais",

          segmento: "Psicoterapeuta",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JavaScript"],

          img: "/assets/images/harmoniapsicanalitica-site.webp",

          link: "https://harmoniapsicanalitica.com.br",
        },
        {
          titulo: "Vital Telecom Serviços",

          cliente: "Vital Telecom",

          segmento: "Empresa de telecomunicações",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JAVASCRIPT"],

          img: "/assets/images/vitalservicos-site.webp",

          link: "https://vitaltelecom.vercel.app",
        },
        {
          titulo: "Turn One Technology",

          cliente: "Turn One Technology",

          segmento: "Segurança de Transito",

          descricao: "...",

          tecnologias: ["HTML", "CSS", "JAVASCRIPT", "PHP"],

          img: "/assets/images/turnone.webp",

          link: "https://turnone.com.br",
        },
        {
          titulo: "BN Esquadrias",

          cliente: "BN Esquadrias",

          segmento: "Esquadrias de Alumínio",

          descricao:
            "Site desenvolvido para atrair clientes para serralheria de alumínio",

          tecnologias: ["HTML", "CSS", "JavaScript"],

          img: "/assets/images/bnesquadrias-site.webp",

          link: "https://bnesquadrias.com.br",
        },

        {
          titulo: "ClicksChat",

          cliente: "ClicksChat",

          segmento: "Chatbot",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/clickschat-site.webp",

          link: "https://clickschat.com.br",
        },
        {
          titulo: "Wedson Engenharia",

          cliente: "Wedson Engenharia Construções e Reformas em geral",

          segmento: "Construtora",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/wedsonengenharia.webp",

          link: "https://wedsonconstrucoes.com.br",
        },

        {
          titulo: "0800 Mobily",

          cliente: "0800 Mobily",

          segmento: "Aplicativo de transporte",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/0800mobily.webp",

          link: "https://0800mobily.vercel.app",
        },
        {
          titulo: "VH Refrigeração",

          cliente: "VH Refrigeração",

          segmento: "Técnico de refrigeração",

          descricao: "...",

          tecnologias: ["Next.js", "React"],

          img: "/assets/images/vhrefrigeracao.webp",

          link: "https://vhrefrigeracao.com.br",
        },
        {
          titulo: "FCE Serralheria",

          cliente: "FCE Serralheria",

          segmento: "Serralheria",

          descricao: "...",

          tecnologias: ["Next.js", "React"],

          img: "/assets/images/fceserralherianew.webp",

          link: "https://fceserralheria.vercel.app",
        },
        {
          titulo: "Alliança EST",

          cliente: "Alliança EST",

          segmento: "Segurança do trabalho",

          descricao: "...",

          tecnologias: ["HTML", "CSS"],

          img: "/assets/images/alliancaest.webp",

          link: "https://alliancaest.com.br",
        },
        {
          titulo: "I9Seg",

          cliente: "I9Seg",

          segmento: "Segurança do trabalho",

          descricao: "...",

          tecnologias: ["NEXT.JS", "REACT"],

          img: "/assets/images/ie9seg.webp",

          link: "https://i9seg.vercel.app",
        },
      ],
    },
    pricing: {
      title: "Quanto custa uma Landing Page?",

      subtitle:
        "Uma única venda pode pagar todo o investimento em uma landing page profissional.",

      cards: [
        {
          titulo: "Landing Page Essencial",

          condicaoPagamento: "A partir de",

          preco: "R$ 697",

          parcela: "6x de R$ 116,17",

          descricao: "Ideal para divulgação de um produto ou serviço.",

          itens: [
            "Página única",
            "Responsiva",
            "WhatsApp",
            "Formulário",
            "SEO básico",
          ],

          ctaBtn: "Solicitar orçamento",
        },

        {
          titulo: "Landing Page Premium",

          condicaoPagamento: "A partir de",

          preco: "R$ 1.297",

          parcela: "6x de R$ 216,17",

          destaque: true,

          descricao: "Ideal para campanhas profissionais de tráfego pago.",

          itens: [
            "Design exclusivo",
            "Copy persuasiva",
            "Integrações",
            "Pixel Meta",
            "Google Analytics",
            "Tag Manager",
            "SEO",
          ],

          ctaBtn: "Quero esta opção",
        },

        {
          titulo: "Oferta Especial",

          condicaoPagamento: "Por apenas",

          preco: "R$ 497",

          parcela: "5x de R$ 99,40",

          promocao: true,

          descricao:
            "Oferta válida para empreendedores que desejam começar agora.",

          itens: [
            "Landing Page",
            "WhatsApp",
            "SEO",
            "Hospedagem",
            "Entrega rápida",
          ],

          ctaBtn: "Aproveitar oferta",
        },
      ],
    },

    payment: {
      title: "...",
      subtitle: "...",
      methods: [],
      trust: [],
    },

    clients: {
      title: "Empresas que confiaram no Clintin dos Sites",

      subtitle:
        "Empresas que aumentaram seus resultados utilizando nossas landing pages.",

      items: [],
    },

    process: {
      title: "Como funciona?",

      subtitle: "Todo o processo é simples, rápido e acompanhado por você.",

      items: [
        {
          titulo: "Briefing",
          descricao: "Entendemos seu público, objetivo e campanha.",
          icon: "MessageCircle",
        },
        {
          titulo: "Design",
          descricao: "Criamos um layout focado em conversão.",
          icon: "PenTool",
        },
        {
          titulo: "Desenvolvimento",
          descricao: "Programação otimizada para máxima velocidade.",
          icon: "Code2",
        },
        {
          titulo: "Publicação",
          descricao: "Colocamos sua página no ar pronta para vender.",
          icon: "Rocket",
        },
      ],
    },

    faq: {
      title: "Perguntas Frequentes",

      subtitle: "As dúvidas mais comuns antes de contratar uma landing page.",

      items: [
        {
          pergunta: "Landing Page realmente vende mais?",
          resposta:
            "Sim. Uma landing page elimina distrações e conduz o visitante para uma única ação, aumentando significativamente a conversão.",
        },
        {
          pergunta: "Ela funciona no celular?",
          resposta: "Sim. Todas são totalmente responsivas.",
        },
        {
          pergunta: "Posso usar no Google Ads?",
          resposta:
            "Sim. Elas são desenvolvidas justamente para campanhas de Google Ads, Facebook Ads e Instagram.",
        },
        {
          pergunta: "Ela já vem com WhatsApp?",
          resposta:
            "Sim. Podemos integrar WhatsApp, formulários, CRM, Pixel da Meta, Google Analytics e Tag Manager.",
        },
        {
          pergunta: "Em quanto tempo fica pronta?",
          resposta:
            "A maioria das landing pages é entregue entre 24 e 72 horas úteis, dependendo da complexidade.",
        },
      ],
    },

    cta: {
      title: "Sua próxima venda pode começar hoje",

      subtitle:
        "Pare de desperdiçar dinheiro em anúncios que não convertem. Solicite agora uma landing page profissional.",

      button: "Quero minha Landing Page",

      whatsappMessage:
        "Olá! Gostaria de solicitar um orçamento para uma Landing Page.",
    },

    finalCTA: {
      title: "Comece a gerar mais clientes",

      plan: "Landing Page Premium",

      subtitle:
        "Landing page desenvolvida sob medida para transformar visitantes em contatos e aumentar o retorno das suas campanhas.",

      oldPrice: "R$ 1.497",

      price: "R$ 997",

      installment: "ou em até 6x de R$ 166,17",

      badge: "🔥 Oferta válida por tempo limitado",

      cta: "Solicitar orçamento pelo WhatsApp",

      whatsapp: "Olá! Quero uma Landing Page profissional para minha empresa.",

      benefits: [
        "Design exclusivo",
        "Alta conversão",
        "Responsiva",
        "WhatsApp integrado",
        "Pixel Meta",
        "Google Analytics",
        "SEO otimizado",
        "Entrega rápida",
      ],

      guarantee: "Suporte após a entrega para ajustes e orientações.",

      urgency: "Agenda limitada para novos projetos neste mês.",
    },
  },
  "criacao-loja-virtual": {
    slug: "criacao-de-loja-virtual",

    seo: {
      title: "Criação de Loja Virtual Profissional | E-commerce Sob Medida",

      description:
        "Desenvolvimento de lojas virtuais profissionais para vender produtos pela internet. E-commerce rápido, seguro, responsivo e integrado aos principais meios de pagamento.",

      keywords: [
        "criação de loja virtual",
        "loja virtual",
        "e-commerce",
        "desenvolvimento de loja virtual",
        "criar ecommerce",
        "loja online",
        "site para vender produtos",
        "loja virtual profissional",
        "ecommerce personalizado",
        "desenvolvimento ecommerce",
        "loja virtual preço",
        "site de vendas",
      ],

      image: "/criacao-de-loja-virtual.webp",
    },

    hero: {
      title: "Venda Seus Produtos na Internet 24 Horas por Dia",

      subtitle:
        "Criamos lojas virtuais modernas, rápidas e preparadas para transformar visitantes em compradores. Venda para qualquer lugar do Brasil.",

      ctaBtn: "Quero minha Loja Virtual",

      image: "/logo.png",
    },
    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Enviar para WhatsApp",

      whatsappMessage: "Olá! Gostaria de um orçamento para uma loja virtual.",

      servicos: [
        "Loja Virtual Profissional",
        "Loja Virtual Premium",
        "Loja Virtual Oferta Especial",
      ],

      orcamentos: [
        "Até R$ 2.497",
        "R$ 2.497 a R$ 3.497",
        "Acima de R$ 4.497",
        "R$1.997 (Oferta Especial)",
      ],
    },
    pains: {
      title: "Sua empresa ainda depende apenas das vendas presenciais?",

      subtitle:
        "Enquanto seus concorrentes vendem todos os dias pela internet, sua empresa pode estar perdendo milhares de reais em oportunidades.",

      items: [
        {
          titulo: "Poucas vendas",
          descricao:
            "Você vende apenas para quem conhece sua empresa ou passa em frente à loja.",
        },

        {
          titulo: "Loja fechada = faturamento parado",
          descricao:
            "Quando sua empresa fecha as portas, as vendas simplesmente param.",
        },

        {
          titulo: "Alcance limitado",
          descricao:
            "Você não consegue vender para clientes de outras cidades ou estados.",
        },

        {
          titulo: "Dependência do Instagram",
          descricao:
            "Receber pedidos apenas pelo Direct ou WhatsApp gera desorganização e perda de vendas.",
        },

        {
          titulo: "Processos manuais",
          descricao:
            "Controlar pedidos, estoque e pagamentos manualmente toma tempo e aumenta os erros.",
        },

        {
          titulo: "Concorrência na frente",
          descricao:
            "Enquanto você vende localmente, seus concorrentes estão faturando pela internet.",
        },
      ],
    },

    benefits: {
      title: "Sua loja aberta 24 horas por dia",

      subtitle:
        "Uma loja virtual permite vender automaticamente todos os dias, mesmo quando sua empresa está fechada.",

      ctaButton: "Quero vender online",

      items: [
        {
          titulo: "Venda para todo o Brasil",
          descricao:
            "Alcance clientes de qualquer cidade sem depender apenas da sua região.",
        },

        {
          titulo: "Pedidos automáticos",
          descricao:
            "Clientes escolhem produtos, finalizam pedidos e realizam pagamentos online.",
        },

        {
          titulo: "Mais faturamento",
          descricao:
            "Sua empresa passa a vender 24 horas por dia, inclusive finais de semana e feriados.",
        },

        {
          titulo: "Pagamento online",
          descricao:
            "Integração com Pix, Cartão de Crédito, Boleto e diversos gateways.",
        },

        {
          titulo: "Controle de estoque",
          descricao:
            "Gerencie produtos, pedidos e estoque em um único painel administrativo.",
        },

        {
          titulo: "Mais credibilidade",
          descricao:
            "Uma loja virtual profissional transmite segurança e aumenta a confiança dos clientes.",
        },
      ],
    },

    technologies: {
      title: "Tecnologia preparada para vender",

      subtitle:
        "Desenvolvemos lojas virtuais utilizando tecnologias modernas para garantir velocidade, segurança e excelente experiência de compra.",

      ctaButton: "Quero minha Loja Virtual",

      items: [
        {
          nome: "Next.js",
          descricao:
            "Carregamento extremamente rápido para aumentar as conversões.",
          image: "/assets/technologies/nextjs-original.svg",
        },

        {
          nome: "React",
          descricao: "Interface moderna e dinâmica.",
          image: "/assets/technologies/react-original.svg",
        },

        {
          nome: "TypeScript",
          descricao: "Maior segurança e estabilidade.",
          image: "/assets/technologies/typescript-original.svg",
        },

        {
          nome: "Tailwind CSS",
          descricao: "Design moderno e totalmente responsivo.",
          image: "/assets/technologies/tailwindcss-original-wordmark.svg",
        },

        {
          nome: "Node.js",
          descricao:
            "Backend robusto para integrações e processamento de pedidos.",
          image: "/assets/technologies/nodejs-original.svg",
        },
      ],
    },

    portfolio: {
      title: "Lojas Virtuais Desenvolvidas",

      subtitle:
        "Conheça alguns projetos desenvolvidos para empresas que decidiram vender pela internet.",

      items: [],
    },

    pricing: {
      title: "Quanto custa uma Loja Virtual?",

      subtitle:
        "Uma única venda pode pagar boa parte do investimento em uma loja virtual profissional.",

      cards: [
        {
          titulo: "Loja Virtual Essencial",

          condicaoPagamento: "A partir de",

          preco: "R$ 2.497",

          parcela: "Parcele em até 6x",

          descricao:
            "Ideal para pequenas empresas que desejam começar a vender online.",

          itens: [
            "Cadastro de produtos",
            "Carrinho",
            "Checkout",
            "WhatsApp",
            "SEO",
          ],

          ctaBtn: "Solicitar orçamento",
        },

        {
          titulo: "Loja Virtual Premium",

          condicaoPagamento: "A partir de",

          preco: "R$ 4.497",

          parcela: "Parcele em até 6x",

          destaque: true,

          descricao:
            "Ideal para empresas que desejam uma operação completa de e-commerce.",

          itens: [
            "Painel Administrativo",
            "Controle de Estoque",
            "Pedidos",
            "Pix",
            "Cartão",
            "Frete",
            "SEO",
            "Escalável",
          ],

          ctaBtn: "Quero esta opção",
        },

        {
          titulo: "Oferta Especial",

          condicaoPagamento: "Por apenas",

          preco: "R$ 1.997",

          parcela: "Pagamento à vista",

          promocao: true,

          descricao:
            "Oferta exclusiva para pequenos empreendedores iniciarem suas vendas online.",

          itens: [
            "Loja Virtual",
            "Carrinho",
            "Checkout",
            "WhatsApp",
            "Entrega rápida",
          ],

          ctaBtn: "Quero aproveitar",
        },
      ],
    },

    payment: {
      title: "...",
      subtitle: "...",
      methods: [],
      trust: [],
    },

    clients: {
      title: "Empresas que confiaram no Clintin dos Sites",

      subtitle:
        "Conheça algumas empresas que escolheram nossa equipe para desenvolver sua loja virtual.",

      items: [],
    },

    process: {
      title: "Como desenvolvemos sua Loja Virtual?",

      subtitle: "Você acompanha todas as etapas até sua loja começar a vender.",

      items: [
        {
          titulo: "Planejamento",
          descricao: "Definimos estrutura, categorias e funcionalidades.",
          icon: "MessageCircle",
        },

        {
          titulo: "Design",
          descricao: "Criamos um layout moderno focado em vendas.",
          icon: "PenTool",
        },

        {
          titulo: "Desenvolvimento",
          descricao: "Programamos toda a loja e realizamos integrações.",
          icon: "Code2",
        },

        {
          titulo: "Publicação",
          descricao: "Sua loja vai ao ar pronta para receber pedidos.",
          icon: "Rocket",
        },
      ],
    },

    faq: {
      title: "Perguntas Frequentes",

      subtitle: "As principais dúvidas antes de contratar uma loja virtual.",

      items: [
        {
          pergunta: "Posso vender para todo o Brasil?",
          resposta:
            "Sim. Sua loja poderá receber pedidos de qualquer cidade do país.",
        },

        {
          pergunta: "Aceita Pix e Cartão?",
          resposta: "Sim. Podemos integrar os principais meios de pagamento.",
        },

        {
          pergunta: "Consigo cadastrar produtos sozinho?",
          resposta:
            "Sim. Você terá acesso ao painel administrativo para cadastrar produtos, preços e promoções.",
        },

        {
          pergunta: "A loja funciona no celular?",
          resposta: "Sim. Todas as lojas são totalmente responsivas.",
        },

        {
          pergunta: "Posso acompanhar os pedidos?",
          resposta:
            "Sim. Você terá um painel para visualizar pedidos, clientes e estoque.",
        },

        {
          pergunta: "Quanto tempo leva para ficar pronta?",
          resposta:
            "O prazo depende da complexidade do projeto, mas normalmente entre 7 e 20 dias úteis.",
        },
      ],
    },

    cta: {
      title: "Comece a vender online hoje mesmo",

      subtitle:
        "Leve sua empresa para a internet e venda todos os dias com uma loja virtual profissional.",

      button: "Quero minha Loja Virtual",

      whatsappMessage:
        "Olá! Gostaria de solicitar um orçamento para uma Loja Virtual.",
    },

    finalCTA: {
      title: "Sua Loja Virtual começa agora",

      plan: "Loja Virtual Premium",

      subtitle:
        "Venda para todo o Brasil com uma loja virtual moderna, rápida, segura e preparada para crescer junto com seu negócio.",

      oldPrice: "R$ 5.997",

      price: "R$ 3.997",

      installment: "ou em até 6x de R$ 666,17",

      badge: "🔥 Condição especial por tempo limitado",

      cta: "Solicitar orçamento pelo WhatsApp",

      whatsapp: "Olá! Quero desenvolver uma Loja Virtual para minha empresa.",

      benefits: [
        "Design exclusivo",
        "Carrinho de compras",
        "Checkout completo",
        "Pix",
        "Cartão de Crédito",
        "Painel Administrativo",
        "Controle de estoque",
        "SEO otimizado",
        "Responsiva",
        "Suporte após entrega",
      ],

      guarantee: "Suporte para orientar o uso da plataforma após a entrega.",

      urgency:
        "Estamos aceitando poucos projetos de e-commerce por mês para garantir máxima qualidade.",
    },
  },
  "desenvolvimento-mobile": {
    slug: "desenvolvimento-mobile",

    seo: {
      title: "Desenvolvimento de Aplicativos Android e iOS Sob Medida",

      description:
        "Criamos aplicativos profissionais para Android e iPhone. Desenvolvimento de apps para empresas, startups, delivery, marketplaces, sistemas internos e soluções personalizadas.",

      keywords: [
        "desenvolvimento de aplicativos",
        "criação de aplicativos",
        "aplicativo android",
        "aplicativo ios",
        "mobile developer",
        "desenvolvimento mobile",
        "empresa de aplicativos",
        "programador flutter",
        "criar aplicativo",
        "aplicativo para empresas",
        "aplicativo delivery",
        "app personalizado",
        "desenvolvimento flutter",
      ],

      image: "/desenvolvimento-mobile.webp",
    },

    hero: {
      title: "Transforme sua Ideia em um Aplicativo Profissional",

      subtitle:
        "Desenvolvemos aplicativos Android e iOS modernos, rápidos e preparados para crescer junto com seu negócio.",

      ctaBtn: "Quero desenvolver meu aplicativo",

      image: "/logo.png",
    },
    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Enviar para WhatsApp",

      whatsappMessage:
        "Olá! Gostaria de um orçamento para um aplicativo mobile.",

      servicos: [
        "Aplicativo Mobile Simples",
        "Aplicativo mobile Profissional",
        "Loja Virtual Oferta Especial",
      ],

      orcamentos: ["Até R$ 2.997", "R$ 2.997 a R$ 4.997", "Acima de R$ 4.997"],
    },

    pains: {
      title: "Sua empresa ainda não possui um aplicativo?",

      subtitle:
        "Enquanto seus concorrentes oferecem praticidade aos clientes através de aplicativos, sua empresa pode estar ficando para trás.",

      items: [
        {
          titulo: "Processos manuais",
          descricao:
            "Sua equipe perde tempo realizando tarefas que poderiam ser automatizadas por um aplicativo.",
        },

        {
          titulo: "Pouca praticidade",
          descricao:
            "Seus clientes precisam ligar ou enviar mensagens para realizar ações simples.",
        },

        {
          titulo: "Ideia parada",
          descricao:
            "Você possui uma excelente ideia de aplicativo, mas ainda não encontrou quem consiga desenvolvê-la.",
        },

        {
          titulo: "Baixa fidelização",
          descricao:
            "Sem um aplicativo, seu cliente depende apenas das redes sociais ou do navegador para acessar sua empresa.",
        },

        {
          titulo: "Perda para concorrentes",
          descricao:
            "Empresas que possuem aplicativos oferecem uma experiência muito mais profissional.",
        },

        {
          titulo: "Falta de escalabilidade",
          descricao:
            "Seu negócio cresce, mas seus processos continuam limitando esse crescimento.",
        },
      ],
    },

    benefits: {
      title: "Leve sua empresa para a palma da mão dos clientes",

      subtitle:
        "Aplicativos oferecem praticidade, aumentam a fidelização e permitem automatizar processos que antes consumiam horas de trabalho.",

      ctaButton: "Quero meu aplicativo",

      items: [
        {
          titulo: "Android e iPhone",
          descricao:
            "Um único projeto funcionando nas duas principais plataformas do mercado.",
        },

        {
          titulo: "Maior fidelização",
          descricao:
            "Clientes acessam sua empresa com apenas um toque na tela.",
        },

        {
          titulo: "Automação",
          descricao:
            "Reduza processos manuais e aumente a produtividade da sua equipe.",
        },

        {
          titulo: "Notificações Push",
          descricao:
            "Envie promoções, novidades e lembretes diretamente para seus usuários.",
        },

        {
          titulo: "Escalabilidade",
          descricao: "Seu aplicativo cresce conforme sua empresa evolui.",
        },

        {
          titulo: "Design Profissional",
          descricao:
            "Interfaces modernas desenvolvidas para oferecer a melhor experiência possível.",
        },
      ],
    },

    technologies: {
      title: "Tecnologias modernas para aplicativos profissionais",

      subtitle:
        "Utilizamos ferramentas modernas para criar aplicativos rápidos, seguros e preparados para crescer.",

      ctaButton: "Quero meu aplicativo",

      items: [
        {
          nome: "Flutter",
          descricao: "Um único código para Android e iOS.",
          image: "/assets/technologies/flutter-original.svg",
        },

        {
          nome: "Firebase",
          descricao:
            "Banco de dados, autenticação e notificações em tempo real.",
          image: "/assets/technologies/firebase-original.svg",
        },

        {
          nome: "Node.js",
          descricao: "Backend robusto para APIs e integrações.",
          image: "/assets/technologies/nodejs-original.svg",
        },

        {
          nome: "TypeScript",
          descricao: "Maior segurança durante o desenvolvimento.",
          image: "/assets/technologies/typescript-original.svg",
        },

        {
          nome: "REST API",
          descricao: "Integração com sistemas externos.",
          image: "/assets/technologies/api.svg",
        },
      ],
    },

    portfolio: {
      title: "Aplicativos Desenvolvidos",

      subtitle: "Conheça alguns aplicativos e sistemas mobile desenvolvidos.",

      items: [],
    },

    pricing: {
      title: "Quanto custa desenvolver um aplicativo?",

      subtitle:
        "O investimento depende das funcionalidades, mas um aplicativo pode reduzir custos, automatizar processos e aumentar significativamente o faturamento da sua empresa.",

      cards: [
        {
          titulo: "Aplicativo Essencial",

          condicaoPagamento: "A partir de",

          preco: "R$ 2.997",

          parcela: "Parcele em até 6x",

          descricao:
            "Ideal para empresas que desejam lançar seu primeiro aplicativo.",

          itens: [
            "Android",
            "iPhone",
            "Login",
            "Painel Administrativo",
            "Publicação",
          ],

          ctaBtn: "Solicitar orçamento",
        },

        {
          titulo: "Aplicativo Profissional",

          condicaoPagamento: "A partir de",

          preco: "R$ 4.997",

          parcela: "Parcele em até 6x",

          destaque: true,

          descricao:
            "Aplicativos completos para empresas, startups e negócios digitais.",

          itens: [
            "Android",
            "iOS",
            "Banco de Dados",
            "Notificações",
            "APIs",
            "Dashboard",
            "Escalável",
          ],

          ctaBtn: "Quero esta opção",
        },

        {
          titulo: "Projeto Personalizado",

          condicaoPagamento: "Seu projeto desenvolvido",

          preco: "Sob Medida",

          parcela: "Valores a combinar",

          promocao: true,

          descricao:
            "Projetos exclusivos desenvolvidos conforme as necessidades do cliente.",

          itens: ["Marketplace", "Delivery", "ERP", "CRM", "Integrações"],

          ctaBtn: "Solicitar orçamento",
        },
      ],
    },

    payment: {
      title: "...",
      subtitle: "...",
      methods: [],
      trust: [],
    },

    clients: {
      title: "Empresas que confiaram no Clintin dos Sites",

      subtitle:
        "Conheça algumas empresas que desenvolveram aplicativos conosco.",

      items: [],
    },

    process: {
      title: "Como funciona o desenvolvimento?",

      subtitle:
        "Você acompanha todas as etapas do projeto até a publicação nas lojas.",

      items: [
        {
          titulo: "Levantamento de Requisitos",
          descricao:
            "Entendemos sua ideia e definimos todas as funcionalidades.",
          icon: "MessageCircle",
        },

        {
          titulo: "Prototipação",
          descricao: "Criamos a experiência visual antes da programação.",
          icon: "PenTool",
        },

        {
          titulo: "Desenvolvimento",
          descricao:
            "Construímos todo o aplicativo utilizando tecnologias modernas.",
          icon: "Code2",
        },

        {
          titulo: "Publicação",
          descricao: "Publicamos seu aplicativo na Google Play e App Store.",
          icon: "Rocket",
        },
      ],
    },

    faq: {
      title: "Perguntas Frequentes",

      subtitle: "As principais dúvidas antes de desenvolver um aplicativo.",

      items: [
        {
          pergunta: "O aplicativo funciona em Android e iPhone?",
          resposta:
            "Sim. Desenvolvemos aplicativos compatíveis com as duas plataformas.",
        },

        {
          pergunta: "Vocês publicam nas lojas?",
          resposta:
            "Sim. Realizamos toda a publicação na Google Play e App Store.",
        },

        {
          pergunta: "Meu aplicativo terá painel administrativo?",
          resposta:
            "Sim, caso o projeto necessite, desenvolvemos um painel completo para gerenciamento.",
        },

        {
          pergunta: "Posso integrar sistemas existentes?",
          resposta:
            "Sim. Podemos integrar APIs, ERPs, CRMs, gateways de pagamento e diversos outros serviços.",
        },

        {
          pergunta: "Quanto tempo leva para desenvolver?",
          resposta:
            "O prazo varia conforme a complexidade, normalmente entre 30 e 120 dias.",
        },

        {
          pergunta: "Depois posso adicionar novas funcionalidades?",
          resposta:
            "Sim. O aplicativo pode evoluir continuamente conforme seu negócio cresce.",
        },
      ],
    },

    cta: {
      title: "Sua ideia merece sair do papel",

      subtitle:
        "Vamos transformar seu projeto em um aplicativo profissional para Android e iOS.",

      button: "Quero desenvolver meu aplicativo",

      whatsappMessage:
        "Olá! Gostaria de desenvolver um aplicativo Android e iOS.",
    },

    finalCTA: {
      title: "Comece hoje o desenvolvimento do seu aplicativo",

      plan: "Aplicativo Android + iOS",

      subtitle:
        "Criamos aplicativos completos para empresas, startups e empreendedores que desejam inovar, automatizar processos e oferecer uma experiência moderna aos seus clientes.",

      oldPrice: "R$ 12.997",

      price: "Sob orçamento",

      installment: "Parcelamento disponível",

      badge: "🚀 Atendimento personalizado para cada projeto",

      cta: "Solicitar orçamento pelo WhatsApp",

      whatsapp:
        "Olá! Gostaria de solicitar um orçamento para desenvolver um aplicativo Android e iOS.",

      benefits: [
        "Android e iOS",
        "Flutter",
        "Painel Administrativo",
        "Banco de Dados",
        "Login e Cadastro",
        "Notificações Push",
        "Integração com APIs",
        "Google Play",
        "App Store",
        "Suporte pós-entrega",
      ],

      guarantee:
        "Acompanhamento durante o desenvolvimento e suporte após a entrega do projeto.",

      urgency:
        "Projetos mobile são desenvolvidos sob demanda. Consulte disponibilidade para início.",
    },
  },
  "sistema-web-personalizado": {
    slug: "sistema-web-personalizado",

    seo: {
      title: "Desenvolvimento de Sistemas Web Personalizados",

      description:
        "Criamos sistemas web personalizados para automatizar processos, controlar empresas e aumentar a produtividade. Desenvolvimento sob medida para qualquer segmento.",

      keywords: [
        "sistema web",
        "desenvolvimento de sistema",
        "sistema personalizado",
        "software sob medida",
        "ERP personalizado",
        "CRM personalizado",
        "sistema online",
        "painel administrativo",
        "programador full stack",
        "automação empresarial",
        "desenvolvimento web",
        "software empresarial",
      ],

      image: "/sistema-web.webp",
    },

    hero: {
      title: "Sistema Web Personalizado para Automatizar sua Empresa",

      subtitle:
        "Desenvolvemos sistemas online sob medida para eliminar processos manuais, aumentar a produtividade e facilitar a gestão do seu negócio.",

      ctaBtn: "Quero automatizar minha empresa",

      image: "/logo.png",
    },
    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Enviar para WhatsApp",

      whatsappMessage:
        "Olá! Gostaria de um orçamento para um sistema web personalizado.",

      servicos: ["Sistema Web Básico", "Sistema Web Empresarial"],

      orcamentos: ["A partir R$ 4.497", "Valor sob medida"],
    },
    pains: {
      title: "Sua empresa enfrenta algum destes problemas?",

      subtitle:
        "Se você respondeu SIM para alguma destas situações, provavelmente já está perdendo tempo e dinheiro.",

      items: [
        {
          titulo: "Controle feito em planilhas",

          descricao:
            "Sua equipe perde horas atualizando planilhas e mesmo assim as informações ficam desorganizadas.",
        },

        {
          titulo: "Processos manuais",

          descricao:
            "Tarefas repetitivas ocupam tempo da equipe e aumentam as chances de erros.",
        },

        {
          titulo: "Informações espalhadas",

          descricao:
            "Cada funcionário utiliza um sistema diferente, dificultando o controle da empresa.",
        },

        {
          titulo: "Falta de controle financeiro",

          descricao:
            "Você não consegue acompanhar vendas, despesas, clientes e resultados em tempo real.",
        },

        {
          titulo: "Baixa produtividade",

          descricao:
            "A equipe perde tempo procurando informações ao invés de produzir.",
        },

        {
          titulo: "Sistema pronto não atende sua empresa",

          descricao:
            "Você já tentou usar softwares prontos, mas nenhum atende exatamente às necessidades do seu negócio.",
        },
      ],
    },

    benefits: {
      title: "Imagine sua empresa funcionando de forma inteligente",

      subtitle:
        "Um sistema desenvolvido exclusivamente para sua empresa transforma a forma como você trabalha.",

      ctaButton: "Quero meu sistema",

      items: [
        {
          titulo: "Tudo centralizado",

          descricao:
            "Clientes, vendas, estoque, financeiro e relatórios em um único lugar.",
        },

        {
          titulo: "Mais produtividade",

          descricao:
            "Sua equipe realiza tarefas em minutos que antes levavam horas.",
        },

        {
          titulo: "Menos erros",

          descricao:
            "Os processos passam a ser automatizados, reduzindo falhas humanas.",
        },

        {
          titulo: "Acesso de qualquer lugar",

          descricao:
            "Seu sistema funciona pela internet e pode ser acessado no computador, tablet ou celular.",
        },

        {
          titulo: "Sistema exclusivo",

          descricao:
            "Nada de adaptações. O software é desenvolvido exatamente para a realidade da sua empresa.",
        },

        {
          titulo: "Escalável",

          descricao:
            "Seu sistema cresce junto com a empresa, recebendo novas funcionalidades sempre que necessário.",
        },
      ],
    },

    technologies: {
      title: "Tecnologia moderna para sistemas de alta performance",

      subtitle:
        "Utilizamos tecnologias modernas para construir sistemas rápidos, seguros, escaláveis e preparados para crescer junto com sua empresa.",

      ctaButton: "Solicitar orçamento",

      items: [
        {
          nome: "Next.js",
          descricao: "Interface moderna e extremamente rápida.",
          image: "/assets/technologies/nextjs-original.svg",
        },
        {
          nome: "React",
          descricao: "Experiência dinâmica para o usuário.",
          image: "/assets/technologies/react-original.svg",
        },
        {
          nome: "TypeScript",
          descricao: "Código seguro e altamente escalável.",
          image: "/assets/technologies/typescript-original.svg",
        },
        {
          nome: "Node.js",
          descricao: "Back-end robusto para aplicações empresariais.",
          image: "/assets/technologies/nodejs-original.svg",
        },
        {
          nome: "PostgreSQL",
          descricao: "Banco de dados confiável para grandes volumes.",
          image: "/assets/technologies/postgresql-original.svg",
        },
        {
          nome: "Docker",
          descricao: "Implantação segura e escalável.",
          image: "/assets/technologies/docker-original.svg",
        },
      ],
    },

    pricing: {
      title: "Quanto custa um sistema personalizado?",

      subtitle:
        "Cada empresa possui necessidades diferentes. O investimento depende das funcionalidades desejadas.",

      cards: [
        {
          titulo: "Sistema Básico",

          condicaoPagamento: "A partir de",

          preco: "R$ 4.997",

          parcela: "até 10x",

          descricao:
            "Ideal para pequenas empresas que desejam automatizar processos específicos.",

          itens: [
            "Login de usuários",
            "Painel administrativo",
            "Banco de dados",
            "Relatórios",
            "Hospedagem",
          ],

          ctaBtn: "Solicitar orçamento",
        },

        {
          titulo: "Sistema Empresarial",

          destaque: true,

          condicaoPagamento: "Sob orçamento",

          preco: "Personalizado",

          descricao:
            "Projetos completos desenvolvidos conforme a necessidade da empresa.",

          itens: [
            "ERP",
            "CRM",
            "Financeiro",
            "Estoque",
            "Integrações",
            "APIs",
            "Multiusuários",
          ],

          ctaBtn: "Quero conversar sobre meu projeto",
        },
      ],
    },

    faq: {
      title: "Perguntas Frequentes",

      subtitle:
        "Algumas dúvidas comuns antes de desenvolver um sistema personalizado.",

      items: [
        {
          pergunta: "O sistema funciona no celular?",

          resposta:
            "Sim. Desenvolvemos sistemas totalmente responsivos que funcionam em computadores, tablets e smartphones.",
        },

        {
          pergunta: "Posso adicionar novas funcionalidades futuramente?",

          resposta:
            "Sim. O sistema é desenvolvido para crescer junto com sua empresa.",
        },

        {
          pergunta: "É possível integrar com outros sistemas?",

          resposta:
            "Sim. Podemos integrar APIs, gateways de pagamento, ERPs, CRMs, WhatsApp, Google e diversos outros serviços.",
        },

        {
          pergunta: "Quem é dono do sistema?",

          resposta:
            "Após o desenvolvimento, o sistema pertence à sua empresa conforme o contrato.",
        },

        {
          pergunta: "Existe suporte?",

          resposta:
            "Sim. Oferecemos suporte técnico e planos de manutenção contínua.",
        },
      ],
    },

    cta: {
      title: "Chegou a hora de automatizar sua empresa",

      subtitle:
        "Pare de perder tempo com processos manuais. Solicite agora um orçamento para desenvolver um sistema exclusivo para seu negócio.",

      button: "Quero meu sistema",

      whatsappMessage:
        "Olá! Gostaria de desenvolver um sistema web personalizado para minha empresa.",
    },

    finalCTA: {
      title: "Transforme sua empresa com um sistema sob medida",

      plan: "Sistema Web Personalizado",

      subtitle:
        "Vamos desenvolver um software exclusivo para automatizar processos, reduzir custos e aumentar a produtividade da sua equipe.",

      oldPrice: "Projetos a partir de R$ 8.997",

      price: "Orçamento Personalizado",

      installment: "Parcelamento disponível",

      badge: "Análise gratuita do projeto",

      cta: "Solicitar orçamento personalizado",

      whatsapp:
        "Olá! Gostaria de conversar sobre um sistema web personalizado para minha empresa.",

      benefits: [
        "Sistema exclusivo",
        "Painel administrativo",
        "Banco de dados",
        "Integrações com APIs",
        "Controle de usuários",
        "Relatórios inteligentes",
        "Hospedagem",
        "Suporte especializado",
      ],

      guarantee:
        "Desenvolvimento totalmente personalizado com acompanhamento durante todas as etapas.",

      urgency:
        "Agende uma reunião gratuita e descubra como automatizar sua empresa.",
    },
  },
  "manutencao-sites-e-sistemas": {
    slug: "manutencao-sites-sistemas",

    seo: {
      title: "Manutenção de Sites e Sistemas | Suporte Técnico Especializado",

      description:
        "Corrigimos erros, realizamos atualizações, melhorias, otimizações e manutenção preventiva em sites, sistemas web, lojas virtuais e aplicações personalizadas.",

      keywords: [
        "manutenção de sites",
        "suporte para site",
        "corrigir site",
        "corrigir sistema",
        "atualização de site",
        "manutenção wordpress",
        "programador para manutenção",
        "suporte técnico web",
        "manutenção sistema web",
        "desenvolvedor full stack",
        "otimização de site",
        "correção de bugs",
      ],

      image: "/manutencao-sites.webp",
    },

    hero: {
      title: "Seu Site ou Sistema Precisa de Manutenção?",

      subtitle:
        "Corrigimos erros, realizamos melhorias, atualizações e oferecemos suporte contínuo para manter seu projeto funcionando com segurança e alta performance.",

      ctaBtn: "Solicitar análise gratuita",

      image: "/logo.png",
    },
    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Enviar para WhatsApp",

      whatsappMessage: "Olá! Gostaria de fazer uma menutenção no meu site.",

      servicos: ["Manutenção em site", "Manutenção em sistema"],

      orcamentos: ["Orçamento sob medida"],
    },

    pains: {
      title: "Esses problemas parecem familiares?",

      subtitle:
        "Muitas empresas perdem clientes todos os dias porque seus sites ou sistemas apresentam falhas que poderiam ser resolvidas rapidamente.",

      items: [
        {
          titulo: "Site lento",

          descricao:
            "Seu site demora para carregar e os visitantes desistem antes mesmo de visualizar seu conteúdo.",
        },

        {
          titulo: "Erros constantes",

          descricao:
            "Páginas quebradas, formulários que não funcionam, links com erro e problemas que prejudicam seus clientes.",
        },

        {
          titulo: "Desenvolvedor desapareceu",

          descricao:
            "Quem criou seu projeto não responde mais e você não sabe como resolver os problemas.",
        },

        {
          titulo: "Sistema desatualizado",

          descricao:
            "Seu sistema utiliza versões antigas e pode apresentar falhas de segurança.",
        },

        {
          titulo: "Falta de suporte",

          descricao:
            "Sempre que surge um problema você precisa procurar outro profissional.",
        },

        {
          titulo: "Medo de perder informações",

          descricao:
            "Você não possui backups nem sabe se seus dados estão realmente protegidos.",
        },
      ],
    },

    benefits: {
      title: "Deixe seu projeto sempre funcionando perfeitamente",

      subtitle:
        "Nossa manutenção garante estabilidade, segurança e evolução contínua para seu site ou sistema.",

      ctaButton: "Quero suporte especializado",

      items: [
        {
          titulo: "Correção rápida de erros",

          descricao:
            "Identificamos e solucionamos problemas antes que prejudiquem seu negócio.",
        },

        {
          titulo: "Atualizações constantes",

          descricao:
            "Mantemos bibliotecas, frameworks e dependências sempre atualizados.",
        },

        {
          titulo: "Mais segurança",

          descricao:
            "Aplicamos boas práticas para reduzir vulnerabilidades e proteger seus dados.",
        },

        {
          titulo: "Melhor desempenho",

          descricao:
            "Otimizamos velocidade, banco de dados e carregamento das páginas.",
        },

        {
          titulo: "Novas funcionalidades",

          descricao:
            "Seu projeto continua evoluindo conforme as necessidades da empresa.",
        },

        {
          titulo: "Suporte especializado",

          descricao:
            "Você conta com um desenvolvedor para acompanhar o crescimento do seu projeto.",
        },
      ],
    },

    technologies: {
      title: "Tecnologias que damos suporte",

      subtitle:
        "Realizamos manutenção em projetos desenvolvidos com diversas tecnologias modernas do mercado.",

      ctaButton: "Solicitar suporte",

      items: [
        {
          nome: "HTML5",
          descricao: "Correção estrutural e melhorias.",
          image: "/assets/technologies/html5-plain-wordmark.svg",
        },
        {
          nome: "CSS3",
          descricao: "Correção de layout e responsividade.",
          image: "/assets/technologies/css3-plain-wordmark.svg",
        },
        {
          nome: "JavaScript",
          descricao: "Correção de funcionalidades e scripts.",
          image: "/assets/technologies/javascript-original.svg",
        },
        {
          nome: "PHP",
          descricao: "Correção de sistemas e sites dinâmicos.",
          image: "/assets/technologies/php-original.svg",
        },
        {
          nome: "React",
          descricao: "Atualizações e novas funcionalidades.",
          image: "/assets/technologies/react-original.svg",
        },
        {
          nome: "Next.js",
          descricao: "Correções, SEO e otimização.",
          image: "/assets/technologies/nextjs-original.svg",
        },
        {
          nome: "TypeScript",
          descricao: "Correção de bugs e melhorias.",
          image: "/assets/technologies/typescript-original.svg",
        },
        {
          nome: "MySQL",
          descricao: "Otimização e manutenção de banco de dados.",
          image: "/assets/technologies/mysql-original.svg",
        },
      ],
    },

    pricing: {
      title: "Quanto custa a manutenção?",

      subtitle:
        "Cada projeto possui necessidades diferentes. Trabalhamos com serviços avulsos e planos mensais.",

      cards: [
        {
          titulo: "Atendimento Avulso",

          condicaoPagamento: "A partir de",

          preco: "R$ 197",

          descricao: "Ideal para pequenas correções e ajustes pontuais.",

          itens: [
            "Correção de bugs",
            "Alterações no layout",
            "Atualizações",
            "Otimização",
            "Suporte técnico",
          ],

          ctaBtn: "Solicitar orçamento",
        },

        {
          titulo: "Plano de Manutenção",

          destaque: true,

          condicaoPagamento: "A partir de",

          preco: "R$ 497/mês",

          descricao:
            "Acompanhamento contínuo para manter seu projeto sempre atualizado.",

          itens: [
            "Atualizações mensais",
            "Correções ilimitadas*",
            "Backup",
            "Monitoramento",
            "Suporte prioritário",
            "Relatórios",
          ],

          ctaBtn: "Quero contratar um plano",
        },
      ],
    },

    faq: {
      title: "Perguntas Frequentes",

      subtitle:
        "Esclareça as principais dúvidas antes de contratar a manutenção.",

      items: [
        {
          pergunta:
            "Vocês fazem manutenção em sites desenvolvidos por outros profissionais?",

          resposta:
            "Sim. Trabalhamos com projetos desenvolvidos por terceiros, independentemente da tecnologia utilizada.",
        },

        {
          pergunta: "Preciso contratar um plano mensal?",

          resposta:
            "Não. Também realizamos serviços avulsos para correções específicas.",
        },

        {
          pergunta: "Quanto tempo demora para corrigir um problema?",

          resposta:
            "Depende da complexidade da solicitação, mas muitos problemas são resolvidos no mesmo dia.",
        },

        {
          pergunta: "Vocês fazem backup antes das alterações?",

          resposta:
            "Sim. Sempre realizamos backup antes de qualquer modificação importante.",
        },

        {
          pergunta: "Meu sistema é antigo. Ainda é possível dar manutenção?",

          resposta:
            "Na maioria dos casos, sim. Primeiro realizamos uma análise técnica para identificar a melhor solução.",
        },
      ],
    },

    cta: {
      title: "Seu projeto merece acompanhamento profissional",

      subtitle:
        "Evite dores de cabeça com falhas, lentidão e problemas de segurança. Conte com um desenvolvedor especializado para manter seu site ou sistema sempre funcionando.",

      button: "Solicitar manutenção",

      whatsappMessage:
        "Olá! Gostaria de solicitar manutenção para meu site/sistema.",
    },

    finalCTA: {
      title: "Tenha um desenvolvedor cuidando do seu projeto",

      plan: "Plano de Manutenção",

      subtitle:
        "Receba suporte técnico especializado para manter seu site ou sistema atualizado, seguro e funcionando sem interrupções.",

      oldPrice: "Suporte avulso a partir de R$ 297",

      price: "Planos a partir de R$ 497/mês",

      installment: "Mensalidade fixa",

      badge: "Análise inicial gratuita",

      cta: "Solicitar diagnóstico do projeto",

      whatsapp:
        "Olá! Gostaria de uma análise e manutenção do meu site ou sistema.",

      benefits: [
        "Correção de bugs",
        "Atualizações constantes",
        "Backup",
        "Monitoramento",
        "Melhorias contínuas",
        "Mais segurança",
        "Otimização de desempenho",
        "Suporte especializado",
      ],

      guarantee:
        "Analisamos seu projeto antes de qualquer intervenção e apresentamos a melhor solução.",

      urgency:
        "Quanto antes os problemas forem corrigidos, menor será o risco de prejuízos ao seu negócio.",
    },
  },
  "manutencao-computadores-servidores": {
    slug: "manutencao-computadores-servidores",

    seo: {
      title:
        "Manutenção de Computadores e Servidores | Assistência Técnica Especializada",

      description:
        "Realizamos manutenção, formatação, upgrades, instalação de SSD, limpeza, remoção de vírus e suporte para computadores, notebooks e servidores empresariais.",

      keywords: [
        "manutenção de computadores",
        "assistência técnica",
        "formatação de computador",
        "computador lento",
        "manutenção notebook",
        "instalação SSD",
        "limpeza computador",
        "remoção de vírus",
        "suporte técnico",
        "manutenção servidor",
        "windows",
        "formatação de linux",
        "servidor empresarial",
        "formatação de computador",
      ],

      image: "/manutencao-computadores.webp",
    },

    hero: {
      title: "Seu Computador Está Lento ou Apresentando Problemas?",

      subtitle:
        "Realizamos manutenção preventiva e corretiva em computadores, notebooks e servidores para garantir mais desempenho, segurança e produtividade.",

      ctaBtn: "Solicitar atendimento",

      image: "/logo.png",
    },
    form: {
      title: "Solicite um orçamento",

      subtitle: "Preencha o formulário e receba uma proposta personalizada.",

      button: "Enviar para WhatsApp",

      whatsappMessage: "Olá! Gostaria de um orçamento para uma loja virtual.",

      servicos: [
        "Loja Virtual Profissional",
        "Loja Virtual Premium",
        "Loja Virtual Oferta Especial",
      ],

      orcamentos: [
        "A partir de R$120",
        "A partir de R$180",
        "A definir de acordo com a quantidade",
      ],
    },
    pains: {
      title: "Seu equipamento apresenta algum destes problemas?",

      subtitle: "Se você identificou alguma destas situações, podemos ajudar.",

      items: [
        {
          titulo: "Computador muito lento",

          descricao:
            "O sistema demora para iniciar, abrir programas ou realizar tarefas simples.",
        },

        {
          titulo: "Travamentos constantes",

          descricao:
            "O computador congela, reinicia sozinho ou apresenta tela azul.",
        },

        {
          titulo: "Vírus e malwares",

          descricao:
            "Seu equipamento está infectado e colocando seus dados em risco.",
        },

        {
          titulo: "Pouco espaço",

          descricao:
            "O HD está cheio e o computador já não possui desempenho suficiente.",
        },

        {
          titulo: "Servidor com falhas",

          descricao:
            "Sua empresa sofre interrupções por problemas na infraestrutura do servidor.",
        },

        {
          titulo: "Medo de perder arquivos",

          descricao:
            "Você não possui backup e teme perder documentos importantes.",
        },
      ],
    },

    benefits: {
      title: "Seu equipamento funcionando como novo",

      subtitle:
        "Realizamos uma manutenção completa para aumentar a vida útil do equipamento e melhorar significativamente seu desempenho.",

      ctaButton: "Quero um diagnóstico",

      items: [
        {
          titulo: "Muito mais velocidade",

          descricao:
            "Com upgrades e otimizações seu computador volta a trabalhar com alto desempenho.",
        },

        {
          titulo: "Mais segurança",

          descricao:
            "Removemos vírus, corrigimos falhas e protegemos seus dados.",
        },

        {
          titulo: "Atualização completa",

          descricao:
            "Sistema operacional, drivers e softwares sempre atualizados.",
        },

        {
          titulo: "Upgrade com SSD",

          descricao:
            "Transforme um computador lento em uma máquina muito mais rápida.",
        },

        {
          titulo: "Maior vida útil",

          descricao:
            "A manutenção preventiva reduz falhas e aumenta a durabilidade do equipamento.",
        },

        {
          titulo: "Suporte especializado",

          descricao:
            "Atendimento para usuários domésticos, empresas e servidores.",
        },
      ],
    },

    technologies: {
      title: "Serviços que realizamos",

      subtitle:
        "Oferecemos suporte completo para computadores, notebooks, servidores e infraestrutura de TI.",

      ctaButton: "Solicitar atendimento",

      items: [
        {
          nome: "Formatação",

          descricao:
            "Instalação limpa do Windows ou Linux com todos os drivers.",

          image: "/assets/services/windows.svg",
        },

        {
          nome: "Upgrade SSD",

          descricao: "Substituição de HD por SSD para aumentar a velocidade.",

          image: "/assets/services/ssd.svg",
        },

        {
          nome: "Limpeza Física",

          descricao: "Remoção de poeira e troca de pasta térmica.",

          image: "/assets/services/clean.svg",
        },

        {
          nome: "Remoção de Vírus",

          descricao: "Eliminação de malwares e proteção do sistema.",

          image: "/assets/services/security.svg",
        },

        {
          nome: "Backup",

          descricao: "Backup e recuperação de arquivos importantes.",

          image: "/assets/services/backup.svg",
        },

        {
          nome: "Servidores",

          descricao: "Configuração e manutenção de servidores Windows e Linux.",

          image: "/assets/services/server.svg",
        },

        {
          nome: "Rede",

          descricao:
            "Configuração de roteadores, switches e compartilhamentos.",

          image: "/assets/services/network.svg",
        },

        {
          nome: "Suporte Remoto",

          descricao: "Resolução rápida de diversos problemas sem sair de casa.",

          image: "/assets/services/remote.svg",
        },
      ],
    },

    pricing: {
      title: "Quanto custa a manutenção?",

      subtitle:
        "O valor depende do tipo de problema e do equipamento. Fazemos uma análise antes do serviço.",

      cards: [
        {
          titulo: "Manutenção Básica",

          condicaoPagamento: "A partir de",

          preco: "R$ 120",

          descricao:
            "Ideal para computadores com lentidão, vírus e pequenos problemas.",

          itens: [
            "Limpeza",
            "Otimização",
            "Atualizações",
            "Remoção de vírus",
            "Diagnóstico",
          ],

          ctaBtn: "Solicitar orçamento",
        },

        {
          titulo: "Formatação Completa",

          destaque: true,

          condicaoPagamento: "A partir de",

          preco: "R$ 180",

          descricao:
            "Instalação limpa do sistema operacional com drivers e programas essenciais.",

          itens: [
            "Windows ou Linux",
            "Drivers",
            "Pacote Office",
            "Backup*",
            "Atualizações",
          ],

          ctaBtn: "Agendar formatação",
        },

        {
          titulo: "Servidores",

          condicaoPagamento: "Sob orçamento",

          preco: "Personalizado",

          descricao: "Projetos empresariais e contratos de suporte.",

          itens: ["Windows Server", "Linux", "Backup", "Rede", "Monitoramento"],

          ctaBtn: "Solicitar orçamento",
        },
      ],
    },

    faq: {
      title: "Perguntas Frequentes",

      subtitle:
        "Veja algumas dúvidas comuns sobre manutenção de computadores e servidores.",

      items: [
        {
          pergunta: "Vocês fazem atendimento em domicílio?",

          resposta:
            "Sim. Dependendo da localização e do serviço, realizamos atendimento no local.",
        },

        {
          pergunta: "Meus arquivos serão apagados?",

          resposta:
            "Sempre orientamos realizar backup antes da formatação e podemos fazer esse procedimento para você.",
        },

        {
          pergunta: "Vale a pena trocar HD por SSD?",

          resposta:
            "Sim. Em muitos casos o ganho de desempenho é superior a 300%, tornando o computador muito mais rápido.",
        },

        {
          pergunta: "Vocês atendem empresas?",

          resposta:
            "Sim. Prestamos suporte para empresas, escritórios, consultórios e servidores.",
        },

        {
          pergunta: "Também trabalham com Linux?",

          resposta:
            "Sim. Prestamos suporte tanto para Windows quanto para diversas distribuições Linux.",
        },
      ],
    },

    cta: {
      title: "Não espere o problema piorar",

      subtitle:
        "Solicite uma avaliação técnica e descubra a melhor solução para seu computador ou servidor.",

      button: "Solicitar atendimento",

      whatsappMessage:
        "Olá! Gostaria de solicitar manutenção para meu computador/servidor.",
    },

    finalCTA: {
      title: "Seu equipamento pode voltar a funcionar como novo",

      plan: "Assistência Técnica Especializada",

      subtitle:
        "Conte com um técnico especializado para resolver problemas, aumentar o desempenho e garantir a segurança dos seus equipamentos.",

      oldPrice: "Diagnóstico tradicional",

      price: "Avaliação Inicial",

      installment: "Consulte disponibilidade",

      badge: "Diagnóstico técnico",

      cta: "Solicitar atendimento agora",

      whatsapp:
        "Olá! Gostaria de solicitar uma avaliação para meu computador ou servidor.",

      benefits: [
        "Diagnóstico especializado",
        "Formatação completa",
        "Upgrade SSD",
        "Remoção de vírus",
        "Backup",
        "Manutenção preventiva",
        "Suporte para servidores",
        "Atendimento empresarial",
      ],

      guarantee:
        "Todos os serviços são realizados com transparência e foco na preservação dos seus dados.",

      urgency:
        "Quanto antes o problema for corrigido, menores são os riscos de perda de dados e falhas mais graves.",
    },
  },
};
