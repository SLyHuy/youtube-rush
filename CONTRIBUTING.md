# Contributing to YouTube Rush

## Table of Contents

- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Packaging & Release](#packaging--release)

---

## Project Structure

```
youtube-rush/
├── css/
│   └── content.css       # Injected styles on every youtube.com page
├── icons/
│   ├── 16x16.png
│   ├── 32x32.png
│   ├── 48x48.png
│   └── 128x128.png
├── popup/
│   └── popup.html        # Extension popup UI
├── manifest.json         # Chrome Extension Manifest v3
├── README.md
└── CONTRIBUTING.md
```

---

## Development Setup

### Prerequisites

- Google Chrome (or any Chromium-based browser)
- A text editor (VS Code recommended)

### Install as an unpacked extension

1. Clone the repository:

   ```bash
   git clone https://github.com/SLyHuy/youtube-rush.git
   cd youtube-rush
   ```

2. Open Chrome and go to:

   ```
   chrome://extensions
   ```

3. Enable **Developer mode** (toggle in the top-right corner).

4. Click **Load unpacked** and select the root folder of the repo (`youtube-rush/`).

5. The extension will now appear in your extensions list and activate on any `youtube.com` page.

### Applying CSS changes

This extension has no build step — it's plain CSS.

1. Edit `css/content.css`.
2. Go to `chrome://extensions` and click the **refresh icon** on the YouTube Rush card.
3. Reload any open YouTube tab to see the changes.

---

## Making Changes

- All visual tweaks go in `css/content.css`.
- Update `manifest.json` with the new version number before releasing (follows `major.minor` format, e.g. `2.4`).
- Document your changes in the `## 🔄 Change Log` section of `README.md`.

---

## Packaging & Release

### 1. Bump the version

In `manifest.json`, update the `version` field:

```json
"version": "2.4"
```

Add a changelog entry in `README.md`:

```markdown
### * Version 2.4 - Mar 4

- Description of what changed
```

### 2. Create a ZIP package

From the repo root, run:

```bash
zip -r youtube-rush-v2.4.zip . \
  --exclude "*.git*" \
  --exclude "*.DS_Store" \
  --exclude "CONTRIBUTING.md" \
  --exclude "*.md" \
  --exclude "__MACOSX*"
```

Or using a GUI: select all files **inside** the repo root (not the folder itself), right-click → Compress.

> The ZIP must contain `manifest.json` at its root — not inside a subdirectory.

### 3. Test the packaged ZIP

1. Go to `chrome://extensions`.
2. Drag and drop the `.zip` onto the page, or use **Load unpacked** on a freshly extracted copy to verify everything works.

### 4. Publish to the Chrome Web Store

1. Go to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole).
2. Select the **YouTube Rush** listing.
3. Click **Package** → **Upload new package** and upload the ZIP.
4. Fill in any updated description or screenshots.
5. Click **Submit for review**.

> Chrome Web Store review typically takes a few hours to a few days.

### 5. Tag the release on GitHub

```bash
git add manifest.json README.md css/content.css
git commit -m "Release v2.4"
git tag v2.4
git push origin main --tags
```

Then go to the [GitHub Releases page](https://github.com/SLyHuy/youtube-rush/releases) and create a new release from the tag, attaching the `.zip` as an asset.
