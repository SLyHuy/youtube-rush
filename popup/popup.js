const DEFAULTS = {
  controlsOpacity: 0.4,
  progressBarOpacity: 0.4,
  progressBarBottom: true,
};

const controlsOpacityEl = document.getElementById('controlsOpacity');
const controlsOpacityValueEl = document.getElementById('controlsOpacityValue');
const progressBarOpacityEl = document.getElementById('progressBarOpacity');
const progressBarOpacityValueEl = document.getElementById('progressBarOpacityValue');
const progressBarBottomEl = document.getElementById('progressBarBottom');
const versionEl = document.getElementById('version');

versionEl.textContent = chrome.runtime.getManifest().version;

function pct(val) {
  return Math.round(val * 100) + '%';
}

function getSettings() {
  return {
    controlsOpacity: controlsOpacityEl.value / 100,
    progressBarOpacity: progressBarOpacityEl.value / 100,
    progressBarBottom: progressBarBottomEl.checked,
  };
}

function save() {
  const settings = getSettings();
  chrome.storage.sync.set(settings);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'apply', settings });
    }
  });
}

chrome.storage.sync.get(DEFAULTS, (settings) => {
  controlsOpacityEl.value = Math.round(settings.controlsOpacity * 100);
  controlsOpacityValueEl.textContent = pct(settings.controlsOpacity);

  progressBarOpacityEl.value = Math.round(settings.progressBarOpacity * 100);
  progressBarOpacityValueEl.textContent = pct(settings.progressBarOpacity);

  progressBarBottomEl.checked = settings.progressBarBottom;
});

controlsOpacityEl.addEventListener('input', () => {
  controlsOpacityValueEl.textContent = controlsOpacityEl.value + '%';
  save();
});

progressBarOpacityEl.addEventListener('input', () => {
  progressBarOpacityValueEl.textContent = progressBarOpacityEl.value + '%';
  save();
});

progressBarBottomEl.addEventListener('change', save);
