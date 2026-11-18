export const portfolioData = {
  personal: {
    name: "Adigoppula Saichandra",
    shortName: "Saichandra",
    role: "Computer Science & Engineering Student | AI & ML Enthusiast",
    tagline: "Passionate about technology, artificial intelligence, and building meaningful software solutions. I enjoy exploring new technologies, solving problems, and transforming ideas into practical applications.",
    email: "saichandra118@gmail.com",
    phone: "9618374249",
    location: "Chennai, India",
    university: "Dr. M.G.R. Educational and Research Institute, Chennai",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering – Artificial Intelligence & Machine Learning",
    cgpa: "8.5 / 10",
    languagesKnownCount: 3,
  },
  
  about: {
    heading: "A Little About Me",
    paragraphs: [
      "I'm Adigoppula Saichandra, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Dr. M.G.R. Educational and Research Institute, Chennai.",
      "I am interested in software development, artificial intelligence, and problem-solving. I enjoy learning new technologies and developing practical solutions that can make everyday tasks easier and more efficient.",
      "My goal is to continuously improve my technical knowledge and contribute to innovative software projects."
    ],
    highlights: [
      {
        value: "8.5 / 10",
        label: "Academic CGPA",
        description: "Consistent academic performance in Computer Science & Engineering",
        icon: "GraduationCap",
        color: "from-blue-500/20 to-cyan-500/10",
        accent: "text-blue-400",
        border: "border-blue-500/30",
      },
      {
        value: "AI & ML",
        label: "Specialization",
        description: "Artificial Intelligence & Machine Learning focus area",
        icon: "Brain",
        color: "from-purple-500/20 to-indigo-500/10",
        accent: "text-purple-400",
        border: "border-purple-500/30",
      },
      {
        value: "3",
        label: "Languages Known",
        description: "Multilingual proficiency in English, Telugu, and Hindi",
        icon: "Languages",
        color: "from-emerald-500/20 to-teal-500/10",
        accent: "text-emerald-400",
        border: "border-emerald-500/30",
      }
    ]
  },

  technicalSkills: [
    {
      category: "Programming",
      description: "Core programming language for software development and computational logic.",
      items: [
        {
          name: "Python",
          description: "General-purpose programming, scripting, data handling, and AI/ML algorithms.",
          icon: "Terminal",
          tag: "Core Language",
          gradient: "from-blue-600 to-cyan-500"
        }
      ]
    },
    {
      category: "Web Technologies",
      description: "Foundational markup and frontend structuring for web user interfaces.",
      items: [
        {
          name: "HTML",
          description: "Semantic web structure, accessible DOM organization, and user interface elements.",
          icon: "Code2",
          tag: "Frontend",
          gradient: "from-orange-500 to-amber-500"
        }
      ]
    },
    {
      category: "Database",
      description: "Structured data storage, querying, and relational database management.",
      items: [
        {
          name: "SQL",
          description: "Relational database querying, schema design, data retrieval, and data manipulation.",
          icon: "Database",
          tag: "Data Management",
          gradient: "from-blue-500 to-indigo-600"
        }
      ]
    },
    {
      category: "Artificial Intelligence",
      description: "Foundations of modern AI, algorithmic intelligence, and cognitive computing.",
      items: [
        {
          name: "AI Fundamentals",
          description: "Machine learning workflows, NLP concepts, pattern recognition, and neural concepts.",
          icon: "Brain",
          tag: "Specialization",
          gradient: "from-violet-500 to-purple-600"
        }
      ]
    },
    {
      category: "Problem Solving",
      description: "Algorithmic thinking, debugging methods, and computational solution engineering.",
      items: [
        {
          name: "Problem Solving",
          description: "Analytical reasoning, breaking down complex engineering challenges into efficient steps.",
          icon: "Sparkles",
          tag: "Engineering Mindset",
          gradient: "from-cyan-500 to-blue-600"
        }
      ]
    }
  ],

  featuredProject: {
    title: "AI-Based Resume Screening System",
    badge: "Featured AI / ML Project",
    overview: "An AI-powered resume screening system that uses Artificial Intelligence and Natural Language Processing to analyze resumes, extract relevant skills, and rank candidates based on a given job description. The system aims to make candidate screening faster and more consistent.",
    technologies: [
      { name: "Python", category: "Core Backend" },
      { name: "AI / NLP", category: "Intelligent Processing" },
      { name: "SQL", category: "Candidate Database" }
    ],
    keyFeatures: [
      {
        title: "Resume Parsing",
        description: "Intelligent document reading and unstructured text extraction from diverse candidate resumes."
      },
      {
        title: "Skill Extraction",
        description: "NLP tokenization and entity recognition identifying core technical skills and qualifications."
      },
      {
        title: "Job Description Matching",
        description: "Vector similarity and contextual keyword comparison matching resumes against role criteria."
      },
      {
        title: "Candidate Ranking",
        description: "Automated scoring matrix delivering objective, ranked candidate shortlists for recruiters."
      }
    ],
    // Editable placeholders - will not invent fake URLs
    projectUrlPlaceholder: "https://github.com/your-username/ai-resume-screener",
    demoUrlPlaceholder: "https://ai-resume-screener-demo.placeholder",
  },

  education: {
    institution: "Dr. M.G.R. Educational and Research Institute, Chennai",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering – Artificial Intelligence & Machine Learning",
    cgpa: "8.5 / 10",
    status: "Currently Pursuing",
    location: "Chennai, Tamil Nadu, India",
    highlights: [
      "Rigorous curriculum covering Data Structures, Artificial Intelligence, Machine Learning, and Database Management Systems.",
      "Hands-on project work developing AI-driven solutions and database-backed applications.",
      "Active participant in technical symposiums, workshops, and collaborative problem-solving sessions."
    ]
  },

  softSkills: [
    {
      title: "Communication",
      description: "Articulating technical concepts clearly, documenting project workflows, and collaborating effectively with peers.",
      icon: "MessageSquare",
      color: "from-blue-500/20 to-blue-600/10",
      accent: "text-blue-400"
    },
    {
      title: "Problem Solving",
      description: "Approaching challenges methodically, identifying edge cases, and engineering structured, pragmatic solutions.",
      icon: "Lightbulb",
      color: "from-amber-500/20 to-yellow-600/10",
      accent: "text-amber-400"
    },
    {
      title: "Teamwork",
      description: "Thriving in collaborative environments, sharing insights, and aligning toward shared technical milestones.",
      icon: "Users",
      color: "from-purple-500/20 to-purple-600/10",
      accent: "text-purple-400"
    },
    {
      title: "Time Management",
      description: "Prioritizing tasks efficiently, balancing academic rigor with hands-on project execution, and meeting deadlines.",
      icon: "Clock",
      color: "from-emerald-500/20 to-teal-600/10",
      accent: "text-emerald-400"
    },
    {
      title: "Adaptability",
      description: "Quickly adjusting to emerging frameworks, shifting project requirements, and evolving technological landscapes.",
      icon: "Compass",
      color: "from-cyan-500/20 to-sky-600/10",
      accent: "text-cyan-400"
    },
    {
      title: "Quick Learning",
      description: "Rapidly absorbing new programming paradigms, AI concepts, and software tools to implement solutions faster.",
      icon: "Zap",
      color: "from-rose-500/20 to-pink-600/10",
      accent: "text-rose-400"
    }
  ],

  languages: [
    {
      name: "English",
      nativeScript: "English",
      description: "Professional working communication for technical documentation, academic presentations, and development collaboration.",
      accent: "from-blue-500 to-indigo-500",
      border: "border-blue-500/30"
    },
    {
      name: "Telugu",
      nativeScript: "తెలుగు",
      description: "Native linguistic fluency with natural verbal and written articulation.",
      accent: "from-purple-500 to-pink-500",
      border: "border-purple-500/30"
    },
    {
      name: "Hindi",
      nativeScript: "हिन्दी",
      description: "Effective conversational and communicative competence for versatile multi-regional collaboration.",
      accent: "from-emerald-500 to-cyan-500",
      border: "border-emerald-500/30"
    }
  ],

  socialPlaceholders: {
    github: {
      label: "GitHub",
      placeholder: "https://github.com/your-username",
      isEditable: true,
      note: "Editable placeholder — click to customize or copy profile template"
    },
    linkedin: {
      label: "LinkedIn",
      placeholder: "https://linkedin.com/in/your-profile",
      isEditable: true,
      note: "Editable placeholder — click to customize or copy profile template"
    },
    email: {
      label: "Email",
      value: "saichandra118@gmail.com",
      url: "mailto:saichandra118@gmail.com"
    },
    phone: {
      label: "Phone",
      value: "+91 9618374249",
      url: "tel:9618374249"
    }
  }
};
