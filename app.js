/**
 * Zorin OS desktop preview — interactive shell
 * Core layouts: Windows-like, Windows List-like, Touch, GNOME Shell-like
 * Themes: ZorinBlue-Dark / ZorinBlue-Light
 */

/* ---------- App / category data ---------- */

const PINNED = [
  { id: "files", name: "Files", icon: "assets/apps/org.gnome.Nautilus.png" },
  { id: "firefox", name: "Firefox", icon: "assets/apps/firefox.png" },
  { id: "software", name: "Software", icon: "assets/apps/org.gnome.Software.png" },
  { id: "terminal", name: "Terminal", icon: "assets/apps/org.gnome.Terminal.png" },
  { id: "writer", name: "LibreOffice Writer", icon: "assets/apps/libreoffice-writer.png" },
  { id: "settings", name: "Settings", icon: "assets/apps/preferences-system.png" },
];

const CATEGORIES = [
  { id: "accessories", name: "Accessories", icon: "assets/menu/applications-accessories.png" },
  { id: "graphics", name: "Graphics", icon: "assets/menu/applications-graphics.png" },
  { id: "internet", name: "Internet", icon: "assets/menu/applications-internet.png" },
  { id: "office", name: "Office", icon: "assets/menu/applications-office.png" },
  { id: "multimedia", name: "Sound & Video", icon: "assets/menu/applications-multimedia.png" },
  { id: "system", name: "System Tools", icon: "assets/menu/applications-system.png" },
  { id: "utilities", name: "Utilities", icon: "assets/menu/applications-utilities.png" },
];

const MENU_PLACES = [
  { id: "home", name: "Home", icon: "assets/places/user-home.png", place: "home" },
  { id: "desktop", name: "Desktop", icon: "assets/places/user-desktop.png", place: "desktop" },
  { id: "documents", name: "Documents", icon: "assets/places/folder-documents.png", place: "documents" },
  { id: "downloads", name: "Downloads", icon: "assets/places/folder-download.png", place: "downloads" },
  { id: "music", name: "Music", icon: "assets/places/folder-music.png", place: "music" },
  { id: "pictures", name: "Pictures", icon: "assets/places/folder-pictures.png", place: "pictures" },
  { id: "videos", name: "Videos", icon: "assets/places/folder-videos.png", place: "videos" },
];

const MENU_SHORTCUTS = [
  { id: "software", name: "Software", icon: "assets/apps/org.gnome.Software.png", app: "software" },
  { id: "settings", name: "Settings", icon: "assets/apps/preferences-system.png", app: "settings" },
  { id: "appearance", name: "Zorin Appearance", icon: "assets/apps/preferences-desktop.png", app: "settings" },
];

const APPS = [
  {
    id: "files",
    name: "Files",
    desc: "Access and organize files",
    icon: "assets/apps/org.gnome.Nautilus.png",
    categories: ["accessories", "utilities", "all"],
  },
  {
    id: "firefox",
    name: "Firefox Web Browser",
    desc: "Browse the World Wide Web",
    icon: "assets/apps/firefox.png",
    categories: ["internet", "all"],
  },
  {
    id: "terminal",
    name: "Terminal",
    desc: "Use the command line",
    icon: "assets/apps/org.gnome.Terminal.png",
    categories: ["accessories", "system", "utilities", "all"],
  },
  {
    id: "software",
    name: "Software",
    desc: "Add or remove software",
    icon: "assets/apps/org.gnome.Software.png",
    categories: ["system", "all"],
  },
  {
    id: "settings",
    name: "Settings",
    desc: "Change system settings",
    icon: "assets/apps/preferences-system.png",
    categories: ["prefs", "system", "all"],
  },
  {
    id: "calculator",
    name: "Calculator",
    desc: "Perform calculations",
    icon: "assets/apps/org.gnome.Calculator.png",
    categories: ["accessories", "utilities", "all"],
  },
  {
    id: "texteditor",
    name: "Text Editor",
    desc: "Edit text files",
    icon: "assets/apps/accessories-text-editor.png",
    categories: ["accessories", "utilities", "all"],
  },
  {
    id: "writer",
    name: "LibreOffice Writer",
    desc: "Create and edit text documents",
    icon: "assets/apps/libreoffice-writer.png",
    categories: ["office", "all"],
  },
  {
    id: "calc",
    name: "LibreOffice Calc",
    desc: "Perform calculations, analyze information",
    icon: "assets/apps/libreoffice-calc.png",
    categories: ["office", "all"],
  },
  {
    id: "impress",
    name: "LibreOffice Impress",
    desc: "Create and edit presentations",
    icon: "assets/apps/libreoffice-impress.png",
    categories: ["office", "all"],
  },
  {
    id: "startcenter",
    name: "LibreOffice",
    desc: "The office productivity suite",
    icon: "assets/apps/libreoffice-startcenter.png",
    categories: ["office", "all"],
  },
  {
    id: "evince",
    name: "Document Viewer",
    desc: "View multi-page documents",
    icon: "assets/apps/org.gnome.Evince.svg",
    categories: ["office", "all"],
  },
  {
    id: "eog",
    name: "Image Viewer",
    desc: "Browse and rotate images",
    icon: "assets/apps/org.gnome.eog.png",
    categories: ["graphics", "all"],
  },
  {
    id: "shotwell",
    name: "Shotwell",
    desc: "Organize your photos",
    icon: "assets/apps/shotwell.png",
    categories: ["graphics", "all"],
  },
  {
    id: "videos",
    name: "Videos",
    desc: "Play movies",
    icon: "assets/apps/org.gnome.Totem.png",
    categories: ["multimedia", "all"],
  },
  {
    id: "rhythmbox",
    name: "Rhythmbox",
    desc: "Play and organize your music",
    icon: "assets/apps/rhythmbox.png",
    categories: ["multimedia", "all"],
  },
  {
    id: "help",
    name: "Help",
    desc: "Get help with Zorin OS",
    icon: "assets/apps/help-browser.png",
    categories: ["system", "all"],
  },
  {
    id: "zorin-connect",
    name: "Zorin Connect",
    desc: "Connect your devices",
    icon: "assets/apps/zorin-connect.png",
    categories: ["utilities", "all"],
  },
];

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/user-home.png",
    items: [
      { name: "Desktop", icon: "assets/places/user-desktop.png", type: "folder", place: "desktop", size: "—", modified: "Today" },
      { name: "Documents", icon: "assets/places/folder-documents.png", type: "folder", place: "documents", size: "—", modified: "Yesterday" },
      { name: "Downloads", icon: "assets/places/folder-download.png", type: "folder", place: "downloads", size: "—", modified: "Today" },
      { name: "Music", icon: "assets/places/folder-music.png", type: "folder", place: "music", size: "—", modified: "12 Jul 2026" },
      { name: "Pictures", icon: "assets/places/folder-pictures.png", type: "folder", place: "pictures", size: "—", modified: "10 Jul 2026" },
      { name: "Public", icon: "assets/places/folder-publicshare.png", type: "folder", place: "public", size: "—", modified: "1 Jul 2026" },
      { name: "Templates", icon: "assets/places/folder-templates.png", type: "folder", place: "templates", size: "—", modified: "1 Jul 2026" },
      { name: "Videos", icon: "assets/places/folder-videos.png", type: "folder", place: "videos", size: "—", modified: "5 Jul 2026" },
    ],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/user-desktop.png",
    items: [
      { name: "Home", icon: "assets/places/user-home.png", type: "folder", place: "home", size: "—", modified: "Today" },
    ],
  },
  documents: {
    label: "Documents",
    icon: "assets/places/folder-documents.png",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.png", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "budget.ods", icon: "assets/apps/libreoffice-calc.png", type: "file", size: "48 kB", modified: "Yesterday" },
      { name: "report.odt", icon: "assets/apps/libreoffice-writer.png", type: "file", size: "112 kB", modified: "8 Jul 2026" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: "assets/places/folder-download.png",
    items: [
      { name: "zorin-os.iso", icon: "assets/places/drive-harddisk.png", type: "file", size: "3.1 GB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.png", type: "file", size: "340 kB", modified: "Yesterday" },
    ],
  },
  music: {
    label: "Music",
    icon: "assets/places/folder-music.png",
    items: [{ name: "Playlist", icon: "assets/places/folder.png", type: "folder", size: "—", modified: "1 Jun 2026" }],
  },
  pictures: {
    label: "Pictures",
    icon: "assets/places/folder-pictures.png",
    items: [
      { name: "Vacation", icon: "assets/places/folder.png", type: "folder", size: "—", modified: "20 Jun 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
    ],
  },
  videos: {
    label: "Videos",
    icon: "assets/places/folder-videos.png",
    items: [],
  },
  public: {
    label: "Public",
    icon: "assets/places/folder-publicshare.png",
    items: [],
  },
  templates: {
    label: "Templates",
    icon: "assets/places/folder-templates.png",
    items: [],
  },
  trash: {
    label: "Trash",
    icon: "assets/places/user-trash.svg",
    items: [],
  },
  recent: {
    label: "Recent",
    icon: "assets/actions/document-open-recent-symbolic.svg",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.png", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
    ],
  },
  starred: {
    label: "Starred",
    icon: "assets/actions/bookmark-new-symbolic.svg",
    items: [],
  },
  other: {
    label: "Other Locations",
    icon: "assets/places/computer.png",
    items: [
      { name: "Computer", icon: "assets/places/computer.png", type: "folder", place: "home", size: "—", modified: "—" },
      { name: "Filesystem", icon: "assets/places/drive-harddisk.png", type: "folder", place: "home", size: "256 GB", modified: "—" },
    ],
  },
};

