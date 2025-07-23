const translations = {
    en: {
        drop_gpx: "\ud83d\udcc1 Drop GPX file here",
        select_gpx: "\ud83d\udcc1 Choose GPX File",
        status_load_file: "Please load a file",
        status_map_loaded: "Map loaded. Please select a GPX file",
        status_map_error: "Map loading error occurred, but you can continue",
        alert_select_gpx: "Please select a GPX file",
        alert_map_not_loaded: "Map has not finished loading. Please wait.",
        alert_invalid_gpx: "Invalid GPX file format",
        alert_load_failed: "Failed to load GPX file: {message}",
        alert_file_read_failed: "Failed to read file",
        alert_no_valid_data: "No valid track data found",
        status_loaded_points: "Loaded {count} track points",
        heading_segments: "Track Segments",
        popup_split_confirm: "Split the track here?",
        popup_yes: "Yes",
        popup_no: "No",
        alert_split_edge: "Cannot split at the end point",
        alert_split_used: "This point is already used as a split point",
        status_split_done: "Split into {count} segments",
        segment_info: "Segment {index}: {count} points",
        alert_no_export_data: "No data to export",
        status_export_done: "Exported {count} GPX files",
        track_point_popup_title: "\ud83d\udccd Track Point"
    },
    ja: {
        drop_gpx: "\ud83d\udcc1 GPX\u30d5\u30a1\u30a4\u30eb\u3092\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044",
        select_gpx: "\ud83d\udcc1 GPX\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e",
        status_load_file: "\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u304f\u3060\u3055\u3044",
        status_map_loaded: "\u5730\u56f3\u306e\u8aad\u307f\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002GPX\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        status_map_error: "\u5730\u56f3\u306e\u8aad\u307f\u8fbc\u307f\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u304c\u3001\u64cd\u4f5c\u306f\u53ef\u80fd\u3067\u3059",
        alert_select_gpx: "GPX\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        alert_map_not_loaded: "\u5730\u56f3\u306e\u8aad\u307f\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002",
        alert_invalid_gpx: "GPX\u30d5\u30a1\u30a4\u30eb\u306e\u5f62\u5f0f\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",
        alert_load_failed: "GPX\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f: {message}",
        alert_file_read_failed: "\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
        alert_no_valid_data: "\u6709\u52b9\u306a\u8ecc\u8de1\u30c7\u30fc\u30bf\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",
        status_loaded_points: "{count}\u500b\u306e\u8ecc\u8de1\u70b9\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f",
        heading_segments: "\u8ecc\u8de1\u30bb\u30b0\u30e1\u30f3\u30c8",
        popup_split_confirm: "\u3053\u3053\u3067\u8ecc\u8de1\u3092\u5206\u5272\u3057\u307e\u3059\u304b\uff1f",
        popup_yes: "\u306f\u3044",
        popup_no: "\u3044\u3044\u3048",
        alert_split_edge: "\u8ecc\u8de1\u306e\u7aef\u70b9\u3067\u306f\u5206\u5272\u3067\u304d\u307e\u305b\u3093",
        alert_split_used: "\u3053\u306e\u70b9\u306f\u65e2\u306b\u5206\u5272\u70b9\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",
        status_split_done: "\u8ecc\u8de1\u3092{count}\u500b\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u5206\u5272\u3057\u307e\u3057\u305f",
        segment_info: "\u30bb\u30b0\u30e1\u30f3\u30c8 {index}: {count}\u500b\u306e\u8ecc\u8de1\u70b9",
        alert_no_export_data: "\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093",
        status_export_done: "{count}\u500b\u306eGPX\u30d5\u30a1\u30a4\u30eb\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f",
        track_point_popup_title: "\ud83d\udccd \u8ecc\u8de1\u30dd\u30a4\u30f3\u30c8"
    }
};

let currentLang = 'en';

function t(key, params = {}) {
    let str = translations[currentLang][key] || key;
    for (const p in params) {
        str = str.replace(`{${p}}`, params[p]);
    }
    return str;
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    applyTranslations();
}

function applyTranslations() {
    document.getElementById('drag-overlay').textContent = t('drop_gpx');
    document.getElementById('file-input-label').textContent = t('select_gpx');
    document.getElementById('status').textContent = t('status_load_file');
    document.querySelector('#track-info h3').textContent = t('heading_segments');
    document.getElementById('export-btn').textContent = '💾 Export';
}

document.addEventListener('DOMContentLoaded', applyTranslations);
