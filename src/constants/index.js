// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    "id": 1,
    "name": "QuteMail",
    "tagline": "Email, with encryption choices",
    "description": "Connect email accounts, sync an inbox and compose messages with AES encryption or simulated BB84 key exchange. A React mailbox connects to a Django REST API for sending, receiving and key management.",
    "href": "https://github.com/Nithesh8678/QuteMail",
    "linkLabel": "View source",
    "image": "/assets/projects/QuteMail.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "React"
      },
      {
        "id": 2,
        "name": "TypeScript"
      },
      {
        "id": 3,
        "name": "Django REST"
      },
      {
        "id": 4,
        "name": "Tailwind CSS"
      }
    ]
  },
  {
    "id": 2,
    "name": "AI-DPR",
    "tagline": "From documents to review decisions",
    "description": "Upload PDF, DOCX or text project reports for extraction and automated completeness, compliance, feasibility and risk checks. The dashboard presents scores, section breakdowns and recommendations to support human review.",
    "href": "https://github.com/Nithesh8678/AI-DPR",
    "linkLabel": "View source",
    "image": "/assets/projects/AI-DPR.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "React"
      },
      {
        "id": 2,
        "name": "TypeScript"
      },
      {
        "id": 3,
        "name": "FastAPI"
      },
      {
        "id": 4,
        "name": "PyMuPDF"
      }
    ]
  },
  {
    "id": 3,
    "name": "bartr",
    "tagline": "Skills worth exchanging",
    "description": "Create a profile with skills you offer and skills you need, discover matching people and manage exchange requests. Includes Gemini-assisted matching with a fallback, plus real-time chat and file sharing.",
    "href": "https://github.com/Nithesh8678/bartr",
    "linkLabel": "View source",
    "image": "/assets/projects/bartr.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "Next.js"
      },
      {
        "id": 2,
        "name": "TypeScript"
      },
      {
        "id": 3,
        "name": "Supabase"
      },
      {
        "id": 4,
        "name": "Gemini"
      }
    ]
  },
  {
    "id": 4,
    "name": "FindChain",
    "tagline": "A clearer path back to your things",
    "description": "Report lost or found items with photos, locations and descriptions, then track them in a personal dashboard. Firebase stores the reports, while Gemini compares report details and explains potential matches.",
    "href": "https://github.com/Nithesh8678/FindChain",
    "linkLabel": "View source",
    "image": "/assets/projects/FindChain.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "React"
      },
      {
        "id": 2,
        "name": "TypeScript"
      },
      {
        "id": 3,
        "name": "Vite"
      },
      {
        "id": 4,
        "name": "Firebase"
      },
      {
        "id": 5,
        "name": "Gemini"
      }
    ]
  },
  {
    "id": 5,
    "name": "meshT",
    "tagline": "Signed offline. Relayed nearby.",
    "description": "Sign crypto transfers on a phone without an internet connection and relay them through nearby Bluetooth devices. An internet-connected gateway submits them to the blockchain; the app includes wallet, mesh-status and transaction views.",
    "href": "https://github.com/Nithesh8678/meshT",
    "linkLabel": "View source",
    "image": "/assets/projects/meshT.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "React Native"
      },
      {
        "id": 2,
        "name": "Expo"
      },
      {
        "id": 3,
        "name": "TypeScript"
      },
      {
        "id": 4,
        "name": "BLE"
      },
      {
        "id": 5,
        "name": "ethers"
      }
    ]
  },
  {
    "id": 6,
    "name": "JOCKY",
    "tagline": "Evidence-led endpoint investigation",
    "description": "Collect read-only endpoint evidence with a Rust agent and a custom investigation language. A FastAPI and PostgreSQL backend powers a Next.js dashboard for scans, investigations, hash verification and reports.",
    "href": "https://github.com/Nithesh8678/jocky",
    "linkLabel": "View source",
    "image": "/assets/projects/jocky.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "Rust"
      },
      {
        "id": 2,
        "name": "FastAPI"
      },
      {
        "id": 3,
        "name": "PostgreSQL"
      },
      {
        "id": 4,
        "name": "Next.js"
      }
    ]
  },
  {
    "id": 7,
    "name": "Unavo",
    "tagline": "Home-style meals, delivered in Chennai",
    "description": "A meal-delivery website for Chennai with a budget-plan selection and availability flow. Customers can explore meals and contact the team; customized and diet plans are shown as coming soon.",
    "href": "https://www.unavo.in/",
    "linkLabel": "Visit website",
    "image": "/assets/projects/unavo.webp",
    "visualLabel": "Live website screenshot",
    "frameworks": [
      {
        "id": 1,
        "name": "Next.js"
      },
      {
        "id": 2,
        "name": "TypeScript"
      },
      {
        "id": 3,
        "name": "Prisma"
      },
      {
        "id": 4,
        "name": "PostgreSQL"
      }
    ]
  },
  {
    "id": 8,
    "name": "NotchPilot",
    "tagline": "Voice commands from the MacBook notch",
    "description": "A native macOS app with on-device speech recognition and a notch-area interface. Spoken commands launch apps, open folders and websites, adjust volume and operate supported Accessibility controls, with cancellation and a bounded action queue.",
    "href": "https://github.com/Nithesh8678/notchpilot",
    "linkLabel": "View source",
    "image": "/assets/projects/notchpilot.svg",
    "visualLabel": "Designed feature preview",
    "frameworks": [
      {
        "id": 1,
        "name": "Swift"
      },
      {
        "id": 2,
        "name": "SwiftUI"
      },
      {
        "id": 3,
        "name": "AppKit"
      },
      {
        "id": 4,
        "name": "Apple Speech"
      }
    ]
  }
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/nitheyyyshhh" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nithesh-sk" },
  { name: "GitHub", href: "https://github.com/Nithesh8678" },
];
