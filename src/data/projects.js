export const projects = [
  {
    id: 1,

    title: "File Uploader",

    tag: "Full Stack",

    description:
      "A cloud-inspired file management application that allows users to organize folders, upload files securely, and manage content with authentication.",

    image: "/projects/file-uploader.png",

    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],

    github: "#",

    live: "#",

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

    github: {
      api: "#",
      admin: "#",
      client: "#",
    },

    live: {
      admin: "#",
      client: "#",
    },

    learnings: [
      "Designing RESTful APIs",
      "JWT Authentication & Authorization",
      "Managing multiple applications from one backend",
      "Building role-based admin interfaces",
      "Connecting React frontends to Express APIs",
    ],
  },
];
