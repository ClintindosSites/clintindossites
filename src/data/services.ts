import { Service } from "@/types/service";

export const services: Record<string, Service> = {
  "criacao-de-sites": {
    slug: "criacao-de-sites",
    title: "Criação de Sites Profissionais",
    h1: "Criação de Sites Profissionais para Empresas",
    description:
      "Desenvolvimento de sites profissionais, rápidos e responsivos para empresas e empreendedores.",
    image: "/images/criacao-sites.webp",
    keywords: [
      "criação de sites",
      "desenvolvimento de sites",
      "site profissional",
    ],
    cta: "Quero um site profissional para minha empresa",
    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    pains: [
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
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    benefits: [
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
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
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
    portfolioTitle: "Confira projetos já realizados",
    portfolioSubtitle:
      "Projetos que já estão no ar sem fronteira de faturamento.",
    portfolio: [
      {
        titulo: "Websites para Construtores",
        itens: [
          {
            titulo: "Vidrosa",
            link: "https://www.vidrosa.com.br",
            img: "/assets/images/vidrosa-site.webp",
          },
          {
            titulo: "GM Glass",
            link: "https://www.gmglass.com.br",
            img: "/assets/images/gmglass-site.webp",
          },
        ],
      },
    ],
    pricingTitle: "E quanto custa um site?",
    pricingSubtitle:
      "Investir em um site profissional custa menos do que perder clientes todos os dias para os seus concorrentes.",
    pricing: [
      {
        titulo: "Site Essencial",
        preco: "R$ 1.297",
        parcela: "12x de R$ 129,90",
        descricao:
          "Ideal para empresas que precisam de presença profissional na internet.",
        itens: [
          "Até 5 páginas",
          "SEO básico",
          "WhatsApp",
          "Formulário",
          "Responsivo",
        ],
        cta: "Quero comprar meu site hoje mesmo",
      },

      {
        titulo: "Site Profissional",
        preco: "R$ 2.997",
        parcela: "12x de R$ 399,70",
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
        cta: "Solicitar Orçamento pelo WhatsApp",
      },

      {
        titulo: "Oferta Especial",
        preco: "R$ 897",
        parcela: "12x de R$ 89,90",
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
        cta: "Saiba mais sobre a promoção",
        href: "/promocao/oferta-criacao-de-sites",
      },
    ],
    objectionsTitle: "Ainda está com alguma dúvida?",

    objectionsSubtitle:
      "Estas são algumas das perguntas mais comuns antes de contratar um site profissional.",

    objections: [
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

  "criacao-de-sites-bh": {
    slug: "criacao-de-sites-bh",
    title: "Criação de Sites em Belo Horizonte",
    h1: "Criação de Sites em Belo Horizonte e Região",
    description:
      "Desenvolvemos sites profissionais para empresas de Belo Horizonte, Contagem, Betim e toda a região metropolitana.",
    image: "/images/criacao-sites-bh.webp",
    keywords: [
      "criação de sites bh",
      "site em belo horizonte",
      "desenvolvedor web bh",
    ],
    cta: "Quero criar um site em Belo Horizonte",
    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
      {
        nome: "Next.js",
        descricao:
          "Framework moderno utilizado para criar sites rápidos, seguros e otimizados para o Google.",
      },
      {
        nome: "React",
        descricao:
          "Biblioteca JavaScript utilizada para criar interfaces modernas e interativas.",
      },
      {
        nome: "TypeScript",
        descricao: "Traz mais segurança e organização ao código do projeto.",
      },
      {
        nome: "Tailwind CSS",
        descricao:
          "Permite criar layouts modernos, responsivos e com alta performance.",
      },
    ],
  },

  "landing-page": {
    slug: "landing-page",
    title: "Criação de Landing Pages",
    h1: "Landing Pages que Geram Leads e Vendas",
    description:
      "Landing pages profissionais para campanhas no Google Ads e Facebook Ads.",
    image: "/images/landing-page.webp",
    keywords: [
      "landing page",
      "criar landing page",
      "landing page para vendas",
    ],
    cta: "Quero uma Landing Page que gere mais clientes",
    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    pains: [
      {
        titulo: "Anúncios não geram resultados",
        descricao:
          "Você investe em tráfego pago, mas os visitantes não entram em contato.",
      },
      {
        titulo: "Poucos leads",
        descricao:
          "Seu negócio recebe poucas solicitações de orçamento e poucas oportunidades de venda.",
      },
      {
        titulo: "Alta taxa de desistência",
        descricao:
          "As pessoas entram na página e saem sem realizar nenhuma ação.",
      },
      {
        titulo: "Baixo retorno do investimento",
        descricao:
          "Você está gastando com anúncios e não consegue transformar visitas em clientes.",
      },
    ],
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
      {
        nome: "Next.js",
        descricao:
          "Framework moderno utilizado para criar sites rápidos, seguros e otimizados para o Google.",
      },
      {
        nome: "React",
        descricao:
          "Biblioteca JavaScript utilizada para criar interfaces modernas e interativas.",
      },
      {
        nome: "TypeScript",
        descricao: "Traz mais segurança e organização ao código do projeto.",
      },
      {
        nome: "Tailwind CSS",
        descricao:
          "Permite criar layouts modernos, responsivos e com alta performance.",
      },
    ],
  },
  "desenvolvimento-loja-virtual": {
    slug: "criacao-loja-virtual",
    title: "Criação de Loja Virtual",
    h1: "Loja Virtual Profissional para Seu Negócio",
    description:
      "Criação de e-commerce profissional integrado com meios de pagamento e entrega.",
    image: "/images/loja-virtual.webp",
    keywords: ["loja virtual", "ecommerce", "criação de loja virtual"],
    cta: "Quero vender pela internet com uma loja virtual",
    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
      {
        nome: "Next.js",
        descricao:
          "Framework moderno utilizado para criar sites rápidos, seguros e otimizados para o Google.",
      },
      {
        nome: "React",
        descricao:
          "Biblioteca JavaScript utilizada para criar interfaces modernas e interativas.",
      },
      {
        nome: "TypeScript",
        descricao: "Traz mais segurança e organização ao código do projeto.",
      },
      {
        nome: "Tailwind CSS",
        descricao:
          "Permite criar layouts modernos, responsivos e com alta performance.",
      },
    ],
  },
  "desenvolvimento-app-android": {
    slug: "desenvolvimento-app-android",
    title: "Desenvolvimento de Aplicativos Android",
    h1: "Criação de Aplicativos para Android",
    description:
      "Desenvolvimento de aplicativos Android sob medida para empresas e startups.",
    image: "/images/app-android.webp",
    keywords: [
      "aplicativo android",
      "desenvolvimento android",
      "criar aplicativo",
    ],

    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    cta: "Quero desenvolver um aplicativo Android",
    pains: [
      {
        titulo: "Poucas vendas",
        descricao:
          "Seu negócio depende apenas do comércio local e não consegue crescer.",
      },
      {
        titulo: "Loja fechada fora do horário",
        descricao:
          "Você perde vendas porque seu negócio não funciona 24 horas por dia.",
      },
      {
        titulo: "Alcance limitado",
        descricao:
          "Seus produtos poderiam vender em todo o Brasil, mas ninguém consegue encontrá-los.",
      },
      {
        titulo: "Dependência das redes sociais",
        descricao:
          "Você depende exclusivamente do Instagram e do WhatsApp para vender.",
      },
    ],
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
      {
        nome: "Next.js",
        descricao:
          "Framework moderno utilizado para criar sites rápidos, seguros e otimizados para o Google.",
      },
      {
        nome: "React",
        descricao:
          "Biblioteca JavaScript utilizada para criar interfaces modernas e interativas.",
      },
      {
        nome: "TypeScript",
        descricao: "Traz mais segurança e organização ao código do projeto.",
      },
      {
        nome: "Tailwind CSS",
        descricao:
          "Permite criar layouts modernos, responsivos e com alta performance.",
      },
    ],
  },
  "desenvolvimento-app-android-ios": {
    slug: "desenvolvimento-android-ios",
    title: "Desenvolvimento de Aplicativos Android e iOS",
    h1: "Aplicativos Android e iPhone para Empresas",
    description:
      "Desenvolvimento de aplicativos multiplataforma para Android e iOS.",
    image: "/images/app-ios.webp",
    keywords: ["aplicativo ios", "app android e ios", "criação de aplicativos"],
    cta: "Quero criar um aplicativo para Android e iPhone",
    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    pains: [
      {
        titulo: "Processos manuais",
        descricao:
          "Sua empresa perde tempo com atividades que poderiam ser automatizadas.",
      },
      {
        titulo: "Falta de praticidade para os clientes",
        descricao:
          "Seus clientes gostariam de resolver tudo pelo celular, mas você não oferece essa facilidade.",
      },
      {
        titulo: "Perda de competitividade",
        descricao:
          "Seus concorrentes já oferecem soluções digitais mais modernas.",
      },
      {
        titulo: "Dificuldade para crescer",
        descricao:
          "Seu negócio precisa de tecnologia para atender mais clientes e escalar.",
      },
    ],
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
      {
        nome: "Next.js",
        descricao:
          "Framework moderno utilizado para criar sites rápidos, seguros e otimizados para o Google.",
      },
      {
        nome: "React",
        descricao:
          "Biblioteca JavaScript utilizada para criar interfaces modernas e interativas.",
      },
      {
        nome: "TypeScript",
        descricao: "Traz mais segurança e organização ao código do projeto.",
      },
      {
        nome: "Tailwind CSS",
        descricao:
          "Permite criar layouts modernos, responsivos e com alta performance.",
      },
    ],
  },
  "desenvolvimento-sistema-web-personalizado": {
    slug: "sistema-web-personalizado",
    title: "Sistema Web Personalizado",
    h1: "Desenvolvimento de Sistemas Web Sob Medida",
    description:
      "Criamos sistemas web personalizados para automatizar processos da sua empresa.",
    image: "/images/sistema-web.webp",
    keywords: ["sistema web", "sistema personalizado", "software sob medida"],
    cta: "Quero um sistema personalizado para minha empresa",
    painTitle: "Sua empresa passa por esse problema?",
    painSubtitle:
      "Se sua empresa se identifica com algum desses desafios, nós podemos ajudar!",
    pains: [
      {
        titulo: "Muito trabalho manual",
        descricao:
          "Sua equipe perde horas fazendo tarefas repetitivas todos os dias.",
      },
      {
        titulo: "Falta de controle",
        descricao:
          "Você não possui informações organizadas sobre clientes, vendas ou processos.",
      },
      {
        titulo: "Erros constantes",
        descricao:
          "Planilhas e processos manuais aumentam as chances de falhas.",
      },
      {
        titulo: "Baixa produtividade",
        descricao:
          "Sua empresa poderia produzir mais com um sistema sob medida.",
      },
    ],
    benefitsTitle: "A boa noitícia é que agora o jogo mudou!",
    benefitsSubtitle:
      "Com um site profissional a sua empresa se destaca dos seus concorrentes e suas vendas aumentam significativamente.",
    techTitle: "Como os sites são desenvolvidos?",
    techSubtitle:
      " Utilizamos as melhores linguagens de programação para o desenvolvimento do seu site de acordo com a complexidade do projeto. Os sites são construídos do zero, com código limpo, rápido, layout responsivo adapatado para computadores e dispositivos móveis e SEO otimizado. Para o desenvolvimento das aplicações, utilizamos as          seguintes linguagens:",
    technologies: [
      {
        nome: "Next.js",
        descricao:
          "Framework moderno utilizado para criar sites rápidos, seguros e otimizados para o Google.",
      },
      {
        nome: "React",
        descricao:
          "Biblioteca JavaScript utilizada para criar interfaces modernas e interativas.",
      },
      {
        nome: "TypeScript",
        descricao: "Traz mais segurança e organização ao código do projeto.",
      },
      {
        nome: "Tailwind CSS",
        descricao:
          "Permite criar layouts modernos, responsivos e com alta performance.",
      },
    ],
  },
  // restante dos serviços...
};
