let currentLang = 'en';
let translations = {};
const loaded = {};

function parsePo(text) {
    const lines = text.split(/\r?\n/);
    const result = {};
    let key = null;
    for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith('#')) continue;
        if (line.startsWith('msgid')) {
            key = line.match(/^msgid\s+"(.*)"$/)[1];
        } else if (line.startsWith('msgstr') && key !== null) {
            const val = line.match(/^msgstr\s+"(.*)"$/)[1];
            result[key] = val;
            key = null;
        }
    }
    return result;
}

function loadLanguage(lang) {
    if (loaded[lang]) {
        currentLang = lang;
        translations = loaded[lang];
        document.documentElement.lang = lang;
        applyTranslations();
        return Promise.resolve();
    }
    return fetch(`locales/${lang}/LC_MESSAGES/messages.po`)
        .then(r => r.text())
        .then(text => {
            loaded[lang] = parsePo(text);
            currentLang = lang;
            translations = loaded[lang];
            document.documentElement.lang = lang;
            applyTranslations();
        })
        .catch(err => console.error('Failed to load language', lang, err));
}

function t(key, params = {}) {
    let str = translations[key] || key;
    for (const p in params) {
        str = str.replace(`{${p}}`, params[p]);
    }
    return str;
}

function applyTranslations() {
    const dragOverlay = document.getElementById('drag-overlay');
    const fileLabel = document.getElementById('file-input-label');
    const status = document.getElementById('status');
    const segmentHeader = document.getElementById('segment-header');
    const exportBtn = document.getElementById('export-btn');
    if (dragOverlay) dragOverlay.textContent = t('drop_gpx');
    if (fileLabel) fileLabel.textContent = t('select_gpx');
    if (status) status.textContent = t('status_load_file');
    if (segmentHeader) segmentHeader.textContent = t('heading_segments');
    if (exportBtn) exportBtn.textContent = '💾 Export';
}

function setLanguage(lang) {
    loadLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => loadLanguage(currentLang));
