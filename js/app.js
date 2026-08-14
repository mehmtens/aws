/**
 * MAIN APPLICATION LOGIC & COMPONENT CONTROLLERS
 * Mehmet Enes Aldağ - Computer Engineering Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme & Localization
  const themeLocale = new ThemeAndLocaleManager();

  // 2. Initialize Interactive Terminal
  const terminal = new InteractiveTerminal('hero-terminal', 'terminal-cli-input', 'terminal-cli-body');

  // 3. SVG Icon Helper (Lucide standard SVG strings)
  function getSvgIcon(iconName) {
    const icons = {
      code: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      terminal: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
      layers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      cpu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
      layout: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      database: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
      grid: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
      palette: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
      smartphone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
      globe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      server: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
      'git-branch': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
      cloud: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
      'upload-cloud': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>',
      external: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
      github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
    };
    return icons[iconName] || icons.code;
  }

  // 4. Typewriter Effect
  const typewriterTarget = document.getElementById('hero-typewriter-text');
  let currentStringIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typewriterTimeout = null;

  function runTypewriter() {
    const lang = themeLocale.currentLang;
    const strings = PORTFOLIO_DATA.translations[lang].hero.typewriter;
    const currentStr = strings[currentStringIndex % strings.length];

    if (!isDeleting) {
      currentCharIndex++;
      typewriterTarget.textContent = currentStr.substring(0, currentCharIndex);
      if (currentCharIndex >= currentStr.length) {
        isDeleting = true;
        typewriterTimeout = setTimeout(runTypewriter, 2000);
        return;
      }
      typewriterTimeout = setTimeout(runTypewriter, 75);
    } else {
      currentCharIndex--;
      typewriterTarget.textContent = currentStr.substring(0, currentCharIndex);
      if (currentCharIndex <= 0) {
        isDeleting = false;
        currentStringIndex++;
        typewriterTimeout = setTimeout(runTypewriter, 400);
        return;
      }
      typewriterTimeout = setTimeout(runTypewriter, 35);
    }
  }

  runTypewriter();

  window.addEventListener('langChanged', () => {
    clearTimeout(typewriterTimeout);
    currentCharIndex = 0;
    isDeleting = false;
    runTypewriter();
    renderSkills(currentSkillFilter);
    renderProjects(currentProjectFilter);
    renderTimeline();
  });

  // 5. Render Skills Matrix
  const skillsContainer = document.getElementById('skills-grid');
  let currentSkillFilter = 'all';

  function renderSkills(filter = 'all') {
    if (!skillsContainer) return;
    currentSkillFilter = filter;
    skillsContainer.innerHTML = '';

    const filtered = filter === 'all' 
      ? PORTFOLIO_DATA.skills 
      : PORTFOLIO_DATA.skills.filter(s => s.category === filter);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-icon">${getSvgIcon(skill.icon)}</div>
        <div class="skill-info">
          <div class="skill-name">${skill.name}</div>
          <div class="skill-category">${skill.level}</div>
        </div>
      `;
      skillsContainer.appendChild(card);
    });
  }

  // Skills filter buttons
  document.querySelectorAll('#skills-filter-group .filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#skills-filter-group .filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderSkills(cat);
    });
  });

  renderSkills('all');

  // 6. Render Projects
  const projectsContainer = document.getElementById('projects-grid');
  let currentProjectFilter = 'all';

  function renderProjects(filter = 'all') {
    if (!projectsContainer) return;
    currentProjectFilter = filter;
    projectsContainer.innerHTML = '';

    const lang = themeLocale.currentLang;
    const t = PORTFOLIO_DATA.translations[lang].projects;

    const filtered = filter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      
      const tagsHtml = project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');

      card.innerHTML = `
        <div class="project-banner">
          <span class="project-badge-type">${project.badge}</span>
          <span class="project-mockup-tag">&lt;/${project.title}&gt;</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description[lang]}</p>
          <div class="project-tags">${tagsHtml}</div>
          <div class="project-links">
            <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
              ${t.liveDemo} ${getSvgIcon('external')}
            </a>
            <button class="btn btn-sm btn-outline project-detail-btn" data-project-id="${project.id}">
              ${t.detailsBtn}
            </button>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    // Bind detail modal clicks
    document.querySelectorAll('.project-detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  // Projects filter buttons
  document.querySelectorAll('#projects-filter-group .filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#projects-filter-group .filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  renderProjects('all');

  // 7. Project Deep Dive Modal Logic
  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBody = document.getElementById('modal-project-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    const lang = themeLocale.currentLang;
    modalTitle.textContent = `${project.title} — System Architecture & Overview`;
    
    modalBody.innerHTML = `
      <div style="margin-bottom: var(--space-lg);">
        <h4 style="font-family: var(--font-mono); color: var(--accent-primary); margin-bottom: 8px;">Architecture & Purpose</h4>
        <p style="color: var(--text-secondary); line-height: 1.7;">${project.details[lang]}</p>
      </div>

      <div style="margin-bottom: var(--space-lg);">
        <h4 style="font-family: var(--font-mono); color: var(--accent-secondary); margin-bottom: 8px;">Tech Stack Breakdown</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.tags.map(tag => `<span class="tag-badge" style="background: var(--bg-surface-elevated); padding: 4px 10px;">${tag}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: var(--space-xl);">
        <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">
          Open Live App ${getSvgIcon('external')}
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
          ${getSvgIcon('github')} GitHub Repo
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 8. Render Timeline
  const timelineContainer = document.getElementById('timeline-list');
  function renderTimeline() {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = '';
    const lang = themeLocale.currentLang;

    PORTFOLIO_DATA.timeline.forEach(item => {
      const el = document.createElement('div');
      el.className = 'timeline-item';
      el.innerHTML = `
        <div class="timeline-node"></div>
        <div class="timeline-content">
          <div class="timeline-period">${item.period}</div>
          <h3 class="timeline-title">${item.title[lang]}</h3>
          <div class="timeline-organization">${item.organization[lang]}</div>
          <p class="timeline-description">${item.desc[lang]}</p>
        </div>
      `;
      timelineContainer.appendChild(el);
    });
  }

  renderTimeline();

  // 9. Toast Notification System
  function showToast(msg) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${getSvgIcon('code')} <span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // 10. Copy Email Pill
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        const lang = themeLocale.currentLang;
        showToast(lang === 'en' ? `Copied ${email} to clipboard!` : `${email} panoya kopyalandı!`);
      }).catch(() => {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
      });
    });
  }

  // 11. Contact Form Submit Simulation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      const lang = themeLocale.currentLang;

      submitBtn.disabled = true;
      submitBtn.textContent = lang === 'en' ? 'Preparing...' : 'Hazırlanıyor...';

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        showToast(lang === 'en' ? 'Message client ready! Opening mail...' : 'Mesaj istemcisi hazırlandı!');
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        contactForm.reset();
      }, 700);
    });
  }

  // 12. Navbar Scrollspy & Mobile Toggle
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('nav-mobile-toggle');
  const navLinksContainer = document.getElementById('nav-links-menu');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });

    navLinks.forEach(l => {
      l.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
