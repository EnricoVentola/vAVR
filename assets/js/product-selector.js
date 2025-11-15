const steps = Array.from(document.querySelectorAll('[data-step]'));
const form = document.querySelector('[data-selector-form]');
const summary = document.querySelector('[data-summary]');
const progress = document.querySelectorAll('[data-progress-step]');

const specSheets = {
  'All-in-One': {
    label: 'All-in-One Interactive BizetBeeBoard Touchscreen',
    href: 'resources.html#cat-rigid',
  },
  'MicroLED Canvas': {
    label: 'Designer Micro LED Canvas',
    href: 'resources.html#cat-rigid',
  },
  'Transparent AIO Poster': {
    label: 'Transparent Poster Spec Sheet',
    href: 'resources.html#cat-transparent',
  },
  'Interactive Touchscreen': {
    label: 'Interactive Touchscreen Range',
    href: 'resources.html#cat-interactive',
  },
  'Interactive LED Floor': {
    label: 'Interactive LED Floor Spec Sheet',
    href: 'resources.html#cat-interactive',
  },
  'VAvR Global Alliance Rental Panels': {
    label: 'Rental Panels (Curve / Edge / Designer)',
    href: 'resources.html#cat-curve',
  },
  'Retail Signage': {
    label: 'Retail Signage Spec Sheet',
    href: 'resources.html#cat-rigid',
  },
  'Videoflex® Motorised Display': {
    label: 'VideoFlex® Indoor & Outdoor',
    href: 'resources.html#cat-designer',
  },
};

function normaliseValue(value) {
  return value ? value.toLowerCase().replace(/[^a-z0-9]+/g, '') : '';
}

function createProduct(config) {
  const pixelPitch = config.pixelPitch || [];
  const sizes = config.sizes || [];
  return {
    ...config,
    pixelPitch,
    sizes,
    pixelPitchNormalized: pixelPitch.map((value) => normaliseValue(value)),
    sizesNormalized: sizes.map((value) => normaliseValue(value)),
    sizeDigits: sizes.map((value) => (value ? value.replace(/[^0-9]/g, '') : '')),
    sizeSummary: config.sizeSummary || sizes.join(', '),
    resources: config.resources || [],
  };
}

