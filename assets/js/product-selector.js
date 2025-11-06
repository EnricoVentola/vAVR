const steps = Array.from(document.querySelectorAll('[data-step]'));
const form = document.querySelector('[data-selector-form]');
const summary = document.querySelector('[data-summary]');
const progress = document.querySelectorAll('[data-progress-step]');

const specSheets = {
  'All-in-One': {
    label: 'All-in-One Interactive BizetBeeBoard Touchscreen',
    href: 'resources.html#spec-all-in-one',
  },
  'MicroLED Canvas': {
    label: 'Designer Micro LED Canvas',
    href: 'resources.html#spec-microled',
  },
  'Transparent AIO Poster': {
    label: 'Transparent Poster Spec Sheet',
    href: 'resources.html#spec-transparent',
  },
  'Interactive Touchscreen': {
    label: 'Interactive Touchscreen Range',
    href: 'resources.html#spec-all-in-one',
  },
  'Interactive LED Floor': {
    label: 'Interactive LED Floor Spec Sheet',
    href: 'resources.html#spec-floor',
  },
  'VAVR Rental Panels': {
    label: 'Rental Panels (Rigid / XR / Curve / Edge)',
    href: 'resources.html#spec-rental',
  },
  'Retail Signage': {
    label: 'Retail Signage Spec Sheet',
    href: 'resources.html#spec-retail',
  },
  'Videoflex® Motorised Display': {
    label: 'VideoFlex® Indoor & Outdoor',
    href: 'resources.html#spec-videoflex',
  },
};

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
