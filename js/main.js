/**
 * NeoMath - Master JavaScript Controller
 * Renders pages dynamically from data/ data modules.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }

  // Active link highlighters
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Tab switching for classes.html
  window.switchClassTab = function(tabName) {
    document.querySelectorAll(".subtab-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById("tab-btn-" + tabName);
    if (activeBtn) activeBtn.classList.add("active");

    const sections = ["chapters", "videos", "resources"];
    sections.forEach(s => {
      const el = document.getElementById("tab-content-" + s);
      if (el) el.style.display = (s === tabName) ? "block" : "none";
    });
  };

  // Video modal player helper
  window.openVideoPlayer = function(youtubeId, title) {
    const modal = document.getElementById("video-modal");
    const frame = document.getElementById("video-frame");
    const titleEl = document.getElementById("video-modal-title");
    if (modal && frame) {
      frame.src = "https://www.youtube.com/embed/" + youtubeId + "?autoplay=1";
      if (titleEl) titleEl.innerText = title || "Mathematics Video Lesson";
      modal.style.display = "flex";
    }
  };

  window.closeVideoPlayer = function() {
    const modal = document.getElementById("video-modal");
    const frame = document.getElementById("video-frame");
    if (modal && frame) {
      frame.src = "";
      modal.style.display = "none";
    }
  };
});
