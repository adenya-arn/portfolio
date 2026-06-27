// export const projects = [
//   {
//     title: "File Uploader",
//     description:
//       "Cloud-style file management application with authentication, folders, and file organization.",
//     tech: ["Node.js", "Express", "PostgreSQL", "Prisma"],
//     github: "#",
//     demo: "#",
//   },

//   {
//     title: "Blog API",
//     description:
//       "RESTful API with authentication, authorization, and content management.",
//     tech: ["Express", "PostgreSQL", "Prisma"],
//     github: "#",
//     demo: "#",
//   },

//   {
//     title: "Blog Client",
//     description:
//       "Frontend application consuming a blog API and displaying content dynamically.",
//     tech: ["React", "JavaScript", "CSS"],
//     github: "#",
//     demo: "#",
//   },

//   {
//     title: "Where's Waldo",
//     description:
//       "Interactive photo tagging game inspired by the classic Where's Waldo challenge.",
//     tech: ["React", "Node.js", "PostgreSQL"],
//     github: "#",
//     demo: "#",
//   //   },
// ];

export const projects = [
  {
    id: 1,
    title: "File Uploader",

    subtitle: "Cloud-inspired file management application",

    description:
      "A secure file management platform that allows users to create folders, upload files, organize content, and manage their documents with authentication.",

    image: "/projects/file-uploader.png",

    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "Passport.js"],

    github: "#",

    live: "#",

    learnings: [
      "Authentication & Authorization",
      "MVC Architecture",
      "Prisma ORM",
      "Database Relationships",
    ],
  },

  {
    id: 2,
    title: "Blog API",

    subtitle: "RESTful backend service",

    description:
      "A complete blog backend supporting authentication, role-based access, and CRUD operations through a REST API.",

    image: "/projects/blog-api.png",

    tech: ["Express", "PostgreSQL", "Prisma", "JWT"],

    github: "#",

    live: "#",

    learnings: ["REST APIs", "JWT Authentication", "Middleware", "API Design"],
  },
];
