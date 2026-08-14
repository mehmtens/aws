/**
 * INTERACTIVE TERMINAL EMULATOR
 * Mehmet Enes Aldağ - Computer Engineering Portfolio
 */

class InteractiveTerminal {
  constructor(containerId, inputId, bodyId) {
    this.container = document.getElementById(containerId);
    this.input = document.getElementById(inputId);
    this.body = document.getElementById(bodyId);
    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => this.cmdHelp(),
      about: () => this.cmdAbout(),
      skills: () => this.cmdSkills(),
      projects: () => this.cmdProjects(),
      contact: () => this.cmdContact(),
      whoami: () => this.cmdWhoAmI(),
      clear: () => this.cmdClear(),
      date: () => this.cmdDate(),
      repo: () => this.cmdRepo(),
      sudo: () => this.cmdSudo(),
      cls: () => this.cmdClear()
    };

    this.init();
  }

  init() {
    if (!this.input || !this.body) return;

    // Welcome banner
    this.appendOutput(`
<span style="color: var(--accent-primary); font-weight: 700;">ALDAG-OS v2.6.4 (x86_64-pc-linux-gnu)</span>
Type <span style="color: var(--accent-secondary); font-weight: 600;">'help'</span> to see available commands or click quick chips below.
`, false);

    // Enter key listener
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = this.input.value.trim();
        if (rawCmd) {
          this.history.push(rawCmd);
          this.historyIndex = this.history.length;
          this.execute(rawCmd);
        }
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });

    // Focus input on terminal click
    if (this.container) {
      this.container.addEventListener('click', () => {
        this.input.focus();
      });
    }

    // Bind quick chips
    document.querySelectorAll('.terminal-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const cmd = chip.getAttribute('data-cmd');
        if (cmd) {
          this.execute(cmd);
          this.input.focus();
        }
      });
    });
  }

  execute(cmdStr) {
    const cleanCmd = cmdStr.toLowerCase().trim();
    this.appendOutput(`<span style="color: var(--accent-primary); font-weight:700;">guest@aldag:~$</span> ${cmdStr}`);

    if (this.commands[cleanCmd]) {
      this.commands[cleanCmd]();
    } else {
      this.appendOutput(`<span style="color: var(--accent-danger);">Command not found: '${cmdStr}'. Type 'help' for options.</span>`);
    }

    this.scrollToBottom();
  }

  appendOutput(html, wrapPrompt = true) {
    const line = document.createElement('div');
    line.className = 'terminal-output';
    line.innerHTML = html;
    
    // Insert before prompt line
    const promptLine = this.body.querySelector('.terminal-prompt-line');
    if (promptLine) {
      this.body.insertBefore(line, promptLine);
    } else {
      this.body.appendChild(line);
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.body.scrollTop = this.body.scrollHeight;
    }, 10);
  }

  cmdHelp() {
    this.appendOutput(`
<span style="color: var(--accent-secondary); font-weight: 600;">AVAILABLE COMMANDS:</span>
  <span style="color: var(--accent-primary);">about</span>      - View engineer background & bio
  <span style="color: var(--accent-primary);">skills</span>     - View technical stack & languages
  <span style="color: var(--accent-primary);">projects</span>   - List featured engineering projects
  <span style="color: var(--accent-primary);">contact</span>    - Show direct contact channels
  <span style="color: var(--accent-primary);">whoami</span>     - Display current user role
  <span style="color: var(--accent-primary);">repo</span>       - Open GitHub source repository
  <span style="color: var(--accent-primary);">clear</span>      - Clear terminal screen
  <span style="color: var(--accent-primary);">date</span>       - Print system timestamp
`);
  }

  cmdAbout() {
    this.appendOutput(`
<span style="color: var(--accent-primary); font-weight: 700;">Mehmet Enes Aldağ</span>
Role: Computer Engineering Student & Full-Stack / Systems Developer
Focus: Systems Emulation (C++), Physics Engines (Canvas), Scalable Web Apps (React), Algorithms
Location: Turkey
Philosophy: "Building high-performance software with zero bloat and clean design."
`);
  }

  cmdSkills() {
    this.appendOutput(`
<span style="color: var(--accent-secondary); font-weight: 600;">CORE TECHNICAL STACK:</span>
• Languages: C, C++, Python, Java, JavaScript (ES6+), SQL (PostgreSQL), HTML5, CSS3
• Frontend: React.js, Tailwind CSS, HTML5 Canvas API, Responsive Web UI/UX
• Backend & DB: PostgreSQL, REST APIs, Supabase
• DevOps & Tools: Git, GitHub, AWS, Linux CLI, Vercel
`);
  }

  cmdProjects() {
    this.appendOutput(`
<span style="color: var(--accent-secondary); font-weight: 600;">FEATURED PROJECTS:</span>
1. <span style="color: var(--accent-primary); font-weight: 600;">CHIP-8 Emulator</span> - C++ hardware VM & opcode emulation
   → <a href="https://github.com/mehmtens/chip8-emulator" target="_blank" style="color: var(--accent-secondary); text-decoration: underline;">https://github.com/mehmtens/chip8-emulator</a>
2. <span style="color: var(--accent-primary); font-weight: 600;">Elementum</span> - 60 FPS Pixel Physics Engine & Sandbox
   → <a href="https://mehmtens.github.io/elementum/" target="_blank" style="color: var(--accent-secondary); text-decoration: underline;">https://mehmtens.github.io/elementum/</a>
3. <span style="color: var(--accent-primary); font-weight: 600;">SimuMath</span> - Equation to Interactive Diagram Platform
   → <a href="https://simumath-web.vercel.app/" target="_blank" style="color: var(--accent-secondary); text-decoration: underline;">https://simumath-web.vercel.app/</a>
4. <span style="color: var(--accent-primary); font-weight: 600;">SAHA</span> - Live Soccer & Match Tracking System
   → <a href="https://live-score-dashboard.vercel.app/" target="_blank" style="color: var(--accent-secondary); text-decoration: underline;">https://live-score-dashboard.vercel.app/</a>
5. <span style="color: var(--accent-primary); font-weight: 600;">Lingova</span> - Interactive Language Learning Platform
   → <a href="https://lingova-dcan.vercel.app/" target="_blank" style="color: var(--accent-secondary); text-decoration: underline;">https://lingova-dcan.vercel.app/</a>
`);
  }

  cmdContact() {
    this.appendOutput(`
<span style="color: var(--accent-secondary); font-weight: 600;">CONTACT CHANNELS:</span>
• Email:    <a href="mailto:mehmetenesaldag@gmail.com" style="color: var(--accent-primary);">mehmetenesaldag@gmail.com</a>
• GitHub:   <a href="https://github.com/mehmtens" target="_blank" style="color: var(--accent-secondary);">https://github.com/mehmtens</a>
• LinkedIn: <a href="https://www.linkedin.com/in/mehmet-enes-alda%C4%9F-1b913426a/" target="_blank" style="color: var(--accent-secondary);">Mehmet Enes Aldağ</a>
`);
  }

  cmdWhoAmI() {
    this.appendOutput(`guest@aldag.dev (Permissions: [Read, Inspect, Collaborate])`);
  }

  cmdClear() {
    const outputs = this.body.querySelectorAll('.terminal-output');
    outputs.forEach(el => el.remove());
  }

  cmdDate() {
    this.appendOutput(new Date().toUTCString());
  }

  cmdRepo() {
    this.appendOutput(`Opening GitHub repository: <a href="https://github.com/mehmtens/aws" target="_blank" style="color: var(--accent-secondary);">https://github.com/mehmtens/aws</a>`);
    window.open('https://github.com/mehmtens/aws', '_blank');
  }

  cmdSudo() {
    this.appendOutput(`<span style="color: var(--accent-warning);">guest is not in the sudoers file. This incident will be reported with a smile :)</span>`);
  }
}
