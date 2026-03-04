# YouTube Rush – Clean & Minimal YouTube Experience

**YouTube Rush** is a lightweight web extension designed to subtly improve the YouTube interface for long-form content and live streams. It automatically applies CSS tweaks to clean up distracting UI elements and enhance viewer focus—especially in fullscreen mode.

## 🎯 Key Features

- 🧹 **Clean Progress Bar**: Removes the default focus outline for a sleeker appearance  
- 🔍 **Fullscreen Focus Mode**: Hides video title, share/like buttons, and YouTube brand logo in fullscreen  
- 🎨 **Transparent UI**: Makes control backgrounds transparent and adjusts button positioning for a cleaner layout  
- 🖥️ **Optimized for Long Videos & Streams**: Ideal for uninterrupted viewing  
- 🆕 **Supports Material Design**: Fully compatible with the updated YouTube UI as of April 28  
- ⚙️ **Customizable**: Adjust opacity and progress bar position from the popup  
- 🔐 **Privacy First**: Minimal permissions, only `storage` (zero user-facing warnings)  
- 💻 **Open Source**: [GitHub Repository](https://github.com/SLyHuy/youtube-rush)

![photo-before-after](https://github.com/user-attachments/assets/e85cad27-2003-473b-a0b3-c66134b6cf39)

## 🔄 Change Log

### * Version 3.0 - Mar 4 ⚠️ Breaking Change

- **New: Popup settings panel** — Configure the extension directly from the toolbar popup with a modern dark UI.
- **New: Opacity sliders** — Adjust controls opacity and progress bar opacity independently (0–100%).
- **New: Progress bar position toggle** — Choose between YouTube default position or pinned to the bottom of the player.
- **Breaking:** Opacity and progress bar position are now user-configurable and applied dynamically via a content script. The static CSS values from v2.x are replaced by settings stored in `chrome.storage.sync`.
- **New permission:** `storage` (zero user-facing warning) — required to persist your settings across sessions.

### * Version 2.4 - Mar 4

- **Timed markers pinned to bottom:** `ytp-timed-markers-container` is now repositioned to the very bottom of the player with a clean 4px gap, separated from the control bar.
- **Dimmed player controls:** All control buttons (play/pause, volume, autoplay, subtitles, settings, theater, fullscreen) now render at 0.4 opacity for a less intrusive UI.

### * Version 2.3 - Jul 5

- **Hide meta-data UI in YouTube Short:** The user interface for YouTube Shorts has been updated to hide metadata, providing a cleaner and more immersive viewing area.
- **Improve visibility all detail of short video:** All essential details of the short video are now more clearly visible for an improved user experience.

### * Version 2.2 - May 15

- Youtube rollback previous UI, so we'll rollback some CSS to support previous UI.

### * Version 2.1 - May 8

- Updated progress bar positioning and `z-index`
- Removed background from control buttons (`backdrop-filter`, `background`)
- **New**: Hides video title, share/like buttons, and brand logo in fullscreen
- **New**: Made UI background transparent and repositioned buttons for better focus

---

A small tool with a big impact — **YouTube Rush** helps you enjoy content without distractions.
