const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const menuGroups = [
  { label: 'Produtos', links: [['catalogo.html', 'Catálogo'], ['novidades.html', 'Novidades'], ['linha-completa.html', 'Linha completa'], ['categorias.html', 'Categorias']] },
  { label: 'Negócios', links: [['segmentos.html', 'Segmentos'], ['atacado.html', 'Atacado'], ['orcamento.html', 'Orçamento']] }
];

const productLinks = {
  'Cadernos de capa têxtil': 'produto-cadernos.html',
  'Cerâmica de mesa': 'produto-ceramica.html',
  'Cuidados essenciais': 'produto-cuidados.html',
  'Pequenos rituais': 'produto-rituais.html',
  'Velas de assinatura': 'produto-velas.html',
  'Ritual de escrita': 'produto-escrita.html',
  'Banho botânico': 'produto-banho.html',
  'Caixa de boas-vindas': 'produto-caixa.html',
  'Bandeja de madeira clara': 'produto-bandeja.html',
  'Toalha de linho lavado': 'produto-linho.html',
  'Kit correspondência': 'produto-correspondencia.html',
  'Difusor de ambiente': 'produto-difusor.html',
  'Jarra de vidro canelado': 'produto-jarra.html',
  'Porta-sabonete mineral': 'produto-porta-sabonete.html',
  'Fita de algodão cru': 'produto-fita.html',
  'Estojo essencial': 'produto-estojo.html',
  'Cesta de fibra natural': 'produto-cesta.html',
  'Spray de ambiente': 'produto-spray.html',
  'Caneca de espresso': 'produto-caneca.html',
  'Cartão-presente FIR': 'produto-cartao.html'
};

if (navLinks) {
  navLinks.replaceChildren();
  const mainLinks = [['index.html', 'Início'], ['sobre.html', 'A FIR'], ['contato.html', 'Contato']];

  mainLinks.forEach(([href, label]) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    if (href === currentPage) link.classList.add('active');
    navLinks.appendChild(link);
  });

  menuGroups.forEach(({ label, links }) => {
    const menu = document.createElement('details');
    menu.className = 'nav-menu';
    if (links.some(([href]) => href === currentPage)) menu.open = true;

    const summary = document.createElement('summary');
    summary.textContent = label;
    menu.appendChild(summary);

    const submenu = document.createElement('div');
    submenu.className = 'nav-submenu';
    links.forEach(([href, linkLabel]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = linkLabel;
      if (href === currentPage) link.classList.add('active');
      submenu.appendChild(link);
    });
    menu.appendChild(submenu);
    navLinks.appendChild(menu);
  });
}

const footerBottom = document.querySelector('.footer-bottom');
if (footerBottom && !footerBottom.querySelector('a[href="sitemap.html"]')) {
  const sitemapLink = document.createElement('a');
  sitemapLink.className = 'sitemap-footer-link';
  sitemapLink.href = 'sitemap.html';
  sitemapLink.textContent = 'Mapa do site';
  footerBottom.appendChild(sitemapLink);
}

document.querySelectorAll('.footer-bottom span').forEach((footerText) => {
  if (!footerText.textContent.includes('Desenvolvida por Fuli Sites')) return;
  footerText.innerHTML = 'Desenvolvida por <a class="fuli-link" href="https://fulisites.pages.dev/" target="_blank" rel="noopener">Fuli Sites · fulisites.pages.dev</a>';
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
}

document.querySelectorAll('.products-grid .product-card, .category-grid .category, .blog-grid .blog-card').forEach((card, index) => {
  card.style.setProperty('--card-index', index);
});

const animatedSections = document.querySelectorAll('.section, .band, .page-hero, .article-hero');
animatedSections.forEach((section) => section.classList.add('scroll-reveal'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  animatedSections.forEach((section) => revealObserver.observe(section));
} else {
  animatedSections.forEach((section) => section.classList.add('is-visible'));
}

document.querySelectorAll('.product-card').forEach((card) => {
  const name = card.querySelector('h3')?.textContent.trim();
  const link = productLinks[name];
  if (!link) return;

  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.addEventListener('click', () => { window.location.href = link; });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = link;
    }
  });
});

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card[data-category]').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formEndpoint = contactForm.dataset.endpoint || 'https://formsubmit.co/ajax/oi@firprodutos.com.br';
    const payload = Object.fromEntries(new FormData(contactForm).entries());

    payload._subject = 'Novo contato pelo site FIR Produtos';
    payload._captcha = 'false';
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams(payload)
      });
      if (!response.ok) {
        const error = new Error(`Form endpoint returned HTTP ${response.status}`);
        error.status = response.status;
        throw error;
      }
      feedback.textContent = 'Mensagem enviada. Nossa equipe retorna em até 1 dia útil.';
      feedback.hidden = false;
      contactForm.reset();
    } catch (error) {
      const statusMessage = error.status ? ` (HTTP ${error.status})` : '';
      feedback.textContent = `O envio foi recusado${statusMessage}. O .env não armazena mensagens; confirme o endpoint ou fale com a equipe pelo WhatsApp.`;
      feedback.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Enviar mensagem <span>↗</span>';
    }
  });
}
