/**
 * PORTFOLIO DATA & MULTILINGUAL CONTENT
 * Mehmet Enes Aldağ - Computer Engineering Portfolio
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Mehmet Enes Aldağ",
    email: "mehmetenesaldag@gmail.com",
    github: "https://github.com/mehmtens",
    linkedin: "https://www.linkedin.com/in/mehmet-enes-alda%C4%9F-1b913426a/",
    status: {
      en: "Available for Software Engineering & Internships",
      tr: "Yazılım Mühendisliği & Staj Fırsatlarına Açık"
    },
    metrics: [
      { value: "5+", label: { en: "Live Systems & Apps", tr: "Canlı Sistem & Proje" } },
      { value: "8+", label: { en: "Tech Stacks & Langs", tr: "Teknoloji & Dil" } },
      { value: "100%", label: { en: "Clean Code Mindset", tr: "Temiz Kod & Mimari" } }
    ]
  },

  translations: {
    en: {
      nav: { about: "About", skills: "Skills", projects: "Projects", timeline: "Journey", contact: "Contact", resume: "Resume / CV" },
      hero: {
        greeting: "Hello, world! I am",
        typewriter: ["Computer Engineering Student", "Full-Stack Web Developer", "C++ & Systems Engineer", "Physics Simulation & Emulation Dev", "Problem Solver & Tech Enthusiast"],
        description: "Passionate computer engineering student dedicated to architecting reliable software, interactive web applications, systems emulators, and scalable digital solutions with modern best practices.",
        ctaProjects: "Explore Projects", ctaContact: "Get in Touch", terminalTitle: "aldag@engineer-workstation:~"
      },
      about: {
        tag: "Engineering Profile", title: "Architecting Software with Purpose", subtitle: "A blend of academic foundations and hands-on modern software engineering.",
        bioP1: "I am a Computer Engineering student with a deep interest in software architecture, algorithm design, system emulation, and modern full-stack web technologies. My goal is to build responsive, accessible, and high-performance digital tools that solve real-world problems.",
        bioP2: "From low-level systems programming in C++ (CHIP-8 emulator) and JavaScript physics engines (Elementum) to dynamic real-time web applications with React, PostgreSQL, and Cloud tooling, I enjoy tackling engineering challenges from the ground up.",
        badgeTitle: "Computer Engineering Student", badgeSub: "Algorithm & Systems Focused",
        pillars: [
          { title: "Clean Architecture", desc: "Writing modular, testable, and maintainable code adhering to SOLID principles." },
          { title: "Algorithms & Low-Level Systems", desc: "Optimizing computational complexity, CPU cycle emulation, and physics simulations." },
          { title: "Modern Web Systems", desc: "Crafting fluid, accessible, and responsive user experiences with modern stacks." },
          { title: "Cloud & Databases", desc: "Designing robust relational schemas and leveraging cloud deployments." }
        ]
      },
      skills: { tag: "Technical Stack", title: "Skills & Technologies", subtitle: "Core technologies, frameworks, and developer tools in my engineering workflow.", filterAll: "All Technologies", filterLanguages: "Languages", filterFrontend: "Frontend", filterBackend: "Backend & DB", filterTools: "DevOps & Tools" },
      projects: { tag: "Featured Work", title: "Highlighted Projects", subtitle: "Real-world web applications, hardware emulators, and physics engines built for performance and usability.", filterAll: "All Projects", filterWeb: "Web Apps", filterSystems: "Systems & Physics", liveDemo: "Live Demo", sourceCode: "Source Code", detailsBtn: "Deep Dive" },
      timeline: { tag: "Milestones", title: "Education & Growth", subtitle: "Key academic foundations and continuous software engineering journey." },
      contact: { tag: "Get In Touch", title: "Let's Build Something Great", subtitle: "Have an exciting project, internship opportunity, or just want to talk tech? Drop a line!", directEmailTitle: "Direct Email Communication", copyEmail: "Copy Email", copied: "Copied!", formName: "Your Name", formEmail: "Your Email Address", formSubject: "Subject", formMessage: "Your Message", formSubmit: "Send Message", sending: "Sending...", sentSuccess: "Thank you! Your message has been prepared." },
      footer: { rights: "All rights reserved.", builtWith: "Engineered with Vanilla HTML5, CSS3 & JavaScript. Zero Bloat." }
    },
    tr: {
      nav: { about: "Hakkımda", skills: "Yetenekler", projects: "Projeler", timeline: "Yolculuk", contact: "İletişim", resume: "Özgeçmiş / CV" },
      hero: {
        greeting: "Merhaba dünya! Ben",
        typewriter: ["Bilgisayar Mühendisliği Öğrencisi", "Full-Stack Web Geliştirici", "C++ & Sistem Mühendisi", "Fizik Simülasyonu & Emülatör Geliştiricisi", "Problem Çözücü & Teknoloji Tutkunu"],
        description: "Modern standartlarla güvenilir yazılımlar, etkileşimli web uygulamaları, donanım emülatörleri ve ölçeklenebilir dijital çözümler üreten bilgisayar mühendisliği öğrencisi.",
        ctaProjects: "Projelerimi İncele", ctaContact: "İletişime Geç", terminalTitle: "aldag@muhendis-istasyonu:~"
      },
      about: {
        tag: "Mühendislik Profili", title: "Amaca Yönelik Yazılım Mimarisi", subtitle: "Güçlü akademik temeller ve modern yazılım geliştirme pratiklerinin birleşimi.",
        bioP1: "Yazılım mimarisi, algoritma tasarımı, sistem emülasyonu ve modern full-stack web teknolojilerine tutkuyla bağlı bir Bilgisayar Mühendisliği öğrencisiyim. Amacım, gerçek dünya problemlerini çözen hızlı, erişilebilir ve yüksek performanslı dijital araçlar geliştirmek.",
        bioP2: "C++ ile donanım emülasyonundan (CHIP-8) JavaScript piksel fizik motoruna (Elementum) ve React/PostgreSQL ile canlı web sistemlerine kadar mühendislik problemlerine bütüncül yaklaşıyorum.",
        badgeTitle: "Bilgisayar Mühendisliği", badgeSub: "Algoritma & Sistem Odaklı",
        pillars: [
          { title: "Temiz Mimari", desc: "SOLID prensiplerine uygun modüler, test edilebilir ve sürdürülebilir kod." },
          { title: "Algoritmalar & Düşük Seviyeli Sistemler", desc: "Zaman ve alan karmaşıklığı optimizasyonu, CPU döngüleri ve fizik modellemesi." },
          { title: "Modern Web Sistemleri", desc: "Akıcı, erişilebilir ve tam duyarlı kullanıcı arayüzleri." },
          { title: "Bulut & Veritabanı", desc: "İlişkisel veritabanı şemaları ve modern bulut dağıtım süreçleri." }
        ]
      },
      skills: { tag: "Teknik Yetkinlikler", title: "Yetenekler & Teknolojiler", subtitle: "Mühendislik süreçlerimde kullandığım temel teknolojiler, kütüphaneler ve geliştirici araçları.", filterAll: "Tüm Teknolojiler", filterLanguages: "Diller", filterFrontend: "Ön Yüz", filterBackend: "Arka Yüz & VT", filterTools: "DevOps & Araçlar" },
      projects: { tag: "Öne Çıkan Çalışmalar", title: "Projelerim", subtitle: "Performans, fizik simülasyonları ve kullanıcı deneyimi odaklı gerçek dünya yazılımları.", filterAll: "Tüm Projeler", filterWeb: "Web Uygulamaları", filterSystems: "Sistem & Fizik", liveDemo: "Canlı Önizleme", sourceCode: "Kaynak Kod", detailsBtn: "Detaylı İncele" },
      timeline: { tag: "Kilometre Taşları", title: "Eğitim & Gelişim", subtitle: "Akademik temellerim ve sürekli yazılım mühendisliği yolculuğum." },
      contact: { tag: "İletişim", title: "Birlikte Harika Şeyler Üretelim", subtitle: "Yeni bir proje, staj fırsatı veya teknoloji sohbeti için dilediğin zaman bana ulaşabilirsin!", directEmailTitle: "Doğrudan E-posta İletişimi", copyEmail: "E-postayı Kopyala", copied: "Kopyalandı!", formName: "Adınız Soyadınız", formEmail: "E-posta Adresiniz", formSubject: "Konu", formMessage: "Mesajınız", formSubmit: "Mesaj Gönder", sending: "Gönderiliyor...", sentSuccess: "Teşekkürler! Mesajınız hazırlandı." },
      footer: { rights: "Tüm hakları saklıdır.", builtWith: "Vanilla HTML5, CSS3 ve JavaScript ile geliştirildi. Sıfır gereksiz yük." }
    }
  },

  skills: [
    { name: "C / C++", category: "languages", level: "Low-Level & Emulators", icon: "code" },
    { name: "Python", category: "languages", level: "Algorithms & Scripting", icon: "terminal" },
    { name: "Java", category: "languages", level: "OOP & Systems", icon: "layers" },
    { name: "JavaScript (ES6+)", category: "languages", level: "Modern Async & Canvas", icon: "cpu" },
    { name: "HTML5 / CSS3", category: "languages", level: "Semantic & Responsive", icon: "layout" },
    { name: "SQL (PostgreSQL)", category: "languages", level: "Relational Queries", icon: "database" },
    { name: "React.js", category: "frontend", level: "SPA & Hooks State", icon: "grid" },
    { name: "Tailwind CSS", category: "frontend", level: "Utility-First", icon: "palette" },
    { name: "HTML5 Canvas API", category: "frontend", level: "Physics & Rendering", icon: "cpu" },
    { name: "Responsive UI/UX", category: "frontend", level: "Mobile First Design", icon: "smartphone" },
    { name: "PostgreSQL", category: "backend", level: "Database Engine", icon: "database" },
    { name: "RESTful APIs", category: "backend", level: "API Integration", icon: "server" },
    { name: "Git & GitHub", category: "tools", level: "Version Control", icon: "git-branch" },
    { name: "AWS Cloud Basics", category: "tools", level: "Cloud Hosting", icon: "cloud" },
    { name: "Linux / Bash", category: "tools", level: "CLI & Systems", icon: "terminal" },
    { name: "Vercel / GitHub Pages", category: "tools", level: "Deployment CI/CD", icon: "upload-cloud" }
  ],

  projects: [
    {
      id: "saha", title: "SAHA", category: "web", badge: "Live Score & Analytics",
      description: { en: "A real-time soccer dashboard delivering live match scores, team statistics, fixture tracking, and match dynamics with high responsiveness.", tr: "Futbolda anlık ve canlı skor takibi, takım analizleri ve lig fikstürlerini gerçek zamanlı sunan web platformu." },
      tags: ["React", "Tailwind CSS", "Live APIs", "Vercel"], liveUrl: "https://live-score-dashboard.vercel.app/", githubUrl: "https://github.com/mehmtens",
      details: { en: "SAHA is built with high-performance front-end architecture to display match schedules, live score updates, and team data seamlessly without lag.", tr: "SAHA, maç programlarını, canlı skor güncellemelerini ve takım verilerini sıfır gecikmeyle sunmak üzere optimize edilmiş modern ön yüz mimarisi ile inşa edilmiştir." }
    },
    {
      id: "lingova", title: "Lingova", category: "web", badge: "Interactive Education",
      description: { en: "An interactive, modern language learning web application designed to accelerate vocabulary acquisition, listening comprehension, and structured practice.", tr: "Kelime dağarcığını geliştirmeyi ve dil öğrenim sürecini interaktif pratiklerle hızlandırmayı amaçlayan modern dil öğrenme platformumuz." },
      tags: ["React", "JavaScript", "CSS Modules", "Vercel"], liveUrl: "https://lingova-dcan.vercel.app/", githubUrl: "https://github.com/mehmtens",
      details: { en: "Lingova provides intuitive interactive modules, visual flashcards, and gamified progress tracking for learners.", tr: "Lingova, kullanıcılar için sezgisel öğrenme modülleri, interaktif kartlar ve oyunlaştırılmış gelişim takibi sunar." }
    },
    {
      id: "simumath", title: "SimuMath", category: "web", badge: "Equation to Diagram",
      description: { en: "Transform complex equations into interactive visual diagrams and simulations in a single unified window.", tr: "Denklemden diyagrama, tek pencerede matematiksel ve fiziksel görselleştirme platformu." },
      tags: ["React", "Math Engines", "Canvas", "Vercel"], liveUrl: "https://simumath-web.vercel.app/", githubUrl: "https://github.com/mehmtens",
      details: { en: "SimuMath parses mathematical expressions and dynamically renders graph topologies, geometry diagrams, and numeric equations in real-time.", tr: "SimuMath matematiksel ifadeleri ayrıştırarak gerçek zamanlı dinamik grafikler, geometri diyagramları ve analitik simülasyonlar üretir." }
    },
    {
      id: "kurus", title: "Kuruş", category: "web", badge: "Personal Finance Platform",
      description: { en: "A full-stack personal finance application for securely tracking income and expenses with authenticated user accounts.", tr: "Kişisel gelir ve giderleri güvenli şekilde takip etmeyi sağlayan, kullanıcı kimlik doğrulamalı full-stack finans uygulaması." },
      tags: ["Go", "React 19", "TypeScript", "PostgreSQL", "JWT", "Docker"], liveUrl: "https://github.com/mehmtens/expense-tracker", githubUrl: "https://github.com/mehmtens/expense-tracker",
      details: { en: "Kuruş combines a Go REST API, PostgreSQL, JWT authentication and bcrypt password hashing with a React 19 + TypeScript frontend, Vite, Tailwind CSS and Docker-based development.", tr: "Kuruş; Go REST API, PostgreSQL, JWT kimlik doğrulama ve bcrypt güvenliğini React 19 + TypeScript, Vite, Tailwind CSS ve Docker tabanlı geliştirme ortamıyla birleştirir." }
    },
    {
      id: "snipvault", title: "SnipVault", category: "web", badge: "Secure Code & Text Vault",
      description: { en: "A secure code and text vault for creating public, unlisted or private snippets, sharing clean links, and managing a personal snippet library.", tr: "Public, listelenmemiş veya özel kod/metin snippet'leri oluşturmayı, temiz bağlantılarla paylaşmayı ve kişisel arşivi yönetmeyi sağlayan güvenli platform." },
      tags: ["Go", "PostgreSQL", "JWT", "Docker", "Neon", "Vercel"], liveUrl: "https://snipvault-mehmetenesaldag-8600s-projects.vercel.app", githubUrl: "https://github.com/mehmtens/snipvault",
      details: { en: "SnipVault features expiring snippets, email verification, search and filters, favorites, secure account management, CSRF protection and rate limiting. Production uses Neon PostgreSQL and Vercel Functions.", tr: "SnipVault; süreli snippet'ler, e-posta doğrulama, arama/filtreleme, favoriler, güvenli hesap yönetimi, CSRF koruması ve rate limiting sunar. Production ortamında Neon PostgreSQL ve Vercel Functions kullanır." }
    },
    {
      id: "chip8-emulator", title: "CHIP-8 Emulator", category: "systems", badge: "C++ Systems Architecture",
      description: { en: "Hardcoded CHIP-8 virtual machine emulator implemented from scratch in C++, featuring opcode decoding, 64x32 graphics rendering, timers, and audio beeps.", tr: "C++ ile sıfırdan yazılmış hardcoded CHIP-8 Emülatörü; opcode işleme, 64x32 piksel render, zamanlayıcılar ve bellek yönetimi." },
      tags: ["C++", "Systems Programming", "Emulation", "Memory Architecture"], liveUrl: "https://github.com/mehmtens/chip8-emulator", githubUrl: "https://github.com/mehmtens/chip8-emulator",
      details: { en: "Implements the 35 original CHIP-8 opcodes, 4K RAM, 16 8-bit registers (V0-VF), 16-bit program counter, stack pointer, and monochrome display buffer with precise cycle timing.", tr: "35 adet CHIP-8 opcodunu, 4K RAM yönetimini, 16 adet 8-bit register'ı (V0-VF), yığın işaretçisini ve döngü senkronizasyonlu monokrom ekran belleğini içerir." }
    },
    {
      id: "elementum", title: "Elementum", category: "systems", badge: "Physics Engine & Sandbox",
      description: { en: "Interactive cellular automata and pixel physics sandbox engine simulating falling sand, fluids, thermodynamics, and chemical reactions in real-time.", tr: "Piksel tabanlı fizik motoru ve sandbox simülasyonu; kum, su, ateş ve akışkan dinamiklerini hücresel otomat mantığıyla gerçek zamanlı simüle eder." },
      tags: ["JavaScript", "HTML5 Canvas API", "Physics Engine", "Algorithms"], liveUrl: "https://mehmtens.github.io/elementum/", githubUrl: "https://github.com/mehmtens/elementum",
      details: { en: "Simulates particle velocity, density-based displacement, fluid dispersion, and state transitions using direct 2D Canvas ImageData pixel manipulation at steady 60 FPS.", tr: "Doğrudan HTML5 Canvas ImageData manipülasyonu ile parçacık yerçekimi, yoğunluk farkı, sıvı yayılımı ve termodinamik durum değişimlerini 60 FPS hızında simüle eder." }
    }
  ],

  timeline: [
    {
      period: "2023 - Present",
      title: { en: "Computer Engineering Student", tr: "Bilgisayar Mühendisliği Öğrencisi" },
      organization: { en: "Undergraduate Program", tr: "Lisans Eğitimi" },
      desc: { en: "Deep-diving into fundamental computing theories: Algorithms, Data Structures, Object-Oriented Programming (Java/C++), Relational Database Design (PostgreSQL), Computer Organization, and Software Design Patterns.", tr: "Bilgisayar bilimlerinin temelleri: Algoritmalar, Veri Yapıları, Nesne Yönelimli Programlama (Java/C++), İlişkisel Veritabanları (PostgreSQL), Bilgisayar Organizasyonu ve Yazılım Tasarım Desenleri üzerine yoğunlaşma." }
    },
    {
      period: "2024 - Present",
      title: { en: "Systems, Physics & Web Development", tr: "Sistem, Fizik & Web Geliştirme" },
      organization: { en: "Open Source & Production Projects", tr: "Açık Kaynak & Canlı Projeler" },
      desc: { en: "Built a C++ CHIP-8 emulator, Elementum (pixel physics engine), SimuMath, and production web platforms SAHA & Lingova. Actively practicing cloud tooling and system optimizations.", tr: "C++ CHIP-8 donanım emülatörü, Elementum piksel fizik motoru, SimuMath ve SAHA & Lingova gibi canlı projeleri hayata geçirerek mühendislik becerilerini pekiştirme." }
    }
  ]
};