const SIDEBAR = [
  { id: "starred", label: "Starred", icon: "assets/actions/bookmark-new-symbolic.svg", symbolic: true },
  { id: "recent", label: "Recent", icon: "assets/actions/document-open-recent-symbolic.svg", symbolic: true },
  { section: " " },
  { id: "home", label: "Home", icon: "assets/places/user-home.png" },
  { id: "documents", label: "Documents", icon: "assets/places/folder-documents.png" },
  { id: "downloads", label: "Downloads", icon: "assets/places/folder-download.png" },
  { id: "music", label: "Music", icon: "assets/places/folder-music.png" },
  { id: "pictures", label: "Pictures", icon: "assets/places/folder-pictures.png" },
  { id: "videos", label: "Videos", icon: "assets/places/folder-videos.png" },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash.svg" },
  { section: "  " },
  { id: "other", label: "Other Locations", icon: "assets/places/computer.png" },
];


/* ---------- DOM ---------- */

const desktop = document.getElementById("desktop");
const layoutChooser = document.getElementById("layout-chooser");

const menuBtn = document.getElementById("menu-btn");
const zorinMenu = document.getElementById("zorin-menu");
const menuSearch = document.getElementById("menu-search");
const menuCategories = document.getElementById("menu-categories");
const menuApps = document.getElementById("menu-apps");
const menuEmpty = document.getElementById("menu-empty");
const menuSectionLabel = document.getElementById("menu-section-label");
const menuHome = document.getElementById("menu-home");
const menuAppsPane = document.getElementById("menu-apps-pane");
const menuAllApps = document.getElementById("menu-all-apps");
const menuPlaces = document.getElementById("menu-places");
const menuShortcuts = document.getElementById("menu-shortcuts");

const clockBtn = document.getElementById("clock-btn");
const clockText = document.getElementById("clock-text");
const topClockBtn = document.getElementById("top-clock-btn");
const topClockText = document.getElementById("top-clock-text");
const touchClockBtn = document.getElementById("touch-clock-btn");
const touchClockText = document.getElementById("touch-clock-text");
const calendarPopover = document.getElementById("calendar-popover");
const calWeekday = document.getElementById("cal-weekday");
const calFullDate = document.getElementById("cal-full-date");
const calMonthLabel = document.getElementById("cal-month-label");
const calGrid = document.getElementById("cal-grid");
const calPrev = document.getElementById("cal-prev");
const calNext = document.getElementById("cal-next");

const qsBtn = document.getElementById("qs-btn");
const topQsBtn = document.getElementById("top-qs-btn");
const touchQsBtn = document.getElementById("touch-qs-btn");
const qsPopover = document.getElementById("qs-popover");
const qsPageMain = document.getElementById("qs-page-main");
const qsPagePower = document.getElementById("qs-page-power");
const volumeSlider = document.getElementById("volume-slider");
const brightnessSlider = document.getElementById("brightness-slider");
const panelVolumeIcon = document.getElementById("panel-volume-icon");
const qsVolumeIcon = document.getElementById("qs-volume-icon");
const showDesktopBtn = document.getElementById("show-desktop-btn");
const powerMenu = document.getElementById("power-menu");
const powerModeToggle = document.getElementById("power-mode-toggle");
const powerModeIcon = document.getElementById("power-mode-icon");
const powerModeSub = document.getElementById("power-mode-sub");
const nightLightOverlay = document.getElementById("night-light-overlay");

