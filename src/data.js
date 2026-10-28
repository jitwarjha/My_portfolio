export const portfolioData = {
  profile: {
    fullName: "Jitwar Jha",
    firstName: "Jitwar",
    lastName: "Jha",
    initials: "JJ",
    tagline: "Software & Cloud Systems Engineer",
    shortBio: "Computer Science undergraduate with focused experience in backend engineering, RESTful API design, and cloud technologies. Proven track record architecting and validating typed backend systems using Node.js, Fastify, TypeScript, and PostgreSQL.",
    location: "Jaipur, Rajasthan, India",
    phone: "+91 6350597471",
    email: "jitwar01@gmail.com",
    seeking: "Software Development / Backend & Cloud Engineering Internship",
    socials: {
      github: "https://github.com/jitwarjha",
      githubUser: "jitwarjha",
      linkedin: "https://linkedin.com/in/jitwarjha0805",
      linkedinUser: "jitwarjha0805",
      leetcode: "https://leetcode.com/u/Jitwar__",
      leetcodeUser: "Jitwar__"
    },
    stats: {
      testsWritten: "245+ automated tests",
      hackathonRank: "Ranked 21st / 160+ SIH",
      leetcodeSolved: "35+ DSA problems"
    }
  },
  education: {
    institution: "Poornima Institute of Engineering and Technology",
    location: "Jaipur, Rajasthan",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    graduation: "Expected Graduation: 2029",
    gpa: "Cumulative GPA: 6.9 / 10.0",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOPs)",
      "Database Fundamentals",
      "C/C++ Programming",
      "Java Foundations"
    ]
  },
  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    backend: ["Node.js", "Fastify", "RESTful APIs", "JWT Auth", "RBAC", "Prepared Statements"],
    databases: ["PostgreSQL", "MySQL", "Drizzle ORM", "JDBC"],
    cloudDevops: ["Google Cloud Platform (GCP)", "Git", "GitHub", "Vercel", "Vitest CI"],
    tools: ["VS Code", "IntelliJ IDEA", "CLion", "PyCharm", "Postman", "Vite"]
  },
  projects: [
    {
      id: "kisansetu",
      year: "2026",
      title: "KisanSetu",
      subtitle: "Agritech Market Intelligence & Buyer-Linkage Platform",
      category: "Smart India Hackathon",
      badge: "SIH Top 21 / 160+",
      image: "/project_1.jpg",
      video: "/hero-animation.mp4",
      featured: true,
      description: "Architected a high-throughput backend using Fastify and TypeScript, implementing Drizzle ORM and PostgreSQL for type-safe relational schema modeling and efficient query execution.",
      bullets: [
        "Architected a high-throughput backend using Fastify and TypeScript, implementing Drizzle ORM and PostgreSQL for type-safe relational schema modeling.",
        "Engineered an explainable buyer-matching engine incorporating 12 localized parameters (crop variety, quality grade, distance, quantity) with transparent gross-to-net realization cost estimation.",
        "Implemented Role-Based Access Control (RBAC) and JWT authentication to establish secure, granular authorization boundaries between farmers, buyers, and administrators.",
        "Achieved exceptional code reliability by writing 245 passing automated tests (113 backend Vitest tests and 132 verification tests) with zero TypeScript compilation errors across 2,200+ modules.",
        "Integrated complete multilingual localization across 3 regional languages (English, Hindi, Marathi) with defensive API response enrichment to guarantee consistent UI state integrity."
      ],
      techStack: ["Node.js", "Fastify", "TypeScript", "PostgreSQL", "Drizzle ORM", "React", "Vite", "PWA", "Vitest"],
      metrics: "245 automated tests • 12 localized parameters • 3 regional languages",
      liveUrl: "https://kisansetu-lake.vercel.app/login",
      githubUrl: "https://github.com/jitwarjha"
    },
    {
      id: "mess-menu",
      year: "2025",
      title: "Mess Menu & Meal System",
      subtitle: "Desktop-based Meal Preference Management System",
      category: "Minor Project",
      badge: "Core Architecture",
      image: "/project_2.jpg",
      featured: true,
      description: "Developed a desktop-based mess management application using Java Swing, JDBC, and MySQL with role-based dashboards for administrators and students.",
      bullets: [
        "Developed a desktop-based mess management application using Java Swing, JDBC, and MySQL with role-based dashboards for administrators and students.",
        "Implemented CRUD operations, validation, duplicate prevention, and parameterized PreparedStatement queries for users and meal menus.",
        "Built meal preference workflows for VEG, NON-VEG, JAIN, SPECIAL, and NOT_EATING choices with preference history and kitchen headcount/production reports."
      ],
      techStack: ["Java", "Java Swing", "JDBC", "MySQL", "IntelliJ IDEA"],
      metrics: "Parameterized SQL Security • 5 Meal Modes • Headcount Reports",
      githubUrl: "https://github.com/jitwarjha"
    },
    {
      id: "developer-portfolio",
      year: "2025",
      title: "Personal Developer Portfolio",
      subtitle: "Modern Responsive Showcase & Digital Identity",
      category: "Personal Project",
      badge: "Production Ready",
      image: "/project_4.jpg",
      featured: true,
      description: "Engineered clean, accessible UI components utilizing Tailwind CSS utility classes, ensuring fluid layout responsiveness and visual consistency across mobile, tablet, and desktop viewports.",
      bullets: [
        "Developed a modern, responsive single-page web portfolio using React and TypeScript to showcase software engineering projects, system architectures, and technical competencies.",
        "Engineered clean, accessible UI components utilizing Tailwind CSS utility classes, ensuring fluid layout responsiveness and visual consistency across viewports.",
        "Configured continuous integration and automated deployment pipelines using Vercel, achieving fast asset load times and zero-error production builds."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      metrics: "100% Responsive • Zero-error build • Fast asset load times",
      githubUrl: "https://github.com/jitwarjha"
    },
    {
      id: "dsa-engine",
      year: "2024",
      title: "Algorithmic Problem Solving",
      subtitle: "Data Structures & Computational Problem Solving",
      category: "LeetCode & Algorithms",
      badge: "35+ Solved",
      image: "/project_5.jpg",
      featured: true,
      description: "Solved 35+ Data Structures & Algorithms problems on LeetCode focusing on arrays, strings, dynamic patterns, and algorithmic optimization.",
      bullets: [
        "Consistent problem solving in C++ and Java with focus on asymptotic time/space complexities.",
        "Engineered clean modular algorithmic routines covering two-pointers, binary search, sliding windows, and hashing.",
        "Maintains competitive problem solving profile on LeetCode."
      ],
      techStack: ["C++", "Java", "DSA", "LeetCode"],
      metrics: "35+ LeetCode Solutions • Arrays & Strings Focus",
      liveUrl: "https://leetcode.com/u/Jitwar__"
    }
  ],
  certifications: [
    {
      title: "Smart India Hackathon (SIH) Qualifier",
      rank: "Ranked 21st out of 160+ competing teams",
      desc: "Institutional qualification round for architectural design and prototype execution of KisanSetu platform."
    },
    {
      title: "Google Cloud & Cybersecurity",
      rank: "Coursework Verified",
      desc: "Foundational cloud computing infrastructure, access management (IAM), and cloud security principles on GCP."
    },
    {
      title: "IBM Artificial Intelligence Foundations",
      rank: "Certification Completed",
      desc: "Foundational certification covering AI architecture principles, machine learning pipelines, and model development workflows."
    }
  ]
};
