const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (navToggle && primaryNav) {
  const closeNav = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  };

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('is-open', !expanded);
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeNav();
    }
  });
}

const heroCarousels = document.querySelectorAll('[data-hero-carousel]');
heroCarousels.forEach((carousel) => {
  const track = carousel.querySelector('[data-hero-track]');
  const slides = Array.from(track?.children || []);
  if (!track || slides.length <= 1) return;

  const prev = carousel.querySelector('[data-hero-prev]');
  const next = carousel.querySelector('[data-hero-next]');
  const dotsContainer = carousel.querySelector('[data-hero-dots]');
  const autoplayDelay = 6000;
  let activeIndex = 0;
  let autoplayId;

  const updateSlides = () => {
    slides.forEach((slide, index) => {
      slide.setAttribute('data-active', index === activeIndex ? 'true' : 'false');
      slide.setAttribute('aria-hidden', index === activeIndex ? 'false' : 'true');
    });
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
  };

  let dots = [];

  const updateDots = () => {
    dots.forEach((dot, index) => {
      dot.setAttribute('aria-selected', index === activeIndex ? 'true' : 'false');
    });
  };

  const setSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    updateSlides();
    updateDots();
  };

  const createDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    dots = slides.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hero-carousel-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => {
        setSlide(index);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
      return dot;
    });
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      window.clearInterval(autoplayId);
      autoplayId = undefined;
    }
  };

  const restartAutoplay = () => {
    stopAutoplay();
    autoplayId = window.setInterval(() => {
      setSlide(activeIndex + 1);
    }, autoplayDelay);
  };

  prev?.addEventListener('click', () => {
    setSlide(activeIndex - 1);
    restartAutoplay();
  });

  next?.addEventListener('click', () => {
    setSlide(activeIndex + 1);
    restartAutoplay();
  });

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', restartAutoplay);

  createDots();
  setSlide(0);
  restartAutoplay();
});

const stickyCta = document.querySelector('.sticky-cta');
if (stickyCta) {
  stickyCta.addEventListener('click', (event) => {
    const target = event.target.closest('[data-target]');
    if (!target) return;
    const selector = target.getAttribute('data-target');
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const accordions = document.querySelectorAll('[data-accordion]');
accordions.forEach((accordion) => {
  const button = accordion.querySelector('button');
  const content = accordion.querySelector('[data-content]');
  if (!button || !content) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    content.hidden = expanded;
  });
});

const quickSelector = document.querySelector('[data-quick-selector]');
if (quickSelector) {
  quickSelector.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(quickSelector);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (value) {
        params.set(key, value);
      }
    });
    const query = params.toString();
    window.location.href = `product-selector.html${query ? `?${query}` : ''}`;
  });
}

const pixelVisualiser = document.querySelector('[data-pixel-visualiser]');
if (pixelVisualiser) {
  const slider = pixelVisualiser.querySelector('[data-pixel-slider]');
  const pitch = pixelVisualiser.querySelector('[data-pixel-value]');
  const distance = pixelVisualiser.querySelector('[data-pixel-distance]');
  const usage = pixelVisualiser.querySelector('[data-pixel-use]');

  const presets = [
    { pitch: 'P0.7', distance: '0.8–1.5 m', use: 'Luxury vitrines, broadcast sets' },
    { pitch: 'P0.9', distance: '1.2–2.0 m', use: 'Immersive XR, control rooms' },
    { pitch: 'P1.2', distance: '1.6–2.8 m', use: 'Executive briefing centres' },
    { pitch: 'P1.5', distance: '1.8–3.5 m', use: 'Boardrooms, premium retail' },
    { pitch: 'P1.9', distance: '2.5–4.5 m', use: 'Education, corporate lobbies' },
    { pitch: 'P2.6', distance: '3.5–6.0 m', use: 'Events, interactive floors' },
    { pitch: 'P3.9', distance: '4.5–8.0 m', use: 'Outdoor fascia, rental walls' },
  ];

  const updateVisualiser = (index) => {
    const preset = presets[index] || presets[0];
    if (pitch) pitch.textContent = preset.pitch;
    if (distance) distance.textContent = preset.distance;
    if (usage) usage.textContent = preset.use;
  };

  slider?.addEventListener('input', () => {
    updateVisualiser(Number(slider.value));
  });

  if (slider) {
    updateVisualiser(Number(slider.value));
  }
}