const sessionOverlay = document.getElementById("session-overlay");
const sessionTitle = document.getElementById("session-title");
const sessionMessage = document.getElementById("session-message");
const sessionCancel = document.getElementById("session-cancel");
const sessionConfirm = document.getElementById("session-confirm");

const filesWindow = document.getElementById("files-window");
const filesClose = document.getElementById("files-close");
const filesMin = document.getElementById("files-min");
const filesMax = document.getElementById("files-max");
const filesPathLabel = document.getElementById("files-path-label");
const filesContent = document.getElementById("files-content");
const filesSidebar = document.getElementById("files-sidebar");
const filesStatus = document.getElementById("files-status");
const filesSearchBtn = document.getElementById("files-search-btn");
const filesSearchBar = document.getElementById("files-search-bar");
const filesSearchInput = document.getElementById("files-search-input");
const filesViewIcons = document.getElementById("files-view-icons");
const filesViewList = document.getElementById("files-view-list");
const filesBack = document.getElementById("files-back");
const filesForward = document.getElementById("files-forward");
const panelFiles = document.getElementById("panel-files");

const termWindow = document.getElementById("term-window");
const termClose = document.getElementById("term-close");
const termMin = document.getElementById("term-min");
const termMax = document.getElementById("term-max");
const panelTerminal = document.getElementById("panel-terminal");

const touchGrid = document.getElementById("touch-grid");
const touchGridBtn = document.getElementById("touch-grid-btn");
const touchSearch = document.getElementById("touch-search");
const touchApps = document.getElementById("touch-apps");
const touchDock = document.getElementById("touch-dock");

const topBar = document.getElementById("top-bar");
const activitiesBtn = document.getElementById("activities-btn");
const gnomeOverview = document.getElementById("gnome-overview");
const gnomeSearch = document.getElementById("gnome-search");
const gnomeOverviewApps = document.getElementById("gnome-overview-apps");
const gnomeDash = document.getElementById("gnome-dash");
const dashShowApps = document.getElementById("dash-show-apps");

const LAYOUTS = ["windows", "windows-list", "touch", "gnome"];
const LAYOUT_STORAGE = "zorin-preview-layout";

let currentLayout = "windows";
/** null = home places view; "all" | category id = apps view */
let selectedCategory = null;
let viewYear;
let viewMonth;
let filesPlace = "home";
let filesHistory = ["home"];
let filesHistIndex = 0;
let filesViewMode = "icons";
let filesFilter = "";
let zIndexCounter = 20;
let sessionAction = "poweroff";
let powerProfile = "balanced";
let activeQsTrigger = null;
let activeClockTrigger = null;

const POWER_PROFILES = {
  "power-saver": {
    name: "Power Saver",
    icon: "assets/status/power-profile-power-saver-symbolic.svg",
  },
  balanced: {
    name: "Balanced",
    icon: "assets/status/power-profile-balanced-symbolic.svg",
  },
  performance: {
    name: "Performance",
    icon: "assets/status/power-profile-performance-symbolic.svg",
  },
};

/* ---------- Layout switching ---------- */

function setLayout(layout) {
  if (!LAYOUTS.includes(layout)) layout = "windows";
  currentLayout = layout;

  LAYOUTS.forEach((l) => desktop.classList.remove(`layout-${l}`));
  desktop.classList.add(`layout-${layout}`);
  desktop.dataset.layout = layout;

  // Show/hide chrome elements that use [hidden] in HTML
  const panel = document.getElementById("panel");
  const isWindows = layout === "windows" || layout === "windows-list";
  if (panel) panel.hidden = !isWindows;
  if (topBar) topBar.hidden = layout !== "gnome";
  if (gnomeDash) gnomeDash.hidden = layout !== "gnome";
  if (touchDock) touchDock.hidden = layout !== "touch";

  layoutChooser.querySelectorAll(".layout-opt").forEach((btn) => {
    const active = btn.dataset.layout === layout;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    localStorage.setItem(LAYOUT_STORAGE, layout);
  } catch (_) {}

  closeAll();
  updateTaskIndicators();
}

/* ---------- Clock ---------- */

function formatPanelClock(date) {
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const time = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${weekday} ${time}`;
}

function formatShortClock(date) {
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function formatTopClock(date) {
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const day = date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  const time = formatShortClock(date);
  return `${weekday} ${day}  ${time}`;
}

function tickClock() {
  const now = new Date();
  if (clockText) clockText.textContent = formatPanelClock(now);
  if (topClockText) topClockText.textContent = formatTopClock(now);
  if (touchClockText) touchClockText.textContent = formatShortClock(now);
}

tickClock();
setInterval(tickClock, 15_000);

/* ---------- Calendar ---------- */

function setViewToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth();
}

function buildCalendar() {
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth();
  const todayD = now.getDate();

  calWeekday.textContent = now.toLocaleDateString(undefined, { weekday: "long" });
  calFullDate.textContent = now.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const labelDate = new Date(viewYear, viewMonth, 1);
  calMonthLabel.textContent = labelDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  calGrid.innerHTML = "";
  for (let i = 0; i < 42; i++) {
    const dayOffset = i - firstDow;
    const el = document.createElement("div");
    if (dayOffset < 0) {
      el.className = "cal-day muted";
      el.textContent = String(daysInPrev + dayOffset + 1);
    } else if (dayOffset < daysInMonth) {
      const d = dayOffset + 1;
      const isToday = d === todayD && viewMonth === todayM && viewYear === todayY;
      el.className = "cal-day" + (isToday ? " today" : "");
      el.textContent = String(d);
    } else {
      el.className = "cal-day muted";
      el.textContent = String(dayOffset - daysInMonth + 1);
    }
    calGrid.appendChild(el);
  }
}

setViewToToday();

/* ---------- Menu (Windows-like) ---------- */

function showMenuHome() {
  selectedCategory = null;
  menuHome.hidden = false;
  menuAppsPane.hidden = true;
  menuAllApps.classList.remove("selected");
  menuCategories.querySelectorAll(".zm-cat").forEach((el) => el.classList.remove("selected"));
}

function showMenuApps(categoryId) {
  selectedCategory = categoryId;
  menuHome.hidden = true;
  menuAppsPane.hidden = false;
  menuAllApps.classList.toggle("selected", categoryId === "all");
  menuCategories.querySelectorAll(".zm-cat").forEach((el) => {
    el.classList.toggle("selected", el.dataset.category === categoryId);
  });
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  menuSectionLabel.textContent =
    categoryId === "all" ? "All Apps" : cat ? cat.name : "Apps";
  renderMenuApps();
}

function renderCategories() {
  menuCategories.innerHTML = "";
  for (const cat of CATEGORIES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "zm-cat" + (cat.id === selectedCategory ? " selected" : "");
    btn.dataset.category = cat.id;
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `
      <img src="${cat.icon}" alt="" draggable="false" />
      <span>${cat.name}</span>
      <img class="sym zm-cat-chevron" src="assets/status/go-next-symbolic.svg" alt="" draggable="false" />
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showMenuApps(cat.id);
    });
    menuCategories.appendChild(btn);
  }
}