const PRODUCT_CATALOG = [
  createProduct({
    id: 'rigid-aio',
    name: 'BizetBeeBoard® All-in-One 108"–216"',
    category: 'All-in-One',
    environments: ['Indoor'],
    industries: ['Retail & Flagship Stores', 'Control Rooms & Corporate', 'Education & Campuses'],
    applications: ['Corporate', 'Control Rooms', 'Education', 'Showrooms'],
    mounting: ['Wall', 'Freestanding'],
    pixelPitch: ['P1.5', 'P1.9', 'P2.5'],
    brightness: { min: 600, max: 1200 },
    sizes: ['108inch', '135inch', '162inch', '216inch'],
    sizeSummary: '108" to 216" integrated LED canvases',
    summary:
      'Turnkey BizetBeeBoard® videowalls with OPS playback, audio, and collaboration tools for premium indoor spaces.',
    resources: [
      {
        label: 'All-in-one spec sheet',
        href: 'Indoor/Rigid/108inch/MIP/Spec Sheet/Indoor Rigid MIP 108inch to 216inch Spec Sheet.pdf',
        type: 'spec',
      },
      {
        label: 'Cabinet drawing',
        href: 'Indoor/Rigid/108inch/MIP/Drawing/IR108inch MIP Drawing.jpg',
        type: 'drawing',
      },
    ],
  }),
  createProduct({
    id: 'microled-canvas',
    name: 'MicroLED Canvas 600×337.5mm',
    category: 'MicroLED Canvas',
    environments: ['Indoor'],
    industries: ['Retail & Flagship Stores', 'Control Rooms & Corporate', 'Events & Live Production'],
    applications: ['Retail', 'Control Rooms', 'Corporate', 'Showrooms'],
    mounting: ['Wall', 'Hanging'],
    pixelPitch: ['P0.9', 'P1.2', 'P1.5'],
    brightness: { min: 800, max: 1500 },
    sizes: ['600x3375mm', '600x337mm', '27inch'],
    sizeSummary: '600×337.5mm cabinets & 27" tiles',
    summary: 'Ultra-fine pitch MicroLED cabinets that tile seamlessly for flagship showrooms and mission-critical displays.',
    resources: [
      {
        label: 'MicroLED spec sheet',
        href: 'Indoor/Rigid/Microled/Spec Sheet/Indoor Rigid MIP 600x337.5 Spec Sheet.pdf',
        type: 'spec',
      },
      {
        label: 'MicroLED drawing',
        href: 'Indoor/Rigid/Microled/Drawing/IRMIP600x337.5 Drawing.pdf',
        type: 'drawing',
      },
      {
        label: 'Installation imagery',
        href: 'Indoor/Rigid/Microled/Image/Indoor Rigid MIP 600x337.5.jpg',
        type: 'image',
      },
    ],
  }),
  createProduct({
    id: 'transparent-it56',
    name: 'Transparent Poster IT56',
    category: 'Transparent AIO Poster',
    environments: ['Indoor'],
    industries: ['Retail & Flagship Stores', 'Events & Live Production'],
    applications: ['Retail', 'Showrooms', 'Events'],
    mounting: ['Hanging', 'Wall'],
    pixelPitch: ['P2.6', 'P3.9'],
    brightness: { min: 700, max: 1200 },
    sizes: ['750x1200mm', '56inch'],
    sizeSummary: '56" hanging poster & 750×1200mm mesh',
    summary: 'Lightweight transparent poster for window installations and immersive atriums.',
    resources: [
      {
        label: 'Poster specification',
        href: 'Indoor/Transparent/56inch/Specification/IT56/Indoor Transparent 750x1200mm Static with drawings.pdf',
        type: 'spec',
      },
      {
        label: 'Poster drawing',
        href: 'Indoor/Transparent/56inch/Drawing/IT562.5StaticBanner Front View.png',
        type: 'drawing',
      },
      {
        label: 'Poster imagery',
        href: 'Indoor/Transparent/56inch/Images/IT56inch 3D character.png',
        type: 'image',
      },
    ],
  }),
  createProduct({
    id: 'transparent-rental',
    name: 'Transparent Rental Mesh 5m',
    category: 'Transparent AIO Poster',
    environments: ['Outdoor', 'Indoor'],
    industries: ['Events & Live Production', 'Outdoor Advertising', 'Retail & Flagship Stores'],
    applications: ['Events', 'Outdoor Advertising', 'Retail'],
    mounting: ['Truss', 'Hanging'],
    pixelPitch: ['P3.9', 'P4.8'],
    brightness: { min: 2000, max: 4500 },
    sizes: ['5000x3000mm', '500x1000mm'],
    sizeSummary: 'Modular 500×1000mm rental cabinets',
    summary: 'High-transparency rental mesh for touring stages and media façades.',
    resources: [
      {
        label: 'Rental spec sheet',
        href: 'outdoor/Transparent/Rental 5000x3000mm/Specification/Outdoor Transparent Rental 5000x3000mm Specification.pdf',
        type: 'spec',
      },
      {
        label: 'Rental drawing',
        href: 'outdoor/Transparent/Rental 500x1000mm/Drawing/OTR500x1000mm Drawing.png',
        type: 'drawing',
      },
      {
        label: 'Rental video',
        href: 'outdoor/Transparent/Rental 5000x3000mm/Video/Outdoor Transparent Rental Video.mp4',
        type: 'video',
      },
    ],
  }),
  createProduct({
    id: 'interactive-suite',
    name: 'BizetBeeBoard® Collaboration Suite',
    category: 'Interactive Touchscreen',
    environments: ['Indoor'],
    industries: ['Education & Campuses', 'Control Rooms & Corporate', 'Retail & Flagship Stores'],
    applications: ['Education', 'Corporate', 'Control Rooms', 'Showrooms'],
    mounting: ['Wall', 'Freestanding', 'Mobile Stand'],
    pixelPitch: ['P1.5', 'P1.9', 'P2.5'],
    brightness: { min: 400, max: 800 },
    sizes: ['43inch', '50inch', '55inch', '65inch', '75inch', '86inch', '98inch'],
    sizeSummary: '43" to 98" BizetBeeBoard® collaboration displays',
    summary:
      '4K touch canvases with OPS compute, camera arrays, and classroom collaboration tools.',
    resources: [
      {
        label: 'Indoor spec sheet',
        href: 'Indoor/Interactive/86inch/II864KBBB/Spec Sheet/Indoor Interactive 50 -115inch 4K BBB.pdf',
        type: 'spec',
      },
      {
        label: 'User guide',
        href: 'Indoor/Interactive/86inch/II864KBBB/User Guide/Indoor Interactive 32-162inch 4K BizetBeeBoard® User Guide.pdf',
        type: 'guide',
      },
    ],
  }),
  createProduct({
    id: 'interactive-outdoor',
    name: 'Outdoor Interactive Poster 32"–98"',
    category: 'Interactive Touchscreen',
    environments: ['Outdoor', 'Hybrid'],
    industries: ['Retail & Flagship Stores', 'Outdoor Advertising', 'Events & Live Production'],
    applications: ['Outdoor Advertising', 'Retail', 'Events'],
    mounting: ['Freestanding', 'Wall'],
    pixelPitch: ['P2.5', 'P3.9', 'P4.8'],
    brightness: { min: 1500, max: 3500 },
    sizes: ['32inch', '43inch', '50inch', '55inch', '75inch', '86inch', '98inch'],
    sizeSummary: 'Weatherised kiosks & posters (32"–98")',
    summary: 'IP-rated BizetBeeBoard® enclosures for street furniture, transit, and outdoor retail.',
    resources: [
      {
        label: 'Outdoor spec sheet',
        href: 'outdoor/Interactive/55inch/Freestanding/Specification Sheet/Outdoor Interactive 32 - 98inch BBB FS.pdf',
        type: 'spec',
      },
      {
        label: 'Freestanding drawing',
        href: 'outdoor/Interactive/55inch/Freestanding/Drawing/OI554KBBBFS.png',
        type: 'drawing',
      },
    ],
  }),
  createProduct({
    id: 'interactive-floor',
    name: 'Interactive LED Floor 500×500mm',
    category: 'Interactive LED Floor',
    environments: ['Indoor', 'Outdoor'],
    industries: ['Events & Live Production', 'Gaming & Esports', 'Retail & Flagship Stores'],
    applications: ['Events', 'Retail', 'Showrooms'],
    mounting: ['Freestanding', 'Truss'],
    pixelPitch: ['P2.5'],
    brightness: { min: 1800, max: 2500 },
    sizes: ['500x500mm'],
    sizeSummary: '500×500mm load-bearing modules',
    summary: 'Impact-resistant floor tiles with sensor inputs for experiential retail and touring stages.',
    resources: [
      {
        label: 'Floor spec sheet',
        href: 'Indoor/Interactive/Floor 500x500mm/Spec Sheet/Indoor Interactive Floor 500x500mm V2.pdf',
        type: 'spec',
      },
      {
        label: 'Floor drawing',
        href: 'Indoor/Interactive/Floor 500x500mm/drawing/IIF500x500 drawing.pdf',
        type: 'drawing',
      },
      {
        label: 'Floor brochure',
        href: 'Indoor/Interactive/Floor 500x500mm/Brochure/Indoor Interactive floor brochure.pdf',
        type: 'spec',
      },
    ],
  }),
  createProduct({
    id: 'curve-series',
    name: 'Curve Series Rental Panels',
    category: 'VAvR Global Alliance Rental Panels',
    environments: ['Indoor', 'Outdoor'],
    industries: ['Events & Live Production', 'Gaming & Esports', 'Outdoor Advertising'],
    applications: ['Events', 'Outdoor Advertising', 'Showrooms'],
    mounting: ['Truss', 'Ground Stack', 'Wall'],
    pixelPitch: ['P1.9', 'P2.6', 'P2.9', 'P3.9', 'P4.8'],
    brightness: { min: 1000, max: 4000 },
    sizes: ['500x500mm', '500x1000mm'],
    sizeSummary: '500×500 & 500×1000mm curve-ready cabinets',
    summary: 'Concave and convex rental tiles that bend sightlines for immersive stages and XR volumes.',
    resources: [
      {
        label: 'Curve spec pack',
        href: 'Indoor/Curve/500x500mm/Specification/Indoor Curve Specification with drawings.pdf',
        type: 'spec',
      },
      {
        label: 'Curve drawing',
        href: 'Indoor/Curve/500x500mm/Drawing/2in1 hang and stack bar drawing.pdf',
        type: 'drawing',
      },
    ],
  }),
  createProduct({
    id: 'edge-series',
    name: 'Edge Series XR Panels',
    category: 'VAvR Global Alliance Rental Panels',
    environments: ['Indoor', 'Outdoor'],
    industries: ['Events & Live Production', 'Gaming & Esports', 'Control Rooms & Corporate'],
    applications: ['Events', 'Gaming & Esports', 'Corporate'],
    mounting: ['Truss', 'Ground Stack', 'Wall'],
    pixelPitch: ['P1.9', 'P2.6', 'P2.9', 'P3.9'],
    brightness: { min: 1000, max: 4000 },
    sizes: ['500x500mm', '500x1000mm'],
    sizeSummary: 'Bevelled edge & XR-ready rentals',
    summary: 'Lightweight cornerable cabinets for XR stages, cubes, and fast touring deployments.',
    resources: [
      {
        label: 'Edge spec sheet',
        href: 'Indoor/Edge/500x500mm 2026/Specification Sheet/Indoor Edge 500x500mm and 500x1000mm V2.pdf',
        type: 'spec',
      },
      {
        label: 'Edge XR drawing',
        href: 'outdoor/Edge/500x1000mm XR/Drawings/OE500x1000mm XR.png',
        type: 'drawing',
      },
    ],
  }),
  createProduct({
    id: 'retail-signage',
    name: 'Retail Fascia Signage',
    category: 'Retail Signage',
    environments: ['Outdoor', 'Indoor'],
    industries: ['Retail & Flagship Stores', 'Outdoor Advertising'],
    applications: ['Retail', 'Outdoor Advertising', 'Showrooms'],
    mounting: ['Wall', 'Hanging'],
    pixelPitch: ['P2.5', 'P4.0'],
    brightness: { min: 2000, max: 2500 },
    sizes: ['4480x640mm', '15ftx2ft', '640mm'],
    sizeSummary: '4480×640mm fascia & 640mm increments',
    summary: 'High-bright fascia ribbons and doorway headers engineered for 24/7 retail signage.',
    resources: [
      {
        label: 'Retail signage spec',
        href: 'outdoor/Rigid/Retail Sign/4480x640mm/Specification/Outdoor Rigid Sign 4480x640mm Specification.pdf',
        type: 'spec',
      },
      {
        label: 'Retail signage imagery',
        href: 'outdoor/Rigid/Retail Sign/4480x640mm/Images/ORSign4480x640mm.jpg',
        type: 'image',
      },
    ],
  }),
  createProduct({
    id: 'videoflex-indoor',
    name: 'VideoFlex® Indoor Lift System',
    category: 'Videoflex® Motorised Display',
    environments: ['Indoor'],
    industries: ['Events & Live Production', 'Retail & Flagship Stores', 'Gaming & Esports'],
    applications: ['Events', 'Retail', 'Showrooms'],
    mounting: ['Hanging', 'Bowling Frame'],
    pixelPitch: ['P2.6'],
    brightness: { min: 700, max: 900 },
    sizes: ['1500x3000mm', '19000x4000mm', '3500x2000mm', '7000x4000mm', '750x1200mm', '3000x2500mm'],
    sizeSummary: 'Motorised canvases from 1.5×3m to 19×4m',
    summary: 'Hydraulic VideoFlex® meshes that raise, flex, and store for adaptive bowling and retail activations.',
    resources: [
      {
        label: 'Indoor spec sheet',
        href: 'Indoor/Designer/VideoFlex®/7000x4000mm/Specification Sheet/Indoor Designer Videoflex 7000x4000mm.pdf',
        type: 'spec',
      },
      {
        label: 'Indoor drawing',
        href: 'Indoor/Designer/VideoFlex®/7000x4000mm/Drawing/IDCVFX7000x4000mm Drawing.pdf',
        type: 'drawing',
      },
      {
        label: 'Indoor gallery',
        href: 'Indoor/Designer/VideoFlex®/Images/Videoflex  front view.png',
        type: 'image',
      },
    ],
  }),
  createProduct({
    id: 'videoflex-outdoor',
    name: 'VideoFlex® Outdoor Hydraulic',
    category: 'Videoflex® Motorised Display',
    environments: ['Outdoor'],
    industries: ['Events & Live Production', 'Outdoor Advertising', 'Retail & Flagship Stores'],
    applications: ['Events', 'Outdoor Advertising', 'Retail'],
    mounting: ['Freestanding', 'Truss'],
    pixelPitch: ['P2.6'],
    brightness: { min: 2000, max: 2500 },
    sizes: ['3000x2000mm', '3500x2000mm', '1000x2000mm'],
    sizeSummary: 'Hydraulic lifts from 1×2m to 3.5×2m',
    summary: 'Weatherised VideoFlex® lifts with flight cases for touring and outdoor entertainment.',
    resources: [
      {
        label: 'Outdoor spec sheet',
        href: 'outdoor/Designer/VideoFlex(R)/3500x2000mm/Specification/Outdoor Designer VideoFlex® 3500x2000mm Specification.pdf',
        type: 'spec',
      },
      {
        label: 'Outdoor drawing',
        href: 'outdoor/Designer/VideoFlex(R)/3500x2000mm/Drawing/Outdoor Designer Videoflex® 3500x2000mm Data Drawing.pdf',
        type: 'drawing',
      },
      {
        label: 'Outdoor showcase',
        href: 'outdoor/Designer/VideoFlex(R)/3500x2000mm/video.mp4',
        type: 'video',
      },
    ],
  }),
];

