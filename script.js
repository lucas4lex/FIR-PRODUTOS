const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const menuGroups = [
  { label: 'Produtos', links: [['catalogo.html', 'Catálogo'], ['novidades.html', 'Novidades'], ['linha-completa.html', 'Linha completa'], ['categorias.html', 'Categorias']] },
  { label: 'Negócios', links: [['segmentos.html', 'Segmentos'], ['atacado.html', 'Atacado'], ['orcamento.html', 'Orçamento']] }
];

const productLinks = {"Sacolas de papel kraft": "produto-sacola-kraft.html", "Caixas para delivery e e-commerce": "produto-caixa-delivery.html", "Fitas adesivas e filme stretch": "produto-fitas-filme.html", "Sacos plásticos e zip": "produto-saco-plastico.html", "Papel de seda e kraft": "produto-papel-seda.html", "Sacolas plásticas alça camiseta": "produto-sacola-plastica.html", "Caixas para presente": "produto-caixa-presente.html", "Plástico bolha": "produto-plastico-bolha.html", "Envelopes de segurança": "produto-envelope-seguranca.html", "Fitas e laços decorativos": "produto-fita-cetim.html", "Sacos de papel para pão e lanche": "produto-saco-papel-pao.html", "Bobinas térmicas para PDV": "produto-bobina-termica.html", "Etiquetas de preço e precificadores": "produto-etiquetas-preco.html", "Leitores de código de barras": "produto-leitor-codigo.html", "Impressoras de etiquetas": "produto-impressora-etiquetas.html", "Gavetas de caixa": "produto-gaveta-caixa.html", "Tags e lacres de segurança": "produto-tags-lacres.html", "Balanças comerciais digitais": "produto-balanca-digital.html", "Detectores de notas falsas": "produto-detector-notas.html", "Expositores de balcão": "produto-expositor-balcao.html", "Araras e cabides": "produto-arara-cabide.html", "Gôndolas aramadas": "produto-gondola.html", "Manequins para vitrine": "produto-manequim.html", "Prateleiras de parede": "produto-prateleira-parede.html", "Placas de preço em acrílico": "produto-placa-acrilico.html", "Porta-folhetos e displays de mesa": "produto-porta-folheto.html", "Vitrines de vidro": "produto-vitrine-vidro.html", "Organizadores de balcão": "produto-organizador-balcao.html", "Cestas e carrinhos de loja": "produto-cesta-loja.html", "Caixas organizadoras empilháveis": "produto-caixa-organizadora.html", "Estantes de aço": "produto-estante-aco.html", "Carrinhos de plataforma": "produto-carrinho-plataforma.html", "Copos e potes descartáveis": "produto-copos-descartaveis.html", "Embalagens para alimentos": "produto-embalagens-alimentos.html", "Copos para café com tampa": "produto-copo-cafe.html", "Canudos e guardanapos": "produto-canudos-guardanapos.html", "Luvas descartáveis": "produto-luvas-descartaveis.html", "Filme PVC e papel alumínio": "produto-filme-pvc.html", "Kit higiene e limpeza para lojas": "produto-kit-limpeza.html", "Sacos de lixo reforçados": "produto-sacos-lixo.html", "Papel toalha e higiênico": "produto-papel-toalha.html", "Desinfetantes e multiuso": "produto-desinfetante.html", "Dispensers de sabonete e álcool": "produto-dispenser-sabonete.html", "Sacolas de TNT": "produto-sacola-tnt.html", "Caixas para pizza": "produto-caixa-pizza.html", "Caixas de correio": "produto-caixa-correio.html", "Fitas dupla face": "produto-fita-dupla-face.html", "Etiquetas \"frágil\" e \"este lado para cima\"": "produto-etiqueta-fragil.html", "Papel kraft em rolo": "produto-papel-kraft-rolo.html", "Sacos para embalagem a vácuo": "produto-saco-vacuo.html", "Caixas para calçados": "produto-caixa-sapato.html", "Embalagens para bijuterias": "produto-embalagem-bijuteria.html", "Ecobags de algodão cru": "produto-ecobag.html", "Pistolas etiquetadoras": "produto-pistola-etiquetadora.html", "Etiquetas adesivas redondas": "produto-etiquetas-redondas.html", "Monitores touch para PDV": "produto-monitor-pdv.html", "Teclados comerciais programáveis": "produto-teclado-comercial.html", "Bobinas térmicas 80 mm": "produto-bobina-80mm.html", "Etiquetas para balança": "produto-etiquetas-balanca.html", "Cofres para caixa": "produto-cofre-caixa.html", "Blocos de comanda e pedido": "produto-comanda.html", "Contadores de cédulas": "produto-contador-cedulas.html", "Totens promocionais": "produto-totem-promocional.html", "Mesas expositoras": "produto-mesa-expositora.html", "Cabides infantis": "produto-cabide-infantil.html", "Painéis expositores com ganchos": "produto-painel-ganchos.html", "Balcões vitrine": "produto-balcao-vitrine.html", "Porta-cartazes e cavaletes": "produto-porta-cartaz.html", "Mostruários para joias": "produto-mostruario-joias.html", "Expositores para óculos": "produto-suporte-oculos.html", "Araras de parede": "produto-arara-parede.html", "Cestos aramados": "produto-cesto-aramado.html", "Prateleiras plásticas": "produto-prateleira-plastica.html", "Gaveteiros plásticos": "produto-gaveteiro-plastico.html", "Paletes plásticos": "produto-pallet-plastico.html", "Escadas de alumínio": "produto-escada-aluminio.html", "Armários de aço": "produto-armario-aco.html", "Caixas de ferramentas e utilidades": "produto-caixa-ferramentas.html", "Cestos plásticos": "produto-cesto-plastico.html", "Porta-objetos de parede": "produto-porta-objetos-parede.html", "Potes herméticos": "produto-pote-hermetico.html", "Copos e taças para sorvete": "produto-copo-sorvete.html", "Talheres descartáveis": "produto-colher-descartavel.html", "Pratos descartáveis": "produto-prato-descartavel.html", "Bags isotérmicas para delivery": "produto-bag-isotermica.html", "Bandejas de isopor": "produto-bandeja-isopor.html", "Garrafas e jarras para água": "produto-garrafa-agua.html", "Potes para molhos": "produto-pote-molho.html", "Hashis e palitos": "produto-palitos-hashi.html", "Luvas de limpeza": "produto-luvas-limpeza.html", "Panos de microfibra": "produto-pano-microfibra.html", "Esponjas e fibras de limpeza": "produto-esponja.html", "Baldes e mops": "produto-balde-mop.html", "Álcool em gel e líquido 70%": "produto-alcool-gel.html", "Sabão em pó e detergentes": "produto-sabao-po.html", "Lixeiras com pedal": "produto-lixeira-pedal.html", "Aromatizadores de ambiente": "produto-aromatizador.html"};

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
  footerText.innerHTML = '<a class="fuli-link" href="https://multipagemel.pages.dev/" target="_blank" rel="noopener">Multipage Mel</a>';
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
}

document.querySelectorAll('.products-grid .product-card, .category-grid .category, .blog-grid .blog-card').forEach((card, index) => {
  card.style.setProperty('--card-index', index % 6);
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
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
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

const catParam = new URLSearchParams(window.location.search).get('categoria');
if (catParam) { const b = document.querySelector('.filter-btn[data-filter="' + catParam + '"]'); if (b) b.click(); }
