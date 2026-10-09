import portfolio from '../config.json' with { type: 'json' };

type Project = [name: string, description: string, stack: string, url: string];
type Experience = [company: string, role: string, period: string, bullets: string[]];

const projectsRoot = document.querySelector<HTMLElement>('[data-projects]');
const experienceRoot = document.querySelector<HTMLElement>('[data-experience]');
const header = document.querySelector<HTMLElement>('[data-header]');
const progress = document.querySelector<HTMLElement>('.scroll-progress span');
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const signalPanel = document.querySelector<HTMLElement>('.signal-panel');

const createElement = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const renderProjects = () => {
  if (!projectsRoot) return;

  (portfolio.projects as Project[]).forEach(([name, description, stack, url], index) => {
    const record = createElement('details', 'project-record reveal');
    if (index === 0) record.open = true;

    const summary = createElement('summary');
    const number = createElement('span', 'project-number', String(index + 1).padStart(2, '0'));
    const title = createElement('strong', 'project-title', name);
    const synopsis = createElement('span', 'project-summary', description);
    const primaryStack = stack.split('•').slice(0, 2).map((item) => item.trim()).join(' / ');
    const stackPreview = createElement('span', 'project-stack', primaryStack);
    const action = createElement('span', 'project-action', '+');
    action.setAttribute('aria-hidden', 'true');
    summary.append(number, title, synopsis, stackPreview, action);

    const readout = createElement('div', 'project-readout');
    const stackLine = createElement('p', undefined, stack.split('•').join(' / '));
    const source = createElement('a', 'project-source', 'Inspect source ↗');
    source.href = url;
    source.target = '_blank';
    source.rel = 'noreferrer';
    source.setAttribute('aria-label', `View ${name} source on GitHub`);
    readout.append(stackLine, source);

    record.append(summary, readout);
    projectsRoot.append(record);
  });

  const records = Array.from(projectsRoot.querySelectorAll<HTMLDetailsElement>('details'));
  records.forEach((record) => {
    record.addEventListener('toggle', () => {
      if (!record.open) return;
      records.forEach((other) => {
        if (other !== record) other.open = false;
      });
    });
  });
};

const renderExperience = () => {
  if (!experienceRoot) return;

  (portfolio.experience as Experience[]).forEach(([company, role, period, bullets], index) => {
    const record = createElement('article', 'experience-record reveal');
    const meta = createElement('div', 'experience-meta');
    meta.append(
      createElement('span', 'log-id', `LOG / ${String(index + 1).padStart(2, '0')}`),
      createElement('span', undefined, period),
    );

    const content = createElement('div', 'experience-content');
    const title = createElement('h3', undefined, company);
    const roleLine = createElement('p', 'experience-role', role);
    const list = createElement('ul');
    bullets.forEach((bullet) => list.append(createElement('li', undefined, bullet)));
    content.append(title, roleLine, list);
    record.append(meta, content);
    experienceRoot.append(record);
  });
};

const connectProfileLinks = () => {
  document.querySelectorAll<HTMLAnchorElement>('[data-resume-link]').forEach((link) => {
    link.href = portfolio.social.resume;
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-email-link]').forEach((link) => {
    link.href = `mailto:${portfolio.social.email}`;
  });

  document.querySelectorAll<HTMLElement>('[data-email-text]').forEach((element) => {
    element.textContent = portfolio.social.email;
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-github-link]').forEach((link) => {
    link.href = `https://github.com/${portfolio.social.github}`;
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-linkedin-link]').forEach((link) => {
    link.href = `https://www.linkedin.com/in/${portfolio.social.linkedin}`;
  });

  const year = document.querySelector<HTMLElement>('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
};

const updateClock = () => {
  const clock = document.querySelector<HTMLElement>('[data-local-time]');
  if (!clock) return;

  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
  clock.textContent = `${time} IST`;
};

const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) * 100 : 0;
  if (progress) progress.style.width = `${percentage}%`;
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
};

const setupReveal = () => {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
};

const setupMenu = () => {
  if (!menuToggle || !header) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  header.querySelectorAll<HTMLAnchorElement>('.primary-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const setupCopyEmail = () => {
  const button = document.querySelector<HTMLButtonElement>('[data-copy-email]');
  if (!button) return;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(portfolio.social.email);
      button.textContent = 'Copied';
      window.setTimeout(() => { button.textContent = 'Copy email'; }, 1800);
    } catch {
      window.location.href = `mailto:${portfolio.social.email}`;
    }
  });
};

const setupSignalPointer = () => {
  if (!signalPanel || window.matchMedia('(pointer: coarse)').matches) return;

  signalPanel.addEventListener('pointermove', (event) => {
    const bounds = signalPanel.getBoundingClientRect();
    signalPanel.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    signalPanel.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  });
};

renderProjects();
renderExperience();
connectProfileLinks();
setupReveal();
setupMenu();
setupCopyEmail();
setupSignalPointer();
updateClock();
updateScrollState();

window.setInterval(updateClock, 1000);
window.addEventListener('scroll', updateScrollState, { passive: true });
