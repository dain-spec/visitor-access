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

function renderList() {
  const ul = document.getElementById("visit-list");
  const items = loadVisits();
  ul.innerHTML = "";
  if (!items.length) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "등록된 방문이 없습니다. 왼쪽에서 체크인해 보세요.";
    ul.appendChild(li);
    return;
  }
  items
    .slice()
    .reverse()
    .forEach((v) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${escapeHtml(v.visitor)}</strong>
        · ${escapeHtml(v.host)} 담당
        ${v.company ? `<div>${escapeHtml(v.company)}</div>` : ""}
        ${v.purpose ? `<div>${escapeHtml(v.purpose)}</div>` : ""}
        <div class="time">${formatTime(v.at)}</div>
      `;
      ul.appendChild(li);
    });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.getElementById("checkin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const entry = {
    visitor: fd.get("visitor").trim(),
    company: (fd.get("company") || "").trim(),
    host: fd.get("host").trim(),
    purpose: (fd.get("purpose") || "").trim(),
    at: new Date().toISOString(),
  };
  const next = loadVisits();
  next.push(entry);
  saveVisits(next);
  e.target.reset();
  renderList();
});

renderList();