function renderMenuPlaces() {
  menuPlaces.innerHTML = "";
  for (const p of MENU_PLACES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "zm-place";
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `<img src="${p.icon}" alt="" draggable="false" /><span>${p.name}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
      openFiles(p.place);
    });
    menuPlaces.appendChild(btn);
  }
}

function renderMenuShortcuts() {
  menuShortcuts.innerHTML = "";
  for (const s of MENU_SHORTCUTS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "zm-shortcut";
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `<img src="${s.icon}" alt="" draggable="false" /><span>${s.name}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      launchApp(s.app);
    });
    menuShortcuts.appendChild(btn);
  }
}

function getAppsForCategory(catId, filter = "") {
  const q = filter.trim().toLowerCase();
  let list;
  if (catId === "all" || !catId) {
    list = APPS.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else {
    list = APPS.filter((a) => a.categories.includes(catId));
  }
  if (q) {
    list = APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.desc && a.desc.toLowerCase().includes(q))
    ).sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

function renderMenuApps(filter) {
  const q = filter !== undefined ? filter : menuSearch.value;
  const catId = selectedCategory || "all";
  const list = getAppsForCategory(catId, q);

  if (q.trim()) {
    menuSectionLabel.textContent = "Search results";
    menuHome.hidden = true;
    menuAppsPane.hidden = false;
  } else if (selectedCategory) {
    const cat = CATEGORIES.find((c) => c.id === selectedCategory);
    menuSectionLabel.textContent =
      selectedCategory === "all" ? "All Apps" : cat ? cat.name : "Apps";
  }

  menuApps.innerHTML = "";
  menuEmpty.hidden = list.length > 0;

  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "zm-app";
    btn.setAttribute("role", "listitem");
    btn.title = app.name;
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span class="zm-app-text">
        <span class="zm-app-name">${app.name}</span>
        ${app.desc ? `<span class="zm-app-desc">${app.desc}</span>` : ""}
      </span>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      launchApp(app.id);
    });
    menuApps.appendChild(btn);
  }
}

