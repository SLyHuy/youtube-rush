const STYLE_ID = 'youtube-rush-dynamic';

const DEFAULTS = {
  controlsOpacity: 0.4,
  progressBarOpacity: 0.4,
  progressBarBottom: true,
};

function buildCSS({ controlsOpacity, progressBarOpacity, progressBarBottom }) {
  const progressBarPosition = progressBarBottom
    ? `
      position: absolute !important;
      bottom: 4px !important;
      left: 0 !important;
      right: 0 !important;`
    : '';

  return `
    .ytp-progress-bar-container {
      opacity: ${progressBarOpacity} !important;
      ${progressBarPosition}
    }

    .ytp-chrome-controls .ytp-button,
    .ytp-chrome-controls .ytp-time-display,
    .ytp-chrome-controls .ytp-volume-area,
    .ytp-chrome-controls .ytp-autonav-toggle-button-container,
    .ytp-fullscreen-grid-expand-button {
      opacity: ${controlsOpacity} !important;
    }
  `;
}

function applySettings(settings) {
  let el = document.getElementById(STYLE_ID);

  if (!el) {
    el = document.createElement('style');
    el.id = STYLE_ID;
    document.head.appendChild(el);
  }

  el.textContent = buildCSS(settings);
}

function loadAndApply() {
  chrome.storage.sync.get(DEFAULTS, (settings) => {
    applySettings(settings);
  });
}

loadAndApply();

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'apply') {
    applySettings(message.settings);
  }
});
