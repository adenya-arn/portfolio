export const projects = [
  {
    id: 1,

    title: "File Uploader",

    tag: "Full Stack",

    description:
      "A cloud-inspired file management application that allows users to organize folders, upload files securely, and manage content with authentication.",

    image: "/projects/file-uploader.png",

    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],

    github: [
      {
        label: "Repository",
        url: "#",
      },
    ],

    live: [],

    learnings: [
      "Authentication",
      "Authorization",
      "MVC Architecture",
      "Database Design",
      "Prisma ORM",
    ],
  },

  {
    id: 2,

    title: "Blog Platform",

    tag: "Full Stack",

    description:
      "A complete blogging platform consisting of three independent applications: a REST API backend, an administrative dashboard for content management, and a client application for readers. Together they provide authentication, role-based authorization, article management, commenting, and a seamless publishing workflow.",

    image: "/projects/blog-platform.png",

    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],

    github: [
      {
        label: "API",
        url: "https://github.com/adenya-arn/blog_app/tree/main/blog_api",
      },
      {
        label: "Admin",
        url: "https://github.com/adenya-arn/blog_app/tree/main/blog_admin",
      },
      {
        label: "Client",
        url: "https://github.com/adenya-arn/blog_app/tree/main/blog_client",
      },
    ],

    live: [
      {
        label: "Admin",
        url: "https://blog-admin-sandy-two.vercel.app/",
      },
      {
        label: "Client",
        url: "https://blog-client-eight-alpha.vercel.app/",
      },
    ],

    learnings: [
      "Designing RESTful APIs",
      "JWT Authentication & Authorization",
      "Managing multiple applications from one backend",
      "Building role-based admin interfaces",
      "Connecting React frontends to Express APIs",
    ],
  },
  {
    id: 3,

    title: "Developer Portfolio",

    tag: "React",

    description:
      "A modern, responsive single-page portfolio built with React to showcase my projects, technical skills, and software engineering journey. The application is fully component-based, data-driven, and designed with scalability in mind, making it easy to maintain and expand as I continue building new projects.",

    image: "/projects/portfolio.png",

    tech: ["React", "Vite", "CSS Modules", "JavaScript", "Responsive Design"],

    github: [
      {
        label: "Repository",
        url: "https://github.com/adenya-arn/portfolio",
      },
    ],

    live: [
      {
        label: "Live Demo",
        url: "#",
      },
    ],

    learnings: [
      "Component-Based Architecture",
      "Reusable UI Components",
      "Responsive Web Design",
      "Data-Driven Rendering",
      "Project Organization",
    ],
  },
  {
    id: 4,

    title: "Battleship",

    tag: "JavaScript",

    description:
      "A browser-based implementation of the classic Battleship game featuring manual ship placement, an intelligent computer opponent, and comprehensive unit testing using Jest.",

    image: "/projects/battleship.png",

    tech: ["JavaScript", "Webpack", "HTML", "CSS", "Jest"],

    github: [
      {
        label: "Repository",
        url: "https://github.com/adenya-arn/battleship",
      },
    ],

    live: [
      {
        label: "Live Demo",
        url: "https://adenya-arn.github.io/battleship/",
      },
    ],

    learnings: [
      "Object-Oriented Programming",
      "Game Logic",
      "Testing with Jest",
      "Module Architecture",
    ],
  },

  {
    id: 5,

    title: "Shopping Cart",

    tag: "React",

    description:
      "A responsive e-commerce frontend built with React Router that allows users to browse products, manage a shopping cart, and experience client-side navigation within a single-page application.",

    image: "/projects/shopping-cart.png",

    tech: ["React", "React Router", "Vite", "CSS", "Fake Store API"],

    github: [
      {
        label: "Repository",
        url: "https://github.com/adenya-arn/shopping_cart",
      },
    ],

    live: [
      {
        label: "Live Demo",
        url: "https://shopping-cart-delta-ochre.vercel.app/",
      },
    ],

    learnings: [
      "React Router",
      "Fetching API Data",
      "Component Architecture",
      "State Management",
      "PropTypes",
    ],
  },

  {
    id: 6,

    title: "Pokémon Memory Game",

    tag: "React",

    description:
      "An interactive memory game built with React that fetches Pokémon from the PokéAPI. Players test their memory by selecting unique cards while the game dynamically shuffles the board after every move.",

    image: "/projects/memory-game.png",

    tech: ["React", "Vite", "CSS", "Fetch API", "PokéAPI"],

    github: [
      {
        label: "Repository",
        url: "https://github.com/adenya-arn/memory_project",
      },
    ],

    live: [
      {
        label: "Live Demo",
        url: "https://memory-project-flax.vercel.app/",
      },
    ],

    learnings: [
      "React Hooks",
      "State Management",
      "useEffect",
      "API Integration",
      "Component Composition",
    ],
  },

  {
    id: 7,

    title: "CV Builder",

    tag: "React",

    description:
      "A résumé builder that allows users to create, edit, and preview professional CVs in real time while automatically saving their progress using localStorage.",

    image: "/projects/cv-builder.png",

    tech: ["React", "Vite", "CSS", "localStorage"],

    github: [
      {
        label: "Repository",
        url: "https://github.com/adenya-arn/cv_application",
      },
    ],

    live: [
      {
        label: "Live Demo",
        url: "https://cv-application-teal-seven.vercel.app/",
      },
    ],

    learnings: [
      "Controlled Components",
      "Form Management",
      "localStorage",
      "Conditional Rendering",
      "Dynamic Lists",
    ],
  },
];
