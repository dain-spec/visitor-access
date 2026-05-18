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
      "등록된 방문이 없습니다. 왼쪽 폼에서 첫 방문을 체크인해 보세요.";
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
  document
    .getElementById("today")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderList();