function matchesEnvironment(productEnvironments, environment) {
  if (!environment) return true;
  const selected = normaliseValue(environment);
  const available = productEnvironments.map((value) => normaliseValue(value));

  if (selected.startsWith('indoor')) {
    return available.includes('indoor') || available.includes('hybrid');
  }

  if (selected.startsWith('outdoor')) {
    return available.includes('outdoor') || available.includes('hybrid');
  }

  if (selected.startsWith('hybrid')) {
    return (
      available.includes('hybrid') ||
      (available.includes('indoor') && available.includes('outdoor'))
    );
  }

  return true;
}

function matchesDimension(product, targetValue) {
  if (!targetValue) return false;
  const normalisedTarget = normaliseValue(targetValue);
  const digitsTarget = targetValue.replace(/[^0-9]/g, '');

  return product.sizesNormalized.some((size, index) => {
    if (size && normalisedTarget.includes(size)) {
      return true;
    }
    const sizeDigits = product.sizeDigits[index];
    return Boolean(sizeDigits) && digitsTarget.includes(sizeDigits);
  });
}

function recommendProducts(formData) {
  const category = formData.get('displayCategory');
  if (!category) {
    return [];
  }

  const environment = formData.get('environment');
  const pixelPitch = formData.get('pixelPitch');
  const brightnessValue = formData.get('brightness');
  const brightnessTarget = brightnessValue ? Number(brightnessValue) : undefined;
  const mounting = formData.get('mountingPreference');
  const application = formData.get('application');
  const industry = formData.get('primaryIndustry');
  const dimensions = formData.get('targetDimensions');

  return PRODUCT_CATALOG.filter((product) => {
    if (product.category !== category) {
      return false;
    }

    if (!matchesEnvironment(product.environments, environment)) {
      return false;
    }

    if (
      brightnessTarget &&
      product.brightness &&
      typeof product.brightness.max === 'number' &&
      brightnessTarget > product.brightness.max
    ) {
      return false;
    }

    return true;
  })
    .map((product) => {
      let score = 0;
      const matches = [];

      if (environment) {
        score += 2;
        matches.push(`Optimised for ${environment.toLowerCase()} deployments`);
      }

      if (industry && product.industries?.includes(industry)) {
        score += 2;
        matches.push(`Proven in ${industry}`);
      }

      if (application && product.applications?.some((value) => normaliseValue(value) === normaliseValue(application))) {
        score += 2;
        matches.push(`Supports ${application.toLowerCase()} experiences`);
      }

      if (mounting && product.mounting?.some((value) => normaliseValue(value) === normaliseValue(mounting))) {
        score += 1;
        matches.push(`${mounting} mounting ready`);
      }

      if (pixelPitch) {
        const normalisedPitch = normaliseValue(pixelPitch);
        if (product.pixelPitchNormalized.includes(normalisedPitch)) {
          score += 2;
          matches.push(`${pixelPitch} pixel pitch available`);
        }
      }

      if (
        brightnessTarget &&
        product.brightness &&
        brightnessTarget >= (product.brightness.min || 0) &&
        brightnessTarget <= (product.brightness.max || brightnessTarget)
      ) {
        score += 1;
        matches.push(`Meets ${brightnessTarget} nit target`);
      }

      if (matchesDimension(product, dimensions || '')) {
        score += 1;
        matches.push(`Supports ${dimensions}`);
      }

      return { product, score, matches };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function renderRecommendations(recommendations) {
  if (!recommendations.length) {
    return '<p class="summary-empty">Choose a category and add project detail to unlock tailored product matches.</p>';
  }

  return `
    <div class="summary-recommendations">
      ${recommendations
        .map(({ product, matches }) => {
          const metaItems = [];
          if (product.pixelPitch?.length) {
            metaItems.push(`<li><strong>Pixel pitch:</strong> ${product.pixelPitch.join(', ')}</li>`);
          }
          if (product.sizeSummary) {
            metaItems.push(`<li><strong>Module sizes:</strong> ${product.sizeSummary}</li>`);
          }
          if (product.brightness) {
            metaItems.push(
              `<li><strong>Brightness:</strong> ${product.brightness.min}–${product.brightness.max} nits</li>`
            );
          }
          if (product.mounting?.length) {
            metaItems.push(`<li><strong>Mounting:</strong> ${product.mounting.join(', ')}</li>`);
          }

          const metaMarkup = metaItems.length
            ? `<ul class="recommendation-meta">${metaItems.join('')}</ul>`
            : '';

          const matchesMarkup = matches.length
            ? `<ul class="recommendation-matches">${matches
                .map((reason) => `<li>${reason}</li>`)
                .join('')}</ul>`
            : '';

          const actionsMarkup = product.resources.length
            ? `<div class="recommendation-actions">${product.resources
                .map((resource) => {
                  const type = resource.type || 'spec';
                  return `<a class="btn btn-outline btn-pill spec-link" href="${resource.href}" target="_blank" rel="noopener" data-spec-type="${type}">${resource.label}</a>`;
                })
                .join('')}</div>`
            : '';

          return `
            <article class="recommendation-card">
              <h4>${product.name}</h4>
              <p>${product.summary}</p>
              ${metaMarkup}
              ${matchesMarkup}
              ${actionsMarkup}
            </article>
          `;
        })
        .join('')}
    </div>
  `;
}

let currentStepIndex = steps.findIndex((step) => !step.hidden);
if (currentStepIndex === -1) {
  currentStepIndex = 0;
  steps.forEach((step, index) => {
    step.hidden = index !== currentStepIndex;
  });
}

function updateProgress(index) {
  progress.forEach((step, stepIndex) => {
    step.classList.toggle('active', stepIndex === index);
  });
}

function buildSummary(formData) {
  const entries = Array.from(formData.entries())
    .filter(([, value]) => value)
    .map(([key, value]) => ({
      key: key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^[a-z]/, (char) => char.toUpperCase()),
      value,
    }));

  if (!entries.length) {
    summary.innerHTML = '<p>Provide your project details to generate a tailored configuration preview.</p>';
    return;
  }

  const category = formData.get('displayCategory');
  const specSheet = category ? specSheets[category] : undefined;
  const recommendations = recommendProducts(formData);
  const recommendationsMarkup = renderRecommendations(recommendations);

  summary.innerHTML = `
    <h3>Configuration Summary</h3>
    <ul class="feature-list">
      ${entries
        .map(
          (entry) => `
            <li>
              <div>
                <strong>${entry.key}</strong><br />
                <span>${entry.value}</span>
              </div>
            </li>
          `,
        )
        .join('')}
    </ul>
    ${
      specSheet
        ? `<p class="highlight">Recommended spec sheet: <a href="${specSheet.href}">${specSheet.label}</a></p>`
        : ''
    }
    ${recommendationsMarkup}
  `;
}

function showStep(index) {
  steps[currentStepIndex].hidden = true;
  steps[index].hidden = false;
  currentStepIndex = index;
  updateProgress(index);
}

function goToNextStep() {
  if (currentStepIndex < steps.length - 1) {
    showStep(currentStepIndex + 1);
  }
}

function goToPreviousStep() {
  if (currentStepIndex > 0) {
    showStep(currentStepIndex - 1);
  }
}

updateProgress(currentStepIndex);

if (form) {
  const params = new URLSearchParams(window.location.search);
  if ([...params.keys()].length) {
    params.forEach((value, key) => {
      const element = form.elements.namedItem(key);
      if (!element) return;
      if (typeof RadioNodeList !== 'undefined' && element instanceof RadioNodeList) {
        element.value = value;
      } else {
        element.value = value;
      }
    });
    buildSummary(new FormData(form));
  }
}

form?.addEventListener('input', (event) => {
  if (event.target.matches('[data-sync]')) {
    const { dataset, value } = event.target;
    const target = form.querySelector(`[name="${dataset.sync}"]`);
    if (target) {
      target.value = value;
    }
  }
  buildSummary(new FormData(form));
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  buildSummary(new FormData(form));
  showStep(steps.length - 1);
});

form?.addEventListener('click', (event) => {
  if (event.target.closest('[data-next]')) {
    event.preventDefault();
    goToNextStep();
  }
  if (event.target.closest('[data-prev]')) {
    event.preventDefault();
    goToPreviousStep();
  }
});

buildSummary(form ? new FormData(form) : new FormData());
