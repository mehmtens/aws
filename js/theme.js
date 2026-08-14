/**
 * THEME & LOCALIZATION MANAGER
 * Mehmet Enes Aldağ - Computer Engineering Portfolio
 */

class ThemeAndLocaleManager {
  constructor() {
    this.currentTheme = localStorage.getItem('aldag_theme') || 'dark';
    this.currentLang = localStorage.getItem('aldag_lang') || 'en';
    
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyLang(this.currentLang);

    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const themes = ['dark', 'oled', 'slate', 'light'];
        const nextIdx = (themes.indexOf(this.currentTheme) + 1) % themes.length;
        this.applyTheme(themes[nextIdx]);
      });
    }

    // Language toggle button
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = this.currentLang === 'en' ? 'tr' : 'en';
        this.applyLang(nextLang);
      });
    }
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? '' : theme);
    localStorage.setItem('aldag_theme', theme);

    // Update button text/icon if needed
    const themeLabel = document.getElementById('theme-label');
    if (themeLabel) {
      themeLabel.textContent = theme.toUpperCase();
    }
  }

  applyLang(lang) {
    this.currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('aldag_lang', lang);

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'TR' : 'EN';
    }

    // Trigger full DOM text update
    this.updateDomTranslations(lang);
    
    // Dispatch custom event for dynamic components (like typewriter and project cards)
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  updateDomTranslations(lang) {
    const t = PORTFOLIO_DATA.translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n').split('.');
      let val = t;
      for (const key of keyPath) {
        if (val && val[key] !== undefined) {
          val = val[key];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Update form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n-placeholder').split('.');
      let val = t;
      for (const key of keyPath) {
        if (val && val[key] !== undefined) {
          val = val[key];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null && typeof val === 'string') {
        el.setAttribute('placeholder', val);
      }
    });
  }
}
