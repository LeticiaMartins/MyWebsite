// Textos do site em inglês e português. As duas versões têm a mesma estrutura; o seletor EN | PT troca uma pela outra.

const linkedinPost = (id) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/leticiamartinsbandeira/",
  github: "https://github.com/LeticiaMartins",
  linktree: "https://linktr.ee/LeticiaMartinsCode",
  certificates: "https://drive.google.com/drive/folders/1A41_2g9dEj5uYeoc1BaCMRp0KqmsyDML",
  greenTeam: "https://greenteamufabc.com/",
  email: "lemartins.flag@gmail.com",
  credly: "https://www.credly.com/badges/75cbf049-2cc3-4364-ac8c-a0453ff232b8",
  renan: "https://www.linkedin.com/in/rnnmsec/",
  sbgOficial: "https://builder.aws.com/community/student-builder-groups",
  instagramSbg: "https://www.instagram.com/aws_student_buildergroup.ufabc/",
};

const en = {
  meta: {
    title: "Leticia Martins · Software Engineer",
    description:
      "Back-end software engineer working on payments with Go. Computer Science at UFABC, AWS Student Builder Group UFABC core team, creator of Joga o Buquê.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    community: "Community",
    academics: "Academics",
    contact: "Contact",
    language: "Language",
    light: "Light theme",
    dark: "Dark theme",
  },
  hero: {
    role: "Software Engineer · Backend & Payments",
    text: "I build payment APIs in Go at Stone, working on Pix, boleto and cards. Outside work I study Computer Science at UFABC, help run the AWS Student Builder Group UFABC and created Joga o Buquê, a platform for wedding websites.",
    tags: ["Go", "AWS", "React", "Payments"],
    cta: "See my projects",
    contact: "Get in touch",
  },
  about: {
    title: "About Me",
    imageAlt: "Leticia Martins",
    paragraphs: [
      "My path in technology started with two exchange programs, where I had my first experiences with programming, teamwork and creativity.",
      "Today I am a Back-End Software Engineer at Stone, writing Go services for Pix, boleto and card payments.",
      "At the Federal University of ABC (UFABC) I study Computer Science, after the Bachelor's in Science and Technology. On campus I served as Vice-President and President of the Green Team Hacker Club, an ethical hacking group, and I am now on the core team of the AWS Student Builder Group UFABC, which brings cloud and AI events to students.",
      "I also enjoy creating products of my own from scratch, such as Joga o Buquê and The Tech Rack, and websites that help local businesses show up on Google and turn visits into new customers.",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        year: "Sep 2025 to present",
        role: "Back-End Software Engineer",
        company: "Stone",
        description:
          "I work on the back end of Stone's payment products, across Pix, boleto and cards. I write and maintain APIs and microservices in Go, improve the services that keep payments running every day and ship new features together with product and other engineering teams. Unit and integration tests are part of every change.",
        technologies: ["Go", "APIs", "Pix", "Boleto", "Cards"],
      },
      {
        year: "Feb 2025 to Jul 2025",
        role: "Full Stack Developer",
        company: "Keystle",
        description:
          "Full-stack work on a security and identity management platform: Go microservices and REST APIs on the back end, React on the front end. I built MFA, SSO and passwordless login, worked with SQL databases and took part in the technical decisions of an agile team.",
        technologies: ["Go", "React", "Identity and Access Management (IAM)"],
      },
      {
        year: "Jun 2024 to Feb 2025",
        role: "Back-End Software Developer",
        company: "Getronics",
        description:
          "Took care of online transactions on mainframe systems, where availability and response time come first, and worked on the back-end integration of new payment features such as Pix.",
        technologies: ["Mainframe", "COBOL", "Team collaboration"],
      },
      {
        year: "May 2022 to Apr 2024",
        role: "Full Stack Software Developer",
        company: "Banco ABC Brasil",
        description:
          "Worked on the bank's internal systems, fixing bugs and building new requests. I created Angular screens, wrote business rules in .NET and C# APIs and tuned SQL Server procedures.",
        technologies: ["Angular", ".NET", "C#", "SQL Server", "API Development"],
      },
      {
        year: "Mar 2019 to Dec 2019",
        role: "Front-End Developer",
        company: "7Ways",
        description:
          "Set up and maintained VTEX online stores for clients such as Stance, adjusting layouts, making pages responsive and fixing issues with the project team, following each brand's identity.",
        technologies: ["VTEX", "HTML", "CSS", "JavaScript"],
      },
    ],
  },
  projects: {
    title: "Projects",
    personal: "Personal",
    freelance: "Freelance",
    more: "Writing and studies",
    visit: "Visit site",
    read: "Read",
    soon: "In development",
    items: {
      joga: {
        title: "Joga o Buquê",
        year: "2026",
        description:
          "A platform where couples create their wedding website with RSVP, a gift registry and a bridal shower page. I designed and built everything from scratch, including payments with Mercado Pago and automated domain registration.",
        tags: ["Next.js", "PostgreSQL", "Mercado Pago", "Vercel"],
      },
      techrack: {
        title: "The Tech Rack",
        year: "2026",
        description:
          "An independent tech review site in Portuguese and English, with buying guides for audio, wearables, peripherals, smart home and games. A personal project built from the ground up.",
        tags: ["Content site", "SEO", "i18n"],
      },
      millanea: {
        title: "Millanea",
        year: "2026",
        description:
          "Website for a waxing institute with over thirty years of tradition, built from scratch to bring in new clients. Services, prices and care tips lead straight to booking on WhatsApp, and local SEO puts the institute in Google searches across the region.",
        tags: ["Website", "Responsive design", "Local SEO"],
      },
      divvy: {
        title: "Divvy Case Study",
        description: "Google Data Analytics capstone: how casual riders and members use a bike-share service.",
      },
      medium: {
        title: "Medium Stories",
        description: "Articles on tech, programming and data science.",
      },
      klondike: {
        title: "Klondike-Inspired Game",
        description: "A casual web game inspired by Klondike-style ads.",
      },
    },
  },
  community: {
    title: "Community",
    kicker: "AWS Student Builder Group UFABC",
    intro:
      "The AWS Student Builder Group UFABC is a student community supported by AWS and the Green Team Hacker Club, created to learn cloud and artificial intelligence hands-on. We host open meetups with talks from AWS experts, live demos, workshops and networking, bringing students who are just starting out closer to industry professionals. I am part of the core team, which plans each event, invites the speakers and looks after the whole experience for attendees.",
    role: "Core team",
    captain: "Group Captain",
    badge: {
      title: "AWS Cloud Club Core Team",
      issuer: "Issued by AWS Community on Mar 26, 2026",
      link: "View on Credly",
    },
    eventsTitle: "Meetups",
    events: [
      {
        date: "Jun 16, 2026",
        title: "Rebirth in the Age of AI",
        place: "UFABC Santo André",
        text: "Vinicius Senger, Senior Developer Advocate at AWS, shared four things every developer should do with AI in 2026. The evening also had a talk by AWS Builder Carolina Libarino and live demos: re:Money, an LLM inside Roblox with Bedrock, re:Button IoT agents, an AI DJ table and AWS Kiro.",
      },
      {
        date: "May 16, 2026",
        title: "Cloud & Data Science",
        place: "UFABC",
        text: "Our first event, with more than 110 registrations and international students in the audience. Carolina Libarino introduced the AWS Builder program and Bruno Loducca showed AWS for data science with a RAG pipeline, followed by a coffee break for networking.",
      },
    ],
    photosAlt: {
      team: "Core team with Vinicius Senger at the second meetup",
      auditorium: "Full auditorium during the second meetup",
      group: "Group photo of the first meetup",
      pizza: "Networking with pizza after the talks",
      vertical: "Audience during a talk",
    },
    postsTitle: "On LinkedIn",
    posts: [
      { label: "Introducing the group at UFABC", date: "Mar 27, 2026", url: linkedinPost("7443462921239547904") },
      { label: "Recap of the first meetup", date: "May 18, 2026", url: linkedinPost("7462304476809482240") },
      { label: "An attendee's view of the first meetup", date: "May 21, 2026", url: linkedinPost("7463405642956017664") },
      { label: "Highlights of the second meetup", date: "Jun 17, 2026", url: linkedinPost("7473016290639806464") },
      { label: "Another look at the second meetup", date: "Jun 17, 2026", url: linkedinPost("7473414128456527873") },
    ],
    instagram: "Follow on Instagram",
    official: "Official program page",
  },
  technologies: { title: "Technologies" },
  academics: {
    title: "Academics",
    items: [
      {
        time: "2024 to present",
        title: "Bachelor's Degree in Computer Science, Federal University of ABC (UFABC), São Paulo, Brazil",
        text: "Software development, data structures and algorithms, operating systems.",
      },
      {
        time: "2021 to present",
        title: "Bachelor's Degree in Science and Technology (BC&T), Federal University of ABC (UFABC), São Paulo, Brazil",
        text: "Mathematics, chemistry, physics and quantum physics.",
      },
      {
        time: "Mar 2024",
        title: "AWS Cloud Practitioner Essentials",
        text: "Exam Prep Standard Course: AWS Certified Cloud Practitioner (CLF-C02, Portuguese).",
      },
      {
        time: "Mar 2024",
        title: "Google Data Analytics Professional Certificate",
        text: "Eight hands-on courses developed by Google covering spreadsheets, SQL, Tableau and R, teaching how to prepare, process, analyze and share data for informed decisions.",
      },
      {
        time: "2022",
        title: "Introduction to Management 3.0",
        text: "Agile methodologies and Scrum.",
      },
      {
        time: "2018",
        title: "Web FullStack Course",
        text: "My first contact with programming: HTML, CSS, JavaScript, MySQL, GitHub, Bootstrap and PHP.",
      },
      {
        time: "2017 to 2018",
        title: "Exchange Student Program, Gilmer County High School, West Virginia, USA",
        text: "Extracurricular activities: track and field, and robotics.",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    text: "Open to conversations about back-end, payments, cloud and community.",
    rights: "Leticia Martins",
  },
};

const pt = {
  meta: {
    title: "Leticia Martins · Engenheira de Software",
    description:
      "Engenheira de software back-end em pagamentos com Go. Ciência da Computação na UFABC, core team do AWS Student Builder Group UFABC e criadora do Joga o Buquê.",
  },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    community: "Comunidade",
    academics: "Formação",
    contact: "Contato",
    language: "Idioma",
    light: "Tema claro",
    dark: "Tema escuro",
  },
  hero: {
    role: "Engenheira de Software · Backend e Pagamentos",
    text: "Desenvolvo APIs de pagamento em Go na Stone, nos produtos de Pix, boleto e cartões. Fora do trabalho, curso Ciência da Computação na UFABC, faço parte do core team do AWS Student Builder Group UFABC e criei o Joga o Buquê, uma plataforma de sites de casamento.",
    tags: ["Go", "AWS", "React", "Pagamentos"],
    cta: "Ver meus projetos",
    contact: "Fale comigo",
  },
  about: {
    title: "Sobre Mim",
    imageAlt: "Leticia Martins",
    paragraphs: [
      "Minha trajetória na tecnologia começou com dois intercâmbios, onde tive as primeiras experiências com programação, trabalho em equipe e criatividade.",
      "Hoje sou Engenheira de Software Back-End na Stone e escrevo serviços em Go para pagamentos com Pix, boleto e cartões.",
      "Na Universidade Federal do ABC (UFABC) curso Ciência da Computação, depois do Bacharelado em Ciência e Tecnologia. No campus fui Vice-Presidente e Presidente do Green Team Hacker Club, um grupo de hacking ético, e agora integro o core team do AWS Student Builder Group UFABC, que leva eventos de cloud e IA aos estudantes.",
      "Também gosto de criar produtos próprios do zero, como o Joga o Buquê e o The Tech Rack, e sites que ajudam negócios locais a aparecer no Google e a transformar visitas em novos clientes.",
    ],
  },
  experience: {
    title: "Experiência",
    items: [
      {
        year: "set 2025 até hoje",
        role: "Engenheira de Software Back-End",
        company: "Stone",
        description:
          "Trabalho no back-end dos produtos de pagamento da Stone, nas frentes de Pix, boleto e cartões. Escrevo e mantenho APIs e microsserviços em Go, melhoro os serviços que sustentam os pagamentos do dia a dia e entrego novas funcionalidades junto com produto e outros times de engenharia. Testes unitários e de integração fazem parte de cada mudança.",
        technologies: ["Go", "APIs", "Pix", "Boleto", "Cartões"],
      },
      {
        year: "fev 2025 a jul 2025",
        role: "Desenvolvedora Full Stack",
        company: "Keystle",
        description:
          "Desenvolvimento full stack de uma plataforma de segurança e gestão de identidade: microsserviços e APIs REST em Go no back-end e React no front-end. Implementei MFA, SSO e login sem senha, trabalhei com bancos SQL e participei das decisões técnicas de um time ágil.",
        technologies: ["Go", "React", "Gestão de Identidade e Acesso (IAM)"],
      },
      {
        year: "jun 2024 a fev 2025",
        role: "Desenvolvedora de Software Back-End",
        company: "Getronics",
        description:
          "Cuidei das transações online em sistemas mainframe, onde disponibilidade e tempo de resposta vêm em primeiro lugar, e trabalhei na integração back-end de novas funcionalidades de pagamento, como o Pix.",
        technologies: ["Mainframe", "COBOL", "Trabalho em equipe"],
      },
      {
        year: "mai 2022 a abr 2024",
        role: "Desenvolvedora de Software Full Stack",
        company: "Banco ABC Brasil",
        description:
          "Trabalhei nos sistemas internos do banco, corrigindo bugs e atendendo novas demandas. Criei telas em Angular, escrevi regras de negócio em APIs .NET e C# e ajustei procedures no SQL Server.",
        technologies: ["Angular", ".NET", "C#", "SQL Server", "Desenvolvimento de APIs"],
      },
      {
        year: "mar 2019 a dez 2019",
        role: "Desenvolvedora Front-End",
        company: "7Ways",
        description:
          "Implantei e mantive lojas VTEX para clientes como a Stance, ajustando layouts, deixando as páginas responsivas e resolvendo problemas com o time do projeto, de acordo com a identidade de cada marca.",
        technologies: ["VTEX", "HTML", "CSS", "JavaScript"],
      },
    ],
  },
  projects: {
    title: "Projetos",
    personal: "Pessoais",
    freelance: "Freelance",
    more: "Textos e estudos",
    visit: "Visitar site",
    read: "Ler",
    soon: "Em desenvolvimento",
    items: {
      joga: {
        title: "Joga o Buquê",
        year: "2026",
        description:
          "Plataforma em que os noivos criam o site do casamento com confirmação de presença, lista de presentes e página do chá de panela. Projetei e desenvolvi tudo do zero, incluindo pagamentos com Mercado Pago e registro automático de domínios.",
        tags: ["Next.js", "PostgreSQL", "Mercado Pago", "Vercel"],
      },
      techrack: {
        title: "The Tech Rack",
        year: "2026",
        description:
          "Site independente de análises de tecnologia em português e inglês, com guias de compra de áudio, wearables, periféricos, casa inteligente e games. Um projeto pessoal construído desde o início.",
        tags: ["Site de conteúdo", "SEO", "i18n"],
      },
      millanea: {
        title: "Millanea",
        year: "2026",
        description:
          "Site de um instituto de depilação com mais de trinta anos de tradição, criado do zero para atrair novas clientes. Técnicas, valores e dicas de cuidado levam direto ao agendamento pelo WhatsApp, e o SEO local coloca o instituto nas buscas do Google da região.",
        tags: ["Site institucional", "Design responsivo", "SEO local"],
      },
      divvy: {
        title: "Estudo de Caso Divvy",
        description: "Projeto final do Google Data Analytics: como ciclistas avulsos e assinantes usam um serviço de bicicletas compartilhadas.",
      },
      medium: {
        title: "Artigos no Medium",
        description: "Textos sobre tecnologia, programação e ciência de dados.",
      },
      klondike: {
        title: "Jogo inspirado em Klondike",
        description: "Um jogo casual para web inspirado nos anúncios estilo Klondike.",
      },
    },
  },
  community: {
    title: "Comunidade",
    kicker: "AWS Student Builder Group UFABC",
    intro:
      "O AWS Student Builder Group UFABC é uma comunidade de estudantes apoiada pela AWS e pelo Green Team Hacker Club, criada para aprender cloud e inteligência artificial na prática. Organizamos encontros abertos com palestras de especialistas da AWS, demonstrações ao vivo, oficinas e networking, aproximando quem está começando de profissionais do mercado. Faço parte do core team, que planeja os eventos, convida os palestrantes e cuida de toda a experiência de quem participa.",
    role: "Core team",
    captain: "Captain do grupo",
    badge: {
      title: "AWS Cloud Club Core Team",
      issuer: "Emitido pela AWS Community em 26/03/2026",
      link: "Ver no Credly",
    },
    eventsTitle: "Encontros",
    events: [
      {
        date: "16/06/2026",
        title: "Renascendo na Era da IA",
        place: "UFABC Santo André",
        text: "Vinicius Senger, Senior Developer Advocate da AWS, apresentou quatro coisas que todo dev precisa fazer com IA em 2026. A noite também teve palestra da AWS Builder Carolina Libarino e demonstrações ao vivo: re:Money, um LLM dentro do Roblox com Bedrock, agentes de IoT do re:Button, uma mesa de DJ com IA e o AWS Kiro.",
      },
      {
        date: "16/05/2026",
        title: "Cloud & Data Science",
        place: "UFABC",
        text: "Nosso primeiro evento, com mais de 110 inscritos e estudantes internacionais na plateia. Carolina Libarino apresentou o programa AWS Builder e Bruno Loducca mostrou a AWS na ciência de dados com um pipeline RAG, seguido de um coffee break para networking.",
      },
    ],
    photosAlt: {
      team: "Core team com Vinicius Senger no segundo encontro",
      auditorium: "Auditório cheio durante o segundo encontro",
      group: "Foto do grupo no primeiro encontro",
      pizza: "Networking com pizza depois das palestras",
      vertical: "Plateia durante uma palestra",
    },
    postsTitle: "No LinkedIn",
    posts: [
      { label: "Apresentação do grupo na UFABC", date: "27/03/2026", url: linkedinPost("7443462921239547904") },
      { label: "Resumo do primeiro encontro", date: "18/05/2026", url: linkedinPost("7462304476809482240") },
      { label: "O primeiro encontro pelo olhar de um participante", date: "21/05/2026", url: linkedinPost("7463405642956017664") },
      { label: "Destaques do segundo encontro", date: "17/06/2026", url: linkedinPost("7473016290639806464") },
      { label: "Outro olhar sobre o segundo encontro", date: "17/06/2026", url: linkedinPost("7473414128456527873") },
    ],
    instagram: "Seguir no Instagram",
    official: "Página oficial do programa",
  },
  technologies: { title: "Tecnologias" },
  academics: {
    title: "Formação",
    items: [
      {
        time: "2024 até hoje",
        title: "Bacharelado em Ciência da Computação, Universidade Federal do ABC (UFABC), São Paulo",
        text: "Desenvolvimento de software, estruturas de dados e algoritmos, sistemas operacionais.",
      },
      {
        time: "2021 até hoje",
        title: "Bacharelado em Ciência e Tecnologia (BC&T), Universidade Federal do ABC (UFABC), São Paulo",
        text: "Matemática, química, física e física quântica.",
      },
      {
        time: "mar 2024",
        title: "AWS Cloud Practitioner Essentials",
        text: "Curso preparatório para a certificação AWS Certified Cloud Practitioner (CLF-C02, em português).",
      },
      {
        time: "mar 2024",
        title: "Certificado Profissional Google Data Analytics",
        text: "Oito cursos práticos desenvolvidos pelo Google com planilhas, SQL, Tableau e R, ensinando a preparar, processar, analisar e compartilhar dados para decisões bem informadas.",
      },
      {
        time: "2022",
        title: "Introdução ao Management 3.0",
        text: "Metodologias ágeis e Scrum.",
      },
      {
        time: "2018",
        title: "Curso Web FullStack",
        text: "Meu primeiro contato com programação: HTML, CSS, JavaScript, MySQL, GitHub, Bootstrap e PHP.",
      },
      {
        time: "2017 a 2018",
        title: "Intercâmbio, Gilmer County High School, West Virginia, EUA",
        text: "Atividades extracurriculares: atletismo e robótica.",
      },
    ],
  },
  contact: {
    title: "Vamos Conversar",
    text: "Aberta a conversas sobre back-end, pagamentos, cloud e comunidade.",
    rights: "Leticia Martins",
  },
};

export const CONTENT = { en, pt };