const sizeTool = document.querySelector('[data-size-tool]');
if (sizeTool) {
  const buttons = Array.from(sizeTool.querySelectorAll('[data-size]'));
  const visual = sizeTool.querySelector('[data-size-visual]');
  const label = sizeTool.querySelector('[data-size-label]');
  const metrics = sizeTool.querySelector('[data-size-metrics]');
  const notes = sizeTool.querySelector('[data-size-notes]');

  const sizePresets = {
    110: {
      label: '110" AIO',
      metrics: 'Approx. 2.4 × 1.4 m',
      scale: 0.65,
      notes: 'Perfect for classrooms and hybrid collaboration zones.',
    },
    135: {
      label: '135" Foldable',
      metrics: 'Approx. 3.0 × 1.7 m',
      scale: 0.85,
      notes: 'Ideal for corporate briefing centres with mobile deployment.',
    },
    165: {
      label: '165" MicroLED',
      metrics: 'Approx. 3.6 × 2.0 m',
      scale: 1,
      notes: 'Immersive microLED canvas for showrooms and control rooms.',
    },
    240: {
      label: 'Transparent 2400 mm',
      metrics: 'Approx. 2.4 × 2.4 m',
      scale: 1.05,
      notes: 'Hero installation for flagship retail and experiential windows.',
    },
  };

  const updateSize = (sizeKey) => {
    const preset = sizePresets[sizeKey];
    if (!preset || !visual) return;
    buttons.forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.size === String(sizeKey));
    });
    visual.style.setProperty('--scale', preset.scale);
    if (label) label.textContent = preset.label;
    if (metrics) metrics.textContent = preset.metrics;
    if (notes) notes.textContent = preset.notes;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      updateSize(button.dataset.size);
    });
  });

  const activeButton = buttons.find((button) => button.getAttribute('aria-selected') === 'true');
  if (activeButton) {
    updateSize(activeButton.dataset.size);
  }
}

const whatsappForms = document.querySelectorAll('form[data-whatsapp-number]');
whatsappForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const number = form.getAttribute('data-whatsapp-number');
    if (!number) return;

    const intro = form.getAttribute('data-whatsapp-intro');
    const lines = [];
    if (intro) {
      lines.push(intro);
    }

    const fields = Array.from(form.querySelectorAll('input, select, textarea'));
    fields.forEach((field) => {
      if (!field.name) return;
      if ((field.type === 'checkbox' || field.type === 'radio') && !field.checked) return;

      const value = field.value?.trim();
      if (!value) return;

      let labelText = '';
      if (field.id) {
        const escapedId = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(field.id) : field.id;
        const label = form.querySelector(`label[for="${escapedId}"]`);
        if (label) {
          labelText = label.textContent.trim();
        }
      }

      if (!labelText && field.placeholder) {
        labelText = field.placeholder;
      }

      if (!labelText && field.name) {
        const normalised = field.name
          .replace(/([A-Z])/g, ' $1')
          .replace(/[_-]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        if (normalised) {
          labelText = normalised.charAt(0).toUpperCase() + normalised.slice(1);
        }
      }

      if (!labelText) {
        labelText = 'Detail';
      }

      lines.push(`${labelText}: ${value}`);
    });

    if (lines.length === 0) {
      lines.push('Hello VAVR team, I would like to discuss display solutions.');
    }

    const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
});


const heroCarousel = document.querySelector('[data-hero-carousel]');
if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  if (slides.length > 0) {
    let index = 0;

    const setActive = (nextIndex) => {
      slides[index]?.classList.remove('is-active');
      index = nextIndex;
      slides[index]?.classList.add('is-active');
    };

    slides[0].classList.add('is-active');

    setInterval(() => {
      const next = (index + 1) % slides.length;
      setActive(next);
    }, 6000);
  }
}
