(function () {
  const todayNode = document.getElementById("today-visits");
  const totalNode = document.getElementById("total-visits");

  if (!todayNode || !totalNode) return;

  const now = new Date();
  const dateKey = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  const totalKey = "kp-blog-total-visits";
  const todayKey = "kp-blog-today-visits";
  const todayDateKey = "kp-blog-today-date";

  const storedDate = localStorage.getItem(todayDateKey);
  let todayVisits = Number(localStorage.getItem(todayKey) || "0");
  let totalVisits = Number(localStorage.getItem(totalKey) || "0");

  if (storedDate !== dateKey) {
    todayVisits = 0;
    localStorage.setItem(todayDateKey, dateKey);
  }

  todayVisits += 1;
  totalVisits += 1;

  localStorage.setItem(todayKey, String(todayVisits));
  localStorage.setItem(totalKey, String(totalVisits));

  todayNode.textContent = todayVisits.toLocaleString("zh-CN");
  totalNode.textContent = totalVisits.toLocaleString("zh-CN");
})();
