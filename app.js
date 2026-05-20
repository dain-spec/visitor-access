const STORAGE_KEY = "visitor-access-demo";

function loadVisits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveVisits(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "numeric",
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isToday(iso) {
  const d = new Date(iso);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}

function renderList() {
  const ul = document.getElementById("visit-list");
  const countEl = document.getElementById("today-count");
  const items = loadVisits();
  const todayItems = items.filter((v) => isToday(v.at));
  ul.innerHTML = "";

  if (countEl) {
    countEl.textContent = `${todayItems.length}건`;
  }

  if (!items.length) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent =
      "등록된 방문이 없습니다. 체크인 화면에서 첫 방문을 등록해 보세요.";
    ul.appendChild(li);
    return;
  }

  items
    .slice()
    .reverse()
    .forEach((v) => {
      const li = document.createElement("li");
      const meta = [
        v.company ? escapeHtml(v.company) : null,
        `${escapeHtml(v.host)} 담당`,
        v.purpose ? escapeHtml(v.purpose) : null,
      ]
        .filter(Boolean)
        .join('<span class="dot">·</span>');

      li.innerHTML = `
        <span class="visit-name">${escapeHtml(v.visitor)}</span>
        <span class="status">${isToday(v.at) ? "오늘" : "이전"}</span>
        <span class="visit-meta">
          ${meta}
          <span class="dot">·</span>
          <span class="mono">${formatTime(v.at)}</span>
        </span>
      `;
      ul.appendChild(li);
    });
}

document.getElementById("checkin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const visitor = String(fd.get("visitor") || "").trim();
  const host = String(fd.get("host") || "").trim();
  if (!visitor || !host) return;

  const entry = {
    visitor,
    company: String(fd.get("company") || "").trim(),
    host,
    purpose: String(fd.get("purpose") || "").trim(),
    at: new Date().toISOString(),
  };
  const next = loadVisits();
  next.push(entry);
  saveVisits(next);
  e.target.reset();
  renderList();
  goToPrototypeStep("today");
});

const PROTOTYPE_STEPS = ["checkin", "today", "steps"];

function goToPrototypeStep(stepId) {
  PROTOTYPE_STEPS.forEach((id) => {
    const screen = document.querySelector(`[data-screen="${id}"]`);
    screen?.classList.toggle("screen-active", id === stepId);
  });

  document.querySelectorAll("[data-prototype-step]").forEach((el) => {
    const active = el.dataset.prototypeStep === stepId;
    el.classList.toggle("active", active);
    if (el instanceof HTMLButtonElement && el.classList.contains("prototype-tab")) {
      el.setAttribute("aria-current", active ? "step" : "false");
    }
  });

  const screen = document.getElementById(stepId);
  const scrollParent = document.querySelector(".app-main");
  if (screen && scrollParent) {
    scrollParent.scrollTop = 0;
  }
}

document.querySelectorAll("[data-prototype-step]").forEach((btn) => {
  btn.addEventListener("click", () => {
    goToPrototypeStep(btn.dataset.prototypeStep);
  });
});

document.querySelector(".app-bar-action")?.addEventListener("click", (e) => {
  e.preventDefault();
  goToPrototypeStep("checkin");
});

renderList();
