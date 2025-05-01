
// Arquivo de traduções para internacionalização
const translations = {

  pt: {
    // Cabeçalho/Navegação
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      projects: "Projetos",
      skills: "Habilidades", // será que seria melhor usar o nome "Tecnologias"?
      contact: "Contato"
    },

    // Seção Hero/Principal
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Web Full-Stack",
      description: "Transformo suas ideias em experiências digitais.",
      ctaPrimary: "Entre em contato",
      ctaSecondary: "Ver projetos"
    },


    // Seção Sobre
    about: {
      title: "Sobre Mim",
      profileAlt: "Foto de perfil de Anderson Amicuchi",
      subtitle: "Conheça minha história",
      description: [
        "Sou um desenvolvedor frontend apaixonado por criar aplicações web modernas e interativas.",
        "Especializado em criar aplicações web modernas e responsivas com uma abordagem minimalista e focada no usuário, desenvolvo soluções personalizadas para negócios que querem se destacar no ambiente digital.",
        "Com experiência na stack MERN (MongoDB, Express, React e Node.js), tenho trabalhado em alguns projetos desafiadores que me permitiram aprimorar minhas habilidades.",
        "Além de programação, também me interesso por design de interfaces e experiência do usuário, buscando sempre criar produtos que sejam tanto funcionais quanto agradáveis visualmente."
      ],
      education: "Graduado desde 2016 em Análise e Desenvolvimento de Sistemas, atualmente sou aluno do último semestre do curso de Bacharel em Tecnologia da Informação.",
      experience: "Experiência",
      downloadCv: "Baixar CV",
      projectsCompleted: "Projetos Concluídos",
      satisfiedClients: "Clientes Satisfeitos",
    },


    // Seção Serviços
    services: {
      title: "Meus Serviços",
      subtitle: "O que eu ofereço",

      webDev: {
        title: "Desenvolvimento Web Personalizado",
        description: "Criação de sites modernos, rápidos e responsivos, pensados para atrair e converter. Do layout à programação, tudo sob medida para o seu negócio."
      },

      frontendDev: {
        title: "Fortalecimento de Marca Online",
        description: "Transformo ideias em presença digital. Construo sites que refletem a identidade do seu negócio, geram confiança e destacam você da concorrência."
      },

      backendDev: {
        title: "Manutenção e Suporte",
        description: "Seu site atualizado, seguro e no ar. Faço ajustes, melhorias e acompanho o desempenho da sua presença digital."
      }
    },

    // Seção Projetos
    projects: {
      title: "Projetos Recentes",
      subtitle: "",
      viewProject: "Acessar o site",
      viewCode: "Ver código",
      viewAll: "Ver Todos",
      projectsList: [
        {
          id: 1,
          title: "Cesta Viva",
          category: "React",
          image: "cesta-viva-image",
          github: "https://github.com/Amicuchi/CestaViva",
          url: "https://www.cestaviva.com.br",
          description: "Uma plataforma que visa unir doadores e entidades que precisam de doações."
        },
        {
          id: 2,
          title: "Blog Focus Feed",
          category: "MERN Stack",
          image: "focus-feed-image",
          github: "https://github.com/Amicuchi/BlogFocusFeed",
          url: "https://blogfocusfeed.netlify.app/",
          description: "FocusFeed é uma plataforma moderna de blog construída com a stack MERN, oferecendo uma experiência intuitiva para criação e compartilhamento de conteúdo."
        },
        {
          id: 3,
          title: "Sistema de Gerenciamento de Academias",
          category: "React",
          image: "sga-image",
          github: "https://github.com/Amicuchi/SGA",
          url: null,
          description: "O Sistema Gerenciador de Academia é uma aplicação web desenvolvida para gerenciar academias, com funcionalidades de cadastro de usuários, controle de eventos e gestão financeira, além de um sistema de autenticação robusto."
        },
        {
          id: 4,
          title: "Números do Destino",
          category: "React",
          image: "numeros-destino-image",
          github: "https://github.com/Amicuchi/Destiny-Numbers",
          url: "https://numeros-do-destino.vercel.app",
          description: "Este é um projeto desenvolvido em React que permite calcular e entender o significado do seu 'Número do Destino' com base na sua data de nascimento."
        },
        {
          id: 5,
          title: "To Do App",
          category: "React",
          image: "todo-app-image",
          github: "https://github.com/Amicuchi/todo-app",
          url: "https://todo-app-amicuchi.vercel.app",
          description: "Um aplicativo simples para gerenciar suas tarefas diárias."
        },
        {
          id: 6,
          title: "Music Player",
          category: "React",
          image: "music-player-image",
          github: "https://github.com/Amicuchi/MusicPlayer",
          url: "https://andersonplayer.netlify.app/",
          description: "Um reprodutor de música minimalista com funcionalidades básicas."
        },
        {
          id: 7,
          title: "Peter Amicuchi Portfolio",
          category: "React",
          image: "peter-amicuchi-image",
          github: "https://github.com/Amicuchi/portfolio-peter",
          url: "https://peteramicuchi.netlify.app/",
          description: "Uma Landing Page para psicanalista que mostra seu histórico, ambiente de atendimento, etc."
        }
      ]
    },

    // Seção Habilidades
    skills: {
      title: "Minhas Habilidades",
      subtitle: "Tecnologias que utilizo",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas",
      frontendSkills: {
        HTML5: { name: "HTML5", image: "HTML5" },
        CSS3: { name: "CSS3", image: "CSS3" },
        SCSS: { name: "SCSS", image: "SCSS" },
        Javascript: { name: "Javascript", image: "Javascript" },
        Typescript: { name: "Typescript", image: "Typescript" },
        React: { name: "React", image: "React" }
      },
      backendSkills: {
        NodeJS: { name: "Node.js", image: "NodeJS" },
        Express: { name: "Express", image: "Express" },
        MongoDB: { name: "MongoDB", image: "MongoDB" },
        Mongoose: { name: "Mongoose", image: "Mongoose" },
      },
      toolsSkills: {
        Figma: { name: "Figma", image: "Figma" },
        VSCode: { name: "VS Code", image: "VSCode" },
        Vite: { name: "Vite", image: "Vite" },
        Git: { name: "Git", image: "Git" },
        Postman: { name: "Postman", image: "Postman" },
        GitHub: { name: "GitHub", image: "GitHub" },
      }
    },

    // Seção Contato
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar",
      message: "Estou sempre em busca de novas oportunidades e de colaborar com pessoas que pensam como eu, se você tem uma dúvida sobre como posso te ajudar ou quer me contratar, entre em contato usando o formulário de contato ou pelas redes sociais.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "Email",
      emailPlaceholder: "Seu email",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Qual o assunto?",
      messageLabel: "Mensagem",
      messagePlaceholder: "Digite sua mensagem...",
      submitButton: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso!",
      error: "Ocorreu um erro. Tente novamente."
    },

    // Rodapé
    footer: {
      rights: "Todos os direitos reservados",
      madeWith: "Feito com"
    }
  },

  en: {
    // Header/Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      greeting: "Hello, I am",
      role: "Full-Stack Web Developer",
      description: "I transform your ideas into digital experiences.",
      ctaPrimary: "Contact Me",
      ctaSecondary: "View Projects"
    },

    // About Section
    about: {
      title: "About Me",
      profileAlt: "Profile picture of Anderson Amicuchi",
      subtitle: "Learn about my story",
      description: [
        "I am a frontend developer passionate about creating modern and interactive web applications.",
        "Specialized in building modern, responsive websites with a minimalist and user-focused approach, I develop custom solutions for businesses seeking to stand out in the digital space.",
        "With experience in the MERN stack (MongoDB, Express, React, and Node.js), I have worked on challenging projects that have helped me hone my skills.",
        "In addition to programming, I am also interested in interface design and user experience, always striving to create products that are both functional and visually appealing."
      ],
      education: "Graduated in 2016 in Systems Analysis and Development, I am currently in the final semester of my Bachelor's degree in Information Technology.",
      experience: "Experience",
      downloadCv: "Download CV",
      projectsCompleted: "Projects Completed",
      satisfiedClients: "Satisfied Clients",
    },

    // Services Section
    services: {
      title: "My Services",
      subtitle: "What I offer",

      webDev: {
        title: "Customized Web Development",
        description: "Creating modern, fast, and responsive websites designed to attract and convert. From layout to programming, everything is tailored for your business."
      },

      frontendDev: {
        title: "Enhancing Your Online Brand",
        description: "I turn ideas into a digital presence. I build websites that reflect your brand's identity, build trust, and help you stand out from the competition."
      },

      backendDev: {
        title: "Maintenance and Support",
        description: "Your website stays updated, secure, and online. I handle adjustments, improvements, and monitor the performance of your digital presence."
      }
    },

    // Projects Section
    projects: {
      title: "Recent Projects",
      subtitle: "",
      viewProject: "Visit Site",
      viewCode: "View Code",
      viewAll: "View All",
      projectsList: [
        {
          id: 1,
          title: "Cesta Viva",
          category: "React",
          image: "cesta-viva-image",
          github: "https://github.com/Amicuchi/CestaViva",
          url: "https://www.cestaviva.com.br",
          description: "A platform that connects donors with organizations in need of donations."
        },
        {
          id: 2,
          title: "Blog Focus Feed",
          category: "MERN Stack",
          image: "focus-feed-image",
          github: "https://github.com/Amicuchi/BlogFocusFeed",
          url: "https://blogfocusfeed.netlify.app/",
          description: "FocusFeed is a modern blogging platform built with the MERN stack, offering an intuitive experience for creating and sharing content."
        },
        {
          id: 3,
          title: "Gym Management System",
          category: "React",
          image: "sga-image",
          github: "https://github.com/Amicuchi/SGA",
          url: null,
          description: "A web application developed to manage gyms, featuring user registration, event control, financial management, and a robust authentication system."
        },
        {
          id: 4,
          title: "Destiny Numbers",
          category: "React",
          image: "numeros-destino-image",
          github: "https://github.com/Amicuchi/Destiny-Numbers",
          url: "https://numeros-do-destino.vercel.app",
          description: "A React project that lets you calculate and understand the meaning of your 'Destiny Number' based on your birth date."
        },
        {
          id: 5,
          title: "To Do App",
          category: "React",
          image: "todo-app-image",
          github: "https://github.com/Amicuchi/todo-app",
          url: "https://todo-app-amicuchi.vercel.app",
          description: "A simple application for managing your daily tasks."
        },
        {
          id: 6,
          title: "Music Player",
          category: "React",
          image: "music-player-image",
          github: "https://github.com/Amicuchi/MusicPlayer",
          url: "https://andersonplayer.netlify.app/",
          description: "A minimalist music player with basic features."
        },
        {
          id: 7,
          title: "Peter Amicuchi's Portfolio",
          category: "React",
          image: "peter-amicuchi-image",
          github: "https://github.com/Amicuchi/portfolio-peter",
          url: "https://peteramicuchi.netlify.app/",
          description: "A Landing Page to psicanalist that shows his background, enviroment, etc.."
        }
      ]
    },

    // Skills Section
    skills: {
      title: "My Skills",
      subtitle: "Technologies I use",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      frontendSkills: {
        HTML5: { name: "HTML5", image: "HTML5" },
        CSS3: { name: "CSS3", image: "CSS3" },
        SCSS: { name: "SCSS", image: "SCSS" },
        Javascript: { name: "Javascript", image: "Javascript" },
        Typescript: { name: "Typescript", image: "Typescript" },
        React: { name: "React", image: "React" }
      },
      backendSkills: {
        NodeJS: { name: "Node.js", image: "NodeJS" },
        Express: { name: "Express", image: "Express" },
        MongoDB: { name: "MongoDB", image: "MongoDB" },
        Mongoose: { name: "Mongoose", image: "Mongoose" },
      },
      toolsSkills: {
        Figma: { name: "Figma", image: "Figma" },
        VSCode: { name: "VS Code", image: "VSCode" },
        Vite: { name: "Vite", image: "Vite" },
        Git: { name: "Git", image: "Git" },
        Postman: { name: "Postman", image: "Postman" },
        GitHub: { name: "GitHub", image: "GitHub" },
      }
    },

    // Contact Section
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Talk",
      message: "I am always looking for new opportunities and to collaborate with like-minded people. If you have any questions about how I can help or would like to hire me, please get in touch via the contact form or through social media.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      subjectLabel: "Subject",
      subjectPlaceholder: "What is the subject?",
      messageLabel: "Message",
      messagePlaceholder: "Type your message...",
      submitButton: "Send Message",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again."
    },

    // Footer
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with"
    }
  }
};

export default translations;