function setExpanded(btn, open) {
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeMenu() {
  zorinMenu.hidden = true;
  setExpanded(menuBtn, false);
  menuSearch.value = "";
  selectedCategory = null;
  showMenuHome();
  desktop.classList.remove("menu-open");
}

function openMenu() {
  closePopovers();
  closeTouchGrid();
  closeGnomeOverview();
  zorinMenu.hidden = false;
  setExpanded(menuBtn, true);
  menuSearch.value = "";
  showMenuHome();
  renderCategories();
  desktop.classList.add("menu-open");
  requestAnimationFrame(() => menuSearch.focus());
}

function toggleMenu() {
  if (zorinMenu.hidden) openMenu();
  else closeMenu();
}

/* ---------- Touch grid / GNOME overview ---------- */

function renderIconGrid(container, filter = "") {
  const q = filter.trim().toLowerCase();
  let list = APPS.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (q) {
    list = list.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.desc && a.desc.toLowerCase().includes(q))
    );
  }
  container.innerHTML = "";
  const isTouch = container === touchApps;
  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = isTouch ? "touch-app" : "gnome-ov-app";
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `<img src="${app.icon}" alt="" draggable="false" /><span>${app.name}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      launchApp(app.id);
    });
    container.appendChild(btn);
  }
}

function openTouchGrid() {
  closeMenu();
  closePopovers();
  closeGnomeOverview();
  touchGrid.hidden = false;
  setExpanded(touchGridBtn, true);
  touchSearch.value = "";
  renderIconGrid(touchApps, "");
  desktop.classList.add("menu-open");
  requestAnimationFrame(() => touchSearch.focus());
}

function closeTouchGrid() {
  if (!touchGrid) return;
  touchGrid.hidden = true;
  setExpanded(touchGridBtn, false);
  if (touchSearch) touchSearch.value = "";
  desktop.classList.remove("menu-open");
}

function toggleTouchGrid() {
  if (touchGrid.hidden) openTouchGrid();
  else closeTouchGrid();
}

function setGnomeOverviewExpanded(open) {
  setExpanded(activitiesBtn, open);
  setExpanded(dashShowApps, open);
  if (dashShowApps) {
    dashShowApps.classList.toggle("active", open);
  }
}

function openGnomeOverview() {
  closeMenu();
  closePopovers();
  closeTouchGrid();
  gnomeOverview.hidden = false;
  setGnomeOverviewExpanded(true);
  gnomeSearch.value = "";
  renderIconGrid(gnomeOverviewApps, "");
  desktop.classList.add("menu-open");
  requestAnimationFrame(() => gnomeSearch.focus());
}

function closeGnomeOverview() {
  if (!gnomeOverview) return;
  gnomeOverview.hidden = true;
  setGnomeOverviewExpanded(false);
  if (gnomeSearch) gnomeSearch.value = "";
  desktop.classList.remove("menu-open");
}

function toggleGnomeOverview() {
  if (!gnomeOverview || gnomeOverview.hidden) openGnomeOverview();
  else closeGnomeOverview();
}

/* ---------- Quick Settings / popovers ---------- */

function showQsMainPage() {
  if (qsPageMain) qsPageMain.hidden = false;
  if (qsPagePower) qsPagePower.hidden = true;
}

function showQsPowerPage() {
  if (qsPageMain) qsPageMain.hidden = true;
  if (qsPagePower) qsPagePower.hidden = false;
  closePowerMenu();
}

function closePowerMenu() {
  if (powerMenu) powerMenu.hidden = true;
  const powerBtn = document.getElementById("qs-power");
  setExpanded(powerBtn, false);
}

function qsTriggers() {
  return [qsBtn, topQsBtn, touchQsBtn].filter(Boolean);
}

function clockTriggers() {
  return [clockBtn, topClockBtn, touchClockBtn].filter(Boolean);
}

function closePopovers() {
  calendarPopover.hidden = true;
  qsPopover.hidden = true;
  closePowerMenu();
  showQsMainPage();
  clockTriggers().forEach((b) => setExpanded(b, false));
  qsTriggers().forEach((b) => setExpanded(b, false));
  activeQsTrigger = null;
  activeClockTrigger = null;
  desktop.classList.remove("popover-open");
}

function closeAll() {
  closeMenu();
  closePopovers();
  closeTouchGrid();
  closeGnomeOverview();
}

function togglePopover(popover, btn) {
  const wasOpen = !popover.hidden && (
    (popover === qsPopover && activeQsTrigger === btn) ||
    (popover === calendarPopover && activeClockTrigger === btn) ||
    (popover === qsPopover && !activeQsTrigger) ||
    (popover === calendarPopover && !activeClockTrigger)
  );
  // If same popover open from this btn, close; else open for this btn
  const already = !popover.hidden && (
    (popover === qsPopover && activeQsTrigger === btn) ||
    (popover === calendarPopover && activeClockTrigger === btn)
  );

  closeMenu();
  closeTouchGrid();
  if (currentLayout === "gnome" && popover !== calendarPopover) {
    /* keep overview if opening from dash? no — close */
  }
  closePopovers();

  if (!already) {
    popover.hidden = false;
    setExpanded(btn, true);
    desktop.classList.add("popover-open");
    if (popover === calendarPopover) {
      activeClockTrigger = btn;
      setViewToToday();
      buildCalendar();
    }
    if (popover === qsPopover) {
      activeQsTrigger = btn;
      showQsMainPage();
    }
  }
}

function setPowerProfile(id) {
  if (!POWER_PROFILES[id]) return;
  powerProfile = id;
  const cfg = POWER_PROFILES[id];
  if (powerModeSub) powerModeSub.textContent = cfg.name;
  if (powerModeIcon) powerModeIcon.src = cfg.icon;

  document.querySelectorAll(".qs-profile").forEach((btn) => {
    const selected = btn.dataset.profile === id;
    btn.classList.toggle("selected", selected);
    btn.setAttribute("aria-selected", selected ? "true" : "false");
  });

  if (powerModeToggle) {
    powerModeToggle.classList.add("active");
    powerModeToggle.setAttribute("aria-pressed", "true");
  }
}

function setDarkStyle(enabled) {
  document.documentElement.setAttribute("data-theme", enabled ? "dark" : "light");
  const darkToggle = document.getElementById("dark-style-toggle");
  if (darkToggle) {
    darkToggle.classList.toggle("active", enabled);
    darkToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
  }
}

function setNightLight(enabled) {
  document.documentElement.setAttribute("data-night-light", enabled ? "on" : "off");
  const nightToggle = document.getElementById("night-light-toggle");
  if (nightToggle) {
    nightToggle.classList.toggle("active", enabled);
    nightToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
  }
  if (nightLightOverlay) {
    nightLightOverlay.setAttribute("aria-hidden", enabled ? "false" : "true");
  }
}

function updateVolumeFill() {
  if (!volumeSlider) return;
  const pct = Number(volumeSlider.value);
  const track =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "rgba(18, 51, 84, 0.12)"
      : "rgba(189, 230, 251, 0.15)";
  volumeSlider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, ${track} ${pct}%)`;
}

function updateBrightnessFill() {
  if (!brightnessSlider) return;
  const pct = Number(brightnessSlider.value);
  const track =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "rgba(18, 51, 84, 0.12)"
      : "rgba(189, 230, 251, 0.15)";
  brightnessSlider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, ${track} ${pct}%)`;
}

/* ---------- Launch / windows ---------- */

function bringToFront(win) {
  zIndexCounter += 1;
  win.style.zIndex = String(zIndexCounter);
}

function updateTaskIndicators() {
  const filesOpen = !filesWindow.hidden && !filesWindow.classList.contains("minimized");
  const termOpen = !termWindow.hidden && !termWindow.classList.contains("minimized");
  const filesRunning = !filesWindow.hidden;
  const termRunning = !termWindow.hidden;

  const mark = (el, running, active) => {
    if (!el) return;
    el.classList.toggle("running", running);
    el.classList.toggle("active", active);
  };

  const filesActive = filesOpen && Number(filesWindow.style.zIndex || 0) >= Number(termWindow.style.zIndex || 0);
  const termActive = termOpen && Number(termWindow.style.zIndex || 0) > Number(filesWindow.style.zIndex || 0);

  mark(panelFiles, filesRunning, filesActive);
  mark(panelTerminal, termRunning, termActive);
  mark(document.getElementById("dash-files"), filesRunning, filesActive);
  mark(document.getElementById("dash-terminal"), termRunning, termActive);
  mark(document.getElementById("touch-files"), filesRunning, filesActive);
  mark(document.getElementById("touch-terminal"), termRunning, termActive);

  // Windows List-like: label reflects the open window title when running
  const filesLabel = panelFiles?.querySelector(".panel-app-label");
  if (filesLabel) {
    filesLabel.textContent = filesRunning
      ? (filesPathLabel?.textContent || "Home")
      : "Files";
  }
  const termLabel = panelTerminal?.querySelector(".panel-app-label");
  if (termLabel) {
    termLabel.textContent = termRunning ? "user@zorin: ~" : "Terminal";
  }
}

function launchApp(id) {
  closeAll();
  if (id === "files") {
    openFiles("home");
    return;
  }
  if (id === "terminal") {
    openTerminal();
    return;
  }
  // Flash running on matching launchers
  document.querySelectorAll(`[data-app="${id}"]`).forEach((el) => {
    el.classList.add("running");
    setTimeout(() => {
      if (id !== "files" && id !== "terminal") el.classList.remove("running");
    }, 600);
  });
}

function handleLauncherClick(id) {
  if (id === "files") {
    if (filesWindow.hidden) openFiles("home");
    else if (filesWindow.classList.contains("minimized")) {
      filesWindow.classList.remove("minimized");
      bringToFront(filesWindow);
      updateTaskIndicators();
    } else if (filesWindow.style.zIndex === String(zIndexCounter)) {
      filesWindow.classList.add("minimized");
      updateTaskIndicators();
    } else {
      filesWindow.classList.remove("minimized");
      bringToFront(filesWindow);
      updateTaskIndicators();
    }
    return;
  }
  if (id === "terminal") {
    if (termWindow.hidden) openTerminal();
    else if (termWindow.classList.contains("minimized")) {
      termWindow.classList.remove("minimized");
      bringToFront(termWindow);
      updateTaskIndicators();
    } else if (termWindow.style.zIndex === String(zIndexCounter)) {
      termWindow.classList.add("minimized");
      updateTaskIndicators();
    } else {
      termWindow.classList.remove("minimized");
      bringToFront(termWindow);
      updateTaskIndicators();
    }
    return;
  }
  launchApp(id);
}

/* ---------- Files (Nautilus) ---------- */

function renderSidebar() {
  filesSidebar.innerHTML = "";
  for (const entry of SIDEBAR) {
    if (entry.section !== undefined && !entry.id) {
      const spacer = document.createElement("div");
      spacer.className = "files-side-section";
      spacer.setAttribute("aria-hidden", "true");
      spacer.textContent = entry.section.trim() || "\u00a0";
      filesSidebar.appendChild(spacer);
      continue;
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "files-side-item" + (entry.id === filesPlace ? " selected" : "");
    btn.dataset.place = entry.id;
    const imgClass = entry.symbolic ? "sym" : "";
    btn.innerHTML = `<img class="${imgClass}" src="${entry.icon}" alt="" draggable="false" /><span>${entry.label}</span>`;
    btn.addEventListener("click", () => navigateFiles(entry.id, true));
    filesSidebar.appendChild(btn);
  }
}

function renderFilesContent() {
  const place = FS[filesPlace] || FS.home;
  filesPathLabel.textContent = place.label;
  filesWindow.setAttribute("aria-label", place.label);

  let items = place.items.slice();
  if (filesFilter.trim()) {
    const q = filesFilter.trim().toLowerCase();
    items = items.filter((it) => it.name.toLowerCase().includes(q));
  }

  const header = filesContent.querySelector(".files-list-header");
  filesContent.innerHTML = "";
  if (header) filesContent.appendChild(header);

  filesContent.classList.toggle("view-icons", filesViewMode === "icons");
  filesContent.classList.toggle("view-list", filesViewMode === "list");

  for (const item of items) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "files-item";
    el.setAttribute("role", "listitem");
    el.innerHTML = `
      <img src="${item.icon}" alt="" draggable="false" />
      <span class="files-item-name">${item.name}</span>
      <span class="files-item-meta">${item.size || "—"}</span>
      <span class="files-item-meta">${item.modified || "—"}</span>
    `;
    el.addEventListener("click", () => {
      filesContent.querySelectorAll(".files-item").forEach((n) => n.classList.remove("selected"));
      el.classList.add("selected");
    });
    el.addEventListener("dblclick", () => {
      if (item.type === "folder" && item.place) {
        navigateFiles(item.place, true);
      }
    });
    filesContent.appendChild(el);
  }

  const n = items.length;
  filesStatus.textContent = n === 1 ? "1 item" : `${n} items`;

  filesBack.disabled = filesHistIndex <= 0;
  filesForward.disabled = filesHistIndex >= filesHistory.length - 1;

  filesSidebar.querySelectorAll(".files-side-item").forEach((btn) => {
    btn.classList.toggle("selected", btn.dataset.place === filesPlace);
  });
}

function navigateFiles(placeId, pushHistory) {
  if (!FS[placeId]) return;
  filesPlace = placeId;
  if (pushHistory) {
    filesHistory = filesHistory.slice(0, filesHistIndex + 1);
    filesHistory.push(placeId);
    filesHistIndex = filesHistory.length - 1;
  }
  filesFilter = "";
  if (filesSearchInput) filesSearchInput.value = "";
  renderFilesContent();
  updateTaskIndicators();
}

function openFiles(placeId = "home") {
  desktop.classList.remove("show-desktop");
  filesWindow.hidden = false;
  filesWindow.classList.remove("minimized");
  bringToFront(filesWindow);
  filesPlace = placeId;
  filesHistory = [placeId];
  filesHistIndex = 0;
  renderSidebar();
  renderFilesContent();
  updateTaskIndicators();
}

function closeFiles() {
  filesWindow.hidden = true;
  filesWindow.classList.remove("maximized", "minimized");
  updateTaskIndicators();
}

function openTerminal() {
  desktop.classList.remove("show-desktop");
  termWindow.hidden = false;
  termWindow.classList.remove("minimized");
  bringToFront(termWindow);
  updateTaskIndicators();
}

function closeTerminal() {
  termWindow.hidden = true;
  termWindow.classList.remove("maximized", "minimized");
  updateTaskIndicators();
}

/* ---------- Session dialog ---------- */

function openSessionDialog(action) {
  sessionAction = action;
  closeAll();
  const map = {
    poweroff: { title: "Power Off", message: "Do you want to power off?", confirm: "Power Off" },
    logout: { title: "Log Out", message: "Do you want to log out?", confirm: "Log Out" },
    reboot: { title: "Restart", message: "Do you want to restart?", confirm: "Restart" },
    lock: { title: "Lock", message: "Lock the screen?", confirm: "Lock" },
    suspend: { title: "Suspend", message: "Do you want to suspend?", confirm: "Suspend" },
  };
  const cfg = map[action] || map.poweroff;
  sessionTitle.textContent = cfg.title;
  sessionMessage.textContent = cfg.message;
  sessionConfirm.textContent = cfg.confirm;
  sessionOverlay.hidden = false;
}

function closeSessionDialog() {
  sessionOverlay.hidden = true;
}

/* ---------- Volume icons ---------- */

function updateVolumeIcons(value) {
  let icon = "assets/status/audio-volume-muted-symbolic.svg";
  if (value > 70) icon = "assets/status/audio-volume-high-symbolic.svg";
  else if (value > 30) icon = "assets/status/audio-volume-medium-symbolic.svg";
  else if (value > 0) icon = "assets/status/audio-volume-low-symbolic.svg";
  if (panelVolumeIcon) panelVolumeIcon.src = icon;
  if (qsVolumeIcon) qsVolumeIcon.src = icon;
  document.querySelectorAll(".top-volume-icon, .touch-volume-icon").forEach((el) => {
    el.src = icon;
  });
}

/* ---------- Drag windows ---------- */

function enableDrag(win, handle) {
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let origLeft = 0;
  let origTop = 0;

  handle.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    if (e.target.closest("button")) return;
    if (win.classList.contains("maximized")) return;
    dragging = true;
    bringToFront(win);
    updateTaskIndicators();
    startX = e.clientX;
    startY = e.clientY;
    const rect = win.getBoundingClientRect();
    origLeft = rect.left;
    origTop = rect.top;
    handle.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  handle.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    win.style.left = `${Math.max(0, origLeft + dx)}px`;
    win.style.top = `${Math.max(0, origTop + dy)}px`;
  });

  handle.addEventListener("pointerup", () => {
    dragging = false;
  });
}

/* ---------- Event wiring ---------- */

layoutChooser.querySelectorAll(".layout-opt").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setLayout(btn.dataset.layout);
  });
});
layoutChooser.addEventListener("click", (e) => e.stopPropagation());

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

menuAllApps.addEventListener("click", (e) => {
  e.stopPropagation();
  showMenuApps("all");
});

menuSearch.addEventListener("input", () => {
  const q = menuSearch.value;
  if (q.trim()) {
    if (menuHome) menuHome.hidden = true;
    if (menuAppsPane) menuAppsPane.hidden = false;
    selectedCategory = selectedCategory || "all";
    renderMenuApps(q);
  } else if (!selectedCategory) {
    showMenuHome();
  } else {
    renderMenuApps("");
  }
});

menuSearch.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (typeof startOverlay !== "undefined" && startOverlay && !startOverlay.hidden) {
      /* Keep overlay until they choose fullscreen or continue */
      return;
    }
    e.stopPropagation();
    closeMenu();
  }
});

document.getElementById("menu-lock").addEventListener("click", () => openSessionDialog("lock"));
document.getElementById("menu-switch")?.addEventListener("click", () => openSessionDialog("logout"));
document.getElementById("menu-power").addEventListener("click", () => openSessionDialog("poweroff"));

function wireClock(btn) {
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover(calendarPopover, btn);
  });
}
wireClock(clockBtn);
wireClock(topClockBtn);
wireClock(touchClockBtn);

calPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  buildCalendar();
});

calNext.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  buildCalendar();
});

function wireQs(btn) {
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePopover(qsPopover, btn);
  });
}
wireQs(qsBtn);
wireQs(topQsBtn);
wireQs(touchQsBtn);

volumeSlider.addEventListener("input", () => {
  updateVolumeIcons(Number(volumeSlider.value));
  updateVolumeFill();
});

if (brightnessSlider) {
  brightnessSlider.addEventListener("input", updateBrightnessFill);
}

qsPopover.querySelectorAll(".qs-toggle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const kind = btn.dataset.toggle;

    if (kind === "power-mode") {
      showQsPowerPage();
      return;
    }

    if (kind === "dark") {
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      setDarkStyle(!isDark);
      updateVolumeFill();
      updateBrightnessFill();
      return;
    }

    if (kind === "night") {
      const on = btn.getAttribute("aria-pressed") !== "true";
      setNightLight(on);
      return;
    }

    const pressed = btn.getAttribute("aria-pressed") === "true";
    btn.setAttribute("aria-pressed", pressed ? "false" : "true");
    btn.classList.toggle("active", !pressed);
  });
});

document.getElementById("qs-power-back")?.addEventListener("click", (e) => {
  e.stopPropagation();
  showQsMainPage();
});

document.querySelectorAll(".qs-profile").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setPowerProfile(btn.dataset.profile);
    showQsMainPage();
  });
});

document.getElementById("qs-power")?.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = powerMenu.hidden;
  if (open) {
    powerMenu.hidden = false;
    setExpanded(document.getElementById("qs-power"), true);
  } else {
    closePowerMenu();
  }
});

document.getElementById("qs-lock")?.addEventListener("click", (e) => {
  e.stopPropagation();
  openSessionDialog("lock");
});

document.getElementById("qs-settings")?.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAll();
});

document.getElementById("qs-screenshot")?.addEventListener("click", (e) => {
  e.stopPropagation();
});

powerMenu?.querySelectorAll(".power-menu-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const action = item.dataset.session;
    closePowerMenu();
    if (action === "suspend") {
      closeAll();
      return;
    }
    if (action) openSessionDialog(action);
  });
});

setDarkStyle(true);
setNightLight(false);
setPowerProfile("balanced");
updateVolumeFill();
updateBrightnessFill();

sessionCancel.addEventListener("click", closeSessionDialog);
sessionConfirm.addEventListener("click", closeSessionDialog);
sessionOverlay.addEventListener("click", (e) => {
  if (e.target === sessionOverlay) closeSessionDialog();
});

document.querySelectorAll(".desk-icon").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".desk-icon").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
  btn.addEventListener("dblclick", () => {
    openFiles(btn.dataset.place || "home");
  });
});

document.querySelectorAll(".panel-app, .dash-item[data-app], .touch-dock-btn[data-app]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    handleLauncherClick(btn.dataset.app);
  });
});

showDesktopBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  desktop.classList.toggle("show-desktop");
});

touchGridBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleTouchGrid();
});

touchSearch?.addEventListener("input", () => {
  renderIconGrid(touchApps, touchSearch.value);
});

activitiesBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  toggleGnomeOverview();
});

dashShowApps?.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  toggleGnomeOverview();
});

gnomeSearch?.addEventListener("input", () => {
  renderIconGrid(gnomeOverviewApps, gnomeSearch.value);
});

filesClose.addEventListener("click", closeFiles);
filesMin.addEventListener("click", () => {
  filesWindow.classList.add("minimized");
  updateTaskIndicators();
});
filesMax.addEventListener("click", () => {
  filesWindow.classList.toggle("maximized");
});
filesWindow.addEventListener("pointerdown", () => {
  bringToFront(filesWindow);
  updateTaskIndicators();
});

filesBack.addEventListener("click", () => {
  if (filesHistIndex <= 0) return;
  filesHistIndex -= 1;
  filesPlace = filesHistory[filesHistIndex];
  renderFilesContent();
});

filesForward.addEventListener("click", () => {
  if (filesHistIndex >= filesHistory.length - 1) return;
  filesHistIndex += 1;
  filesPlace = filesHistory[filesHistIndex];
  renderFilesContent();
});

filesViewIcons.addEventListener("click", () => {
  filesViewMode = "icons";
  filesViewIcons.classList.add("active");
  filesViewIcons.setAttribute("aria-pressed", "true");
  filesViewList.classList.remove("active");
  filesViewList.setAttribute("aria-pressed", "false");
  renderFilesContent();
});

filesViewList.addEventListener("click", () => {
  filesViewMode = "list";
  filesViewList.classList.add("active");
  filesViewList.setAttribute("aria-pressed", "true");
  filesViewIcons.classList.remove("active");
  filesViewIcons.setAttribute("aria-pressed", "false");
  renderFilesContent();
});

filesSearchBtn.addEventListener("click", () => {
  const open = filesSearchBar.hidden;
  filesSearchBar.hidden = !open;
  filesSearchBtn.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) filesSearchInput.focus();
  else {
    filesFilter = "";
    filesSearchInput.value = "";
    renderFilesContent();
  }
});

filesSearchInput.addEventListener("input", () => {
  filesFilter = filesSearchInput.value;
  renderFilesContent();
});

termClose.addEventListener("click", closeTerminal);
termMin.addEventListener("click", () => {
  termWindow.classList.add("minimized");
  updateTaskIndicators();
});
termMax.addEventListener("click", () => {
  termWindow.classList.toggle("maximized");
});
termWindow.addEventListener("pointerdown", () => {
  bringToFront(termWindow);
  updateTaskIndicators();
});

enableDrag(filesWindow, filesWindow.querySelector(".files-headerbar"));
enableDrag(termWindow, termWindow.querySelector(".term-headerbar"));

document.addEventListener("click", (e) => {
  if (
    !zorinMenu.hidden &&
    !zorinMenu.contains(e.target) &&
    e.target !== menuBtn &&
    !menuBtn.contains(e.target)
  ) {
    closeMenu();
  }
  if (
    touchGrid &&
    !touchGrid.hidden &&
    !touchGrid.contains(e.target) &&
    e.target !== touchGridBtn &&
    !(touchGridBtn && touchGridBtn.contains(e.target))
  ) {
    closeTouchGrid();
  }
  if (
    gnomeOverview &&
    !gnomeOverview.hidden &&
    !gnomeOverview.contains(e.target) &&
    e.target !== activitiesBtn &&
    !(activitiesBtn && activitiesBtn.contains(e.target)) &&
    e.target !== dashShowApps &&
    !(dashShowApps && dashShowApps.contains(e.target))
  ) {
    closeGnomeOverview();
  }

  const clockHit = clockTriggers().some((b) => b === e.target || b.contains(e.target));
  if (!calendarPopover.hidden && !calendarPopover.contains(e.target) && !clockHit) {
    calendarPopover.hidden = true;
    clockTriggers().forEach((b) => setExpanded(b, false));
    activeClockTrigger = null;
  }

  const qsPowerBtn = document.getElementById("qs-power");
  if (
    powerMenu &&
    !powerMenu.hidden &&
    !powerMenu.contains(e.target) &&
    e.target !== qsPowerBtn &&
    !(qsPowerBtn && qsPowerBtn.contains(e.target))
  ) {
    closePowerMenu();
  }

  const qsHit = qsTriggers().some((b) => b === e.target || b.contains(e.target));
  if (
    !qsPopover.hidden &&
    !qsPopover.contains(e.target) &&
    !qsHit &&
    !(powerMenu && powerMenu.contains(e.target))
  ) {
    qsPopover.hidden = true;
    closePowerMenu();
    showQsMainPage();
    qsTriggers().forEach((b) => setExpanded(b, false));
    activeQsTrigger = null;
    desktop.classList.remove("popover-open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!sessionOverlay.hidden) {
      closeSessionDialog();
      return;
    }
    if (powerMenu && !powerMenu.hidden) {
      closePowerMenu();
      return;
    }
    if (qsPagePower && !qsPagePower.hidden) {
      showQsMainPage();
      return;
    }
    closeAll();
  }
});

zorinMenu.addEventListener("click", (e) => e.stopPropagation());
calendarPopover.addEventListener("click", (e) => e.stopPropagation());
qsPopover.addEventListener("click", (e) => e.stopPropagation());
powerMenu?.addEventListener("click", (e) => e.stopPropagation());
touchGrid?.addEventListener("click", (e) => e.stopPropagation());
gnomeOverview?.addEventListener("click", (e) => e.stopPropagation());

/* Init */
renderCategories();
renderMenuPlaces();
renderMenuShortcuts();
showMenuHome();
updateVolumeIcons(Number(volumeSlider.value));
updateTaskIndicators();

let saved = "windows";
try {
  saved = localStorage.getItem(LAYOUT_STORAGE) || "windows";
} catch (_) {}
setLayout(saved);

/* ---------- Start overlay / fullscreen ---------- */

const startOverlay = document.getElementById("start-overlay");
const startFullscreenBtn = document.getElementById("start-fullscreen-btn");
const startSkipBtn = document.getElementById("start-skip-btn");

function dismissStartOverlay() {
  if (startOverlay) startOverlay.hidden = true;
}

async function enterFullscreenPreview() {
  const target = document.documentElement;
  try {
    if (target.requestFullscreen) await target.requestFullscreen();
    else if (target.webkitRequestFullscreen) await target.webkitRequestFullscreen();
    else if (target.msRequestFullscreen) await target.msRequestFullscreen();
  } catch {
    /* Browser denied or unsupported — still enter the mockup */
  }
  dismissStartOverlay();
}

if (startFullscreenBtn) {
  startFullscreenBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    enterFullscreenPreview();
  });
}

if (startSkipBtn) {
  startSkipBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dismissStartOverlay();
  });
}

if (startOverlay) {
  startOverlay.addEventListener("click", (e) => e.stopPropagation());
  startOverlay.querySelector(".start-overlay-card")?.addEventListener("click", (e) => e.stopPropagation());
}
