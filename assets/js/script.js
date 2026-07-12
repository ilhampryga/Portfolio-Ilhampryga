const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const navLinks = [...document.querySelectorAll(".nav-menu a")];
const filterButtons = document.querySelectorAll(".filter-btn");
const tiltCards = document.querySelectorAll(".tilt-card");
const profileCards = document.querySelectorAll("[data-profile-card]");
const magneticButtons = document.querySelectorAll(".magnetic");
const logoLoops = document.querySelectorAll("[data-logo-loop]");
const splitTextElements = document.querySelectorAll("[data-split-text]");
const textTypeElements = document.querySelectorAll("[data-text-type]");
const blurTextElements = document.querySelectorAll("[data-blur-text]");
const rotatingTextElements = document.querySelectorAll("[data-rotating-text]");
const contactHighlights = document.querySelectorAll(".contact-highlight");
const certificateFilterButtons = document.querySelectorAll("[data-certificate-filter]");
const experienceOverview = document.getElementById("experienceOverview");
const experienceGrid = document.getElementById("experienceGrid");
const certificationsSection = document.getElementById("certifications");
const certificatesGrid = document.getElementById("certificatesGrid");
const certificateGalleryToggle = document.getElementById("certificateGalleryToggle");
const certificateGalleryToggleLabel = certificateGalleryToggle?.querySelector(".certificate-gallery-toggle-label");
const certificateGalleryCount = certificateGalleryToggle?.querySelector(".certificate-gallery-count");
const certificateModal = document.getElementById("certificateModal");
const certificateModalImage = document.getElementById("certificateModalImage");
const certificateModalTitle = document.getElementById("certificateModalTitle");
const certificateModalSource = document.getElementById("certificateModalSource");
const certificateModalCloseButtons = document.querySelectorAll("[data-certificate-modal-close]");
const projectsGrid = document.getElementById("projectsGrid");
const caseStudyModal = document.getElementById("caseStudyModal");
const caseStudyCloseButtons = document.querySelectorAll("[data-case-study-close]");
const caseStudyActions = document.getElementById("caseStudyActions");
const cursorGlow = document.querySelector(".cursor-glow");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LOGO_LOOP_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const experienceData = window.PORTFOLIO_EXPERIENCE && typeof window.PORTFOLIO_EXPERIENCE === "object"
  ? window.PORTFOLIO_EXPERIENCE
  : null;
const certificateData = Array.isArray(window.PORTFOLIO_CERTIFICATES) ? window.PORTFOLIO_CERTIFICATES : [];
const projectData = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
const getProjectCards = () => [...document.querySelectorAll(".project-card")];
const getSpotlightCards = () => [...document.querySelectorAll(".spotlight-card")];
const getBorderGlowCards = () => [...document.querySelectorAll(".border-glow-card")];
const getCertificateCards = () => [...document.querySelectorAll("[data-certificate-category]")];

document.getElementById("year").textContent = String(new Date().getFullYear());

const getStoredTheme = () => {
  try {
    return localStorage.getItem("portfolio-theme");
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    return;
  }
};

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";

  document.documentElement.setAttribute("data-theme", theme);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Aktifkan light mode" : "Aktifkan dark mode");
  }
};

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    storeTheme(nextTheme);
  });
}

const i18n = {
  id: {
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.certifications": "Sertifikasi",
    "nav.projects": "Project",
    "nav.contact": "Kontak",
    "aria.nav": "Navigasi utama",
    "aria.home": "Kembali ke beranda",
    "aria.lang": "Ganti bahasa",
    "aria.nav_toggle": "Buka menu navigasi",
    "aria.scroll_about": "Scroll ke bagian tentang",
    "aria.profile": "Profil Ilham Prayoga",
    "aria.contact_ilham": "Hubungi Ilham Prayoga",
    "aria.cert_filter": "Filter pelatihan dan sertifikasi",
    "aria.close_certificate_preview": "Tutup pratinjau sertifikat",
    "aria.close_case_study": "Tutup case study",
    "hero.eyebrow": "Software Developer &bull; Web &bull; IoT &bull; Automation",
    "hero.title": 'Analyze, Testing,<span class="gradient-text">Development</span>',
    "hero.description": 'Halo, saya <strong>Ilham Prayoga</strong>. Saya tertarik pada Data Analysis dan Software Quality Assurance, mulai dari mengolah data menjadi insight hingga melakukan pengujian untuk memastikan kualitas aplikasi.',
    "hero.cta_projects": "Lihat Project",
    "hero.cta_cv": "Download CV",
    "hero.ready": "Open to Work",
    "hero.card_role": "Junior Data Analyst & Quality Assurance",
    "hero.code_focus": '<span>const</span> focus = "Analytics &amp; Testing";',
    "hero.code_stack": '<span>const</span> stack = ["Python", "Tableau", "Selenium"];',
    "about.eyebrow": "Tentang Saya",
    "about.p1": "Saya adalah fresh graduate Teknik Informatika. Saya memiliki minat pada bidang Data Analyst dan Software Quality Assurance, dengan pengalaman dalam pengolahan data, visualisasi, pengujian manual, API testing, dan automation testing. Selama perkuliahan, saya mengerjakan beberapa project berbasis IoT, Software Development, dan pengolahan data. Saya juga telah menyelesaikan Program Studi Independen MSIB Angkatan 7 sebagai IoT Engineer di Indobot Academy serta aktif dalam Himpunan Mahasiswa Teknik Informatika sebagai anggota Divisi IPTEK. Saat ini, saya sedang mencari kesempatan untuk memulai karier sebagai Junior Data Analyst atau Software Quality Assurance.",
    "about.p2": "Fokus saya adalah membuat antarmuka yang mudah digunakan, struktur kode yang jelas, dan pengalaman pengguna yang sederhana namun tetap interaktif.",
    "about.card_role": "Junior Data Analyst & SQA",
    "about.profile_status": "Available",
    "about.profile_contact": "Contact",
    "about.stat_projects_title": "5+ Project",
    "about.stat_projects_line1": "Telah",
    "about.stat_projects_line2": "Diselesaikan",
    "about.stat_certs_title": "5+ Sertifikat",
    "about.stat_certs_line1": "Pelatihan &",
    "about.stat_certs_line2": "Sertifikasi",
    "about.stat_msib_title": "Alumni MSIB",
    "about.stat_msib_line1": "Angkatan 7",
    "experience.eyebrow": "Pengalaman",
    "experience.heading": "Pendidikan dan Pengalaman",
    "certifications.eyebrow": "Pelatihan & Sertifikasi",
    "certifications.heading": "Daftar Sertifikat",
    "certifications.description": "Ruang untuk pelatihan dan sertifikasi di bidang Data Analytics, Software Quality Assurance, serta pengembangan profesional.",
    "certifications.filter_all": "Semua",
    "certifications.filter_data": "Data Analytics",
    "certifications.filter_database": "Database",
    "certifications.filter_training": "Pelatihan",
    "certifications.swipe_hint": "Geser untuk melihat sertifikat unggulan lainnya →",
    "projects.eyebrow": "Project",
    "projects.heading": "Beberapa project yang relevan dengan fokus saya.",
    "projects.filter_all": "Semua",
    "projects.filter_web": "Web",
    "projects.filter_automation": "Automation",
    "projects.filter_data": "Data Analyst",
    "projects.coming_soon": "Coming Soon Project...",
    "project1.desc": "Sistem irigasi tetes berbasis IoT untuk tanaman cabai menggunakan perhitungan ETc Hargreaves-Samani dan Fuzzy Logic.",
    "project2.desc": "Workflow otomatis untuk mencatat pemasukan dan pengeluaran melalui Telegram, kemudian menyimpan data ke Google Sheets.",
    "project3.desc": "Website blog ringan dan responsif dengan struktur konten rapi, SEO-friendly, serta sistem komentar yang mudah dikelola.",
    "project4.desc": "Halaman promosi responsif untuk bisnis lokal dengan tampilan modern, CTA yang jelas, dan struktur informasi yang mudah dipindai.",
    "project5.title": "Workflow Notifikasi Otomatis",
    "project5.desc": "Automasi pengiriman notifikasi dari data formulir dan API eksternal untuk mempercepat proses follow-up dan pelaporan.",
    "data_project.title": "Data Analytics Dashboard",
    "data_project.desc": "Project analisis data end-to-end yang mengubah data mentah menjadi insight dan visualisasi interaktif melalui dashboard Tableau.",
    "case_study.eyebrow": "Project Data Analyst",
    "case_study.description": "Studi kasus ini mendokumentasikan proses analisis mulai dari memahami kebutuhan, membersihkan data, melakukan eksplorasi, hingga menyusun insight pada dashboard Tableau.",
    "case_study.details": "Notebook digunakan untuk proses data preparation dan exploratory data analysis, sedangkan dashboard menyajikan hasil akhir agar mudah dipahami dan digunakan dalam pengambilan keputusan.",
    "contact.eyebrow": "Kontak",
    "contact.heading": 'Mari terhubung untuk <span class="contact-highlight contact-highlight--first">project, kolaborasi,</span> <span class="contact-highlight contact-highlight--second">atau peluang kerja.</span>',
    "contact.description": "Silakan hubungi saya melalui email, WhatsApp, LinkedIn, atau GitHub.",
    "footer.back_to_top": "Kembali ke atas"
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "aria.nav": "Main navigation",
    "aria.home": "Back to home",
    "aria.lang": "Change language",
    "aria.nav_toggle": "Open navigation menu",
    "aria.scroll_about": "Scroll to about section",
    "aria.profile": "Ilham Prayoga profile",
    "aria.contact_ilham": "Contact Ilham Prayoga",
    "aria.cert_filter": "Training and certification filter",
    "aria.close_certificate_preview": "Close certificate preview",
    "aria.close_case_study": "Close case study",
    "hero.eyebrow": "Software Developer &bull; Web &bull; IoT &bull; Automation",
    "hero.title": 'Analyze, Testing,<span class="gradient-text">Development</span>',
    "hero.description": 'Hi, I\'m <strong>Ilham Prayoga</strong>. I am interested in Data Analysis and Software Quality Assurance, from turning data into insights to testing applications to ensure their quality.',
    "hero.cta_projects": "View Projects",
    "hero.cta_cv": "Download CV",
    "hero.ready": "Open to Work",
    "hero.card_role": "Junior Data Analyst & Quality Assurance",
    "hero.code_focus": '<span>const</span> focus = "Analytics &amp; Testing";',
    "hero.code_stack": '<span>const</span> stack = ["Python", "Tableau", "Selenium"];',
    "about.eyebrow": "About Me",
    "about.p1": "I am a fresh graduate in Informatics Engineering. I am interested in Data Analysis and Software Quality Assurance, with experience in data processing, visualization, manual testing, API testing, and automation testing. During college, I worked on several projects in IoT, software development, and data processing. I also completed the MSIB Batch 7 Independent Study Program as an IoT Engineer at Indobot Academy and was active in the Informatics Engineering Student Association as a member of the Science and Technology Division. I am currently looking for an opportunity to start my career as a Junior Data Analyst or Software Quality Assurance professional.",
    "about.p2": "My focus is on creating user-friendly interfaces, clean code structure, and a simple yet interactive user experience.",
    "about.card_role": "Junior Data Analyst & SQA",
    "about.profile_status": "Available",
    "about.profile_contact": "Contact",
    "about.stat_projects_title": "5+ Projects",
    "about.stat_projects_line1": "Completed",
    "about.stat_projects_line2": "",
    "about.stat_certs_title": "5+ Certificates",
    "about.stat_certs_line1": "Training &",
    "about.stat_certs_line2": "Certifications",
    "about.stat_msib_title": "MSIB Alumni",
    "about.stat_msib_line1": "Batch 7",
    "experience.eyebrow": "Experience",
    "experience.heading": "Education and Experience",
    "certifications.eyebrow": "Training & Certifications",
    "certifications.heading": "Certificate List",
    "certifications.description": "A dedicated space for training and certifications in Data Analytics, Software Quality Assurance, and professional development.",
    "certifications.filter_all": "All",
    "certifications.filter_data": "Data Analytics",
    "certifications.filter_database": "Database",
    "certifications.filter_training": "Training",
    "certifications.swipe_hint": "Swipe to see more featured certificates →",
    "projects.eyebrow": "Projects",
    "projects.heading": "Some projects that are relevant to my focus.",
    "projects.filter_all": "All",
    "projects.filter_web": "Web",
    "projects.filter_automation": "Automation",
    "projects.filter_data": "Data Analyst",
    "projects.coming_soon": "Coming Soon Project...",
    "project1.desc": "An IoT-based drip irrigation system for chili plants using ETc Hargreaves-Samani calculation and Fuzzy Logic.",
    "project2.desc": "Automated workflow for tracking income and expenses via Telegram, then saving the data to Google Sheets.",
    "project3.desc": "A lightweight and responsive blog website with clean content structure, SEO-friendly, and an easy-to-manage comment system.",
    "project4.desc": "A responsive promotional page for local businesses with a modern look, clear CTA, and easily scannable information structure.",
    "project5.title": "Automated Notification Workflow",
    "project5.desc": "Automated notification delivery from form data and external APIs to speed up follow-up and reporting processes.",
    "data_project.title": "Data Analytics Dashboard",
    "data_project.desc": "An end-to-end data analytics project that transforms raw data into insights and interactive visualizations through a Tableau dashboard.",
    "case_study.eyebrow": "Data Analyst Project",
    "case_study.description": "This case study documents the analysis process, from understanding the requirements and cleaning the data to exploration and presenting insights in a Tableau dashboard.",
    "case_study.details": "The notebook is used for data preparation and exploratory data analysis, while the dashboard presents the final results for clear communication and decision-making.",
    "contact.eyebrow": "Contact",
    "contact.heading": 'Let\'s connect for <span class="contact-highlight contact-highlight--first">projects, collaborations,</span> <span class="contact-highlight contact-highlight--second">or job opportunities.</span>',
    "contact.description": "Feel free to contact me via email, WhatsApp, LinkedIn, or GitHub.",
    "footer.back_to_top": "Back to top"
  }
};

const langToggle = document.getElementById("langToggle");
const langIconId = document.querySelector(".lang-icon-id");
const langIconEn = document.querySelector(".lang-icon-en");
const langText = document.querySelector(".lang-text");

const getStoredLang = () => {
  try {
    return localStorage.getItem("portfolio-lang");
  } catch {
    return null;
  }
};

const storeLang = (lang) => {
  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch {
    return;
  }
};

const getCurrentLang = () => (document.documentElement.lang === "en" ? "en" : "id");
const getLocalizedValue = (value, lang = getCurrentLang()) => {
  if (value && typeof value === "object") {
    return value[lang] ?? value.id ?? value.en ?? "";
  }

  return value ?? "";
};

const escapeHtml = (value) => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const renderCertificateCard = (item, index, lang) => {
  const featuredAttribute = item.featured ? ` data-certificate-featured="${escapeHtml(item.featured)}"` : "";
  const delayClass = item.delayClass ? ` ${escapeHtml(item.delayClass)}` : "";
  const imageAlt = getLocalizedValue(item.imageAlt, lang) || getLocalizedValue(item.title, lang);

  return `
    <article class="certificate-card spotlight-card reveal${delayClass}" data-certificate-category="${escapeHtml(item.category)}"${featuredAttribute}>
      <div class="certificate-image">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(imageAlt)}" loading="lazy" />
      </div>
      <div class="certificate-body">
        <div class="certificate-content">
          <p class="certificate-type">${escapeHtml(getLocalizedValue(item.type, lang))}</p>
          <h3 id="certificate-card-title-${index + 1}">${escapeHtml(getLocalizedValue(item.title, lang))}</h3>
        </div>
        <div class="certificate-footer">
          <img class="certificate-institution-logo" src="${escapeHtml(item.logo)}" alt="" loading="lazy" />
          <small>${lang === "en" ? "Source" : "Sumber"}: ${escapeHtml(getLocalizedValue(item.source, lang))} • ${escapeHtml(item.year)}</small>
        </div>
      </div>
    </article>
  `;
};

const renderExperience = (lang = getCurrentLang()) => {
  if (!experienceOverview || !experienceGrid || !experienceData) return;

  const statsMarkup = Array.isArray(experienceData.overview?.stats)
    ? experienceData.overview.stats.map((stat) => `
      <div class="experience-stat">
        <strong>${escapeHtml(stat.value)}</strong>
        <span>${escapeHtml(getLocalizedValue(stat.label, lang))}</span>
      </div>
    `).join("")
    : "";

  const education = experienceData.overview?.education || {};

  experienceOverview.innerHTML = `
    <div class="experience-intro reveal delay-1">
      <p>${escapeHtml(getLocalizedValue(experienceData.overview?.intro, lang))}</p>
      <div class="experience-stats">
        ${statsMarkup}
      </div>
    </div>
    <div class="experience-education reveal delay-2">
      <p class="experience-card-kicker">${escapeHtml(getLocalizedValue(education.eyebrow, lang))}</p>
      <div class="experience-education-row">
        <div class="experience-education-main">
          <h3>${escapeHtml(getLocalizedValue(education.institution, lang))}</h3>
          <p>${escapeHtml(getLocalizedValue(education.program, lang))} ${escapeHtml(getLocalizedValue(education.degree, lang))}</p>
        </div>
        <div class="experience-education-side">
          <strong>${escapeHtml(getLocalizedValue(education.period, lang))}</strong>
        </div>
      </div>
      <p class="experience-education-summary">${escapeHtml(getLocalizedValue(education.summary, lang))}</p>
    </div>
  `;

  experienceGrid.innerHTML = Array.isArray(experienceData.items)
    ? experienceData.items.map((item) => `
      <article class="experience-item reveal ${escapeHtml(item.delayClass || "")}" data-accent="${escapeHtml(item.accent || "primary")}">
        <div class="experience-item-marker" aria-hidden="true"></div>
        <div class="experience-item-body">
          <p class="experience-card-kicker">${escapeHtml(getLocalizedValue(item.label, lang))}</p>
          <div class="experience-item-heading">
            <h3>${escapeHtml(getLocalizedValue(item.title, lang))}</h3>
            <span class="experience-item-period">${escapeHtml(getLocalizedValue(item.period, lang))}</span>
          </div>
          <p class="experience-item-role">${escapeHtml(getLocalizedValue(item.role, lang))}</p>
          <p class="experience-card-description">${escapeHtml(getLocalizedValue(item.description, lang))}</p>
        </div>
      </article>
    `).join("")
    : "";
};

const renderProjectCard = (item, lang, index) => {
  if (item.kind === "coming-soon") {
    return `
      <article class="project-card project-card--coming-soon border-glow-card reveal ${escapeHtml(item.delayClass || "")}" data-category="${escapeHtml(item.category || "soon")}">
        <span class="edge-light" aria-hidden="true"></span>
        <div class="border-glow-inner">
          <p>${escapeHtml(getLocalizedValue(item.label, lang))}</p>
        </div>
      </article>
    `;
  }

  const title = getLocalizedValue(item.title, lang);
  const description = getLocalizedValue(item.description, lang);
  const imageAlt = getLocalizedValue(item.imageAlt, lang) || title;
  const tags = Array.isArray(item.tags) ? item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("") : "";
  const extraClasses = [
    "project-card",
    item.modal ? "project-card--data" : "",
    "spotlight-card",
    "reveal",
    item.delayClass || ""
  ].filter(Boolean).join(" ");
  const linksMarkup = Array.isArray(item.links)
    ? item.links.map((link) => {
      const url = typeof link.url === "string" && link.url.trim() ? link.url.trim() : "#";
      const hasUrl = /^https?:\/\//i.test(url);
      const className = link.className ? ` class="${escapeHtml(link.className)}"` : "";
      const rel = hasUrl ? ' rel="noopener"' : "";
      const ariaDisabled = hasUrl ? "" : ' aria-disabled="true"';

      return `<a${className} href="${escapeHtml(url)}" target="_blank"${rel}${ariaDisabled}>${escapeHtml(getLocalizedValue(link.label, lang))}</a>`;
    }).join("")
    : "";
  const caseStudyButtonMarkup = item.modal
    ? `<button class="project-link-button" type="button" data-case-study-open data-project-index="${escapeHtml(index)}">${escapeHtml(getLocalizedValue(item.modal.buttonLabel, lang) || "Case Study")}</button>`
    : "";

  return `
    <article class="${extraClasses}" data-category="${escapeHtml(item.category)}">
      <div class="project-image">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(imageAlt)}" loading="lazy">
      </div>
      <div class="project-content">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <div class="project-tags">
          ${tags}
        </div>
        <div class="project-links">
          ${linksMarkup}
          ${caseStudyButtonMarkup}
        </div>
      </div>
    </article>
  `;
};

const renderCertificates = (lang = getCurrentLang()) => {
  if (!certificatesGrid) return;

  certificatesGrid.innerHTML = certificateData.map((item, index) => renderCertificateCard(item, index, lang)).join("");
};

const renderProjects = (lang = getCurrentLang()) => {
  if (!projectsGrid) return;

  const topProjects = projectData.slice(0, 3);
  const bottomProjects = projectData.slice(3);

  projectsGrid.innerHTML = `
    ${topProjects.map((item, index) => renderProjectCard(item, lang, index)).join("")}
    <div class="projects-bottom-row">
      ${bottomProjects.map((item, index) => renderProjectCard(item, lang, index + topProjects.length)).join("")}
    </div>
  `;
};

const renderDynamicContent = (lang = getCurrentLang()) => {
  renderExperience(lang);
  renderCertificates(lang);
  renderProjects(lang);
};

const applyLang = (lang) => {
  const dict = i18n[lang];

  if (!dict) return;

  renderDynamicContent(lang);
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = dict[key];

    if (value === undefined) return;

    if (element.getAttribute("data-i18n-html") === "true") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    const value = dict[key];

    if (value !== undefined) {
      element.setAttribute("aria-label", value);
    }
  });

  if (langToggle) {
    if (lang === "id") {
      langIconId.style.display = "block";
      langIconEn.style.display = "none";
      langText.textContent = "ID";
    } else {
      langIconId.style.display = "none";
      langIconEn.style.display = "block";
      langText.textContent = "EN";
    }
    
    document.documentElement.setAttribute('lang', lang);
  }

  const heroTitle = document.querySelector(".hero-title[data-split-text]");

  if (heroTitle) {
    heroTitle.dataset.splitReady = "false";
    heroTitle.classList.remove("is-visible");

    if (typeof initSplitText === "function") {
      initSplitText(heroTitle);
    }
  }

  const blurHeadings = document.querySelectorAll(".blur-text[data-i18n]");

  blurHeadings.forEach((heading) => {
    heading.classList.remove("is-visible");

    if (typeof initBlurText === "function") {
      initBlurText(heading);
    }
  });

  const contactHeading = document.querySelector("#contact h2[data-i18n]");
  const currentContactHighlights = document.querySelectorAll(".contact-highlight");

  if (contactHeading && currentContactHighlights.length) {
    currentContactHighlights.forEach((highlight) => highlight.classList.remove("is-visible"));
    requestAnimationFrame(() => {
      currentContactHighlights.forEach((highlight) => highlight.classList.add("is-visible"));
    });
  }

  if (certificateGalleryToggle && certificateGalleryToggleLabel) {
    const isExpanded = certificateGalleryToggle.getAttribute("aria-expanded") === "true";
    const labelAttribute = isExpanded
      ? (lang === "en" ? "data-collapse-en" : "data-collapse-id")
      : (lang === "en" ? "data-label-en" : "data-label-id");

    certificateGalleryToggleLabel.textContent = certificateGalleryToggle.getAttribute(labelAttribute) || "";
  }

  initializeDynamicContent();
};

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};

renderDynamicContent(getStoredLang() || "id");

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14
  }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

if (contactHighlights.length) {
  const contactHighlightObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll(".contact-highlight").forEach((highlight) => highlight.classList.add("is-visible"));
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.42
    }
  );

  contactHighlightObserver.observe(contactHighlights[0].closest("#contact") || contactHighlights[0]);
}

const applyProjectFilter = (filter) => {
  getProjectCards().forEach((card) => {
    const category = card.dataset.category;
    const shouldShow = filter === "all" || category === filter;
    card.classList.toggle("hide", !shouldShow);
  });
};

const applyCertificateFilter = (filter) => {
  getCertificateCards().forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.certificateCategory === filter;
    card.classList.toggle("hide", !shouldShow);

    if (shouldShow) {
      card.classList.remove("filter-enter");
      requestAnimationFrame(() => {
        card.classList.add("filter-enter");
        card.addEventListener("animationend", () => card.classList.remove("filter-enter"), { once: true });
      });
    }
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    applyProjectFilter(filter);
  });
});

certificateFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.certificateFilter;

    certificateFilterButtons.forEach((currentButton) => {
      const isActive = currentButton === button;
      currentButton.classList.toggle("active", isActive);
      currentButton.setAttribute("aria-pressed", String(isActive));
    });

    applyCertificateFilter(filter);
  });
});

certificateFilterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
});

const updateCertificateGalleryToggle = (isExpanded) => {
  if (!certificateGalleryToggle || !certificateGalleryToggleLabel) return;

  const lang = document.documentElement.lang === "en" ? "en" : "id";
  const labelAttribute = isExpanded
    ? (lang === "en" ? "data-collapse-en" : "data-collapse-id")
    : (lang === "en" ? "data-label-en" : "data-label-id");

  certificateGalleryToggle.setAttribute("aria-expanded", String(isExpanded));
  certificateGalleryToggleLabel.textContent = certificateGalleryToggle.getAttribute(labelAttribute) || "";

  if (certificateGalleryCount) {
    certificateGalleryCount.textContent = String(getCertificateCards().length);
  }
};

const resetCertificateFilters = () => {
  certificateFilterButtons.forEach((button) => {
    const isActive = button.dataset.certificateFilter === "all";
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  getCertificateCards().forEach((card) => card.classList.remove("hide"));
};

const setCertificateGalleryExpanded = (isExpanded, options = {}) => {
  const { shouldScrollOnCollapse = false } = options;

  if (!certificationsSection || !certificatesGrid) return;

  certificationsSection.classList.toggle("gallery-expanded", isExpanded);
  certificatesGrid.classList.toggle("featured-mode", !isExpanded);
  certificatesGrid.classList.toggle("all-mode", isExpanded);
  resetCertificateFilters();

  getCertificateCards().forEach((card, index) => {
    const isFeatured = card.dataset.certificateFeatured !== undefined;
    card.classList.toggle("certificate-collapsed", !isExpanded && !isFeatured);

    if (isExpanded) {
      card.style.setProperty("--gallery-index", index);
      card.classList.remove("gallery-enter");
      requestAnimationFrame(() => card.classList.add("gallery-enter"));
      card.addEventListener("animationend", () => card.classList.remove("gallery-enter"), { once: true });
    }
  });

  updateCertificateGalleryToggle(isExpanded);

  if (!isExpanded && shouldScrollOnCollapse) {
    certificationsSection.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  }
};

certificateGalleryToggle?.addEventListener("click", () => {
  const isExpanded = certificateGalleryToggle.getAttribute("aria-expanded") === "true";
  setCertificateGalleryExpanded(!isExpanded, { shouldScrollOnCollapse: true });
});

updateCertificateGalleryToggle(false);

let activeCertificateTrigger = null;

const openCertificateModal = (card) => {
  if (!certificateModal || !certificateModalImage || !certificateModalTitle || !certificateModalSource) return;

  const image = card.querySelector(".certificate-image img");
  const title = card.querySelector("h3");
  const source = card.querySelector(".certificate-footer small");

  if (!image || !title || !source) return;

  activeCertificateTrigger = card;
  certificateModalImage.src = image.currentSrc || image.src;
  certificateModalImage.alt = `Sertifikat ${title.textContent.trim()}`;
  certificateModalTitle.textContent = title.textContent.trim();
  certificateModalSource.textContent = source.textContent.trim();
  certificateModal.setAttribute("aria-hidden", "false");
  certificateModal.classList.add("open");
  document.body.classList.add("certificate-modal-open");

  requestAnimationFrame(() => {
    certificateModal.querySelector(".certificate-modal-close")?.focus();
  });
};

const closeCertificateModal = () => {
  if (!certificateModal || !certificateModal.classList.contains("open")) return;

  certificateModal.classList.remove("open");
  certificateModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("certificate-modal-open");
  activeCertificateTrigger?.focus();
  activeCertificateTrigger = null;
};

const initializeCertificateCards = () => {
  const isExpanded = certificateGalleryToggle?.getAttribute("aria-expanded") === "true";

  getCertificateCards().forEach((card) => {
    const title = card.querySelector("h3");

    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-haspopup", "dialog");

    if (title?.id) {
      card.setAttribute("aria-labelledby", title.id);
    }

    card.addEventListener("click", () => openCertificateModal(card));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openCertificateModal(card);
    });
  });

  setCertificateGalleryExpanded(isExpanded);
};

certificateModalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCertificateModal);
});

const configureProjectLink = (link, url) => {
  if (!link) return;

  const hasUrl = /^https?:\/\//i.test(url);
  link.href = hasUrl ? url : "#";
  link.toggleAttribute("aria-disabled", !hasUrl);
};

let activeCaseStudyTrigger = null;

const openCaseStudyModal = (projectIndex, triggerButton) => {
  const caseStudyImage = caseStudyModal?.querySelector(".case-study-media img");
  const caseStudyTitle = caseStudyModal?.querySelector("#caseStudyTitle");
  const caseStudyEyebrow = caseStudyModal?.querySelector(".case-study-eyebrow");
  const caseStudyDescription = caseStudyModal?.querySelector('[data-case-study-description]');
  const caseStudyDetails = caseStudyModal?.querySelector('[data-case-study-details]');
  const project = projectData[projectIndex];
  const modal = project?.modal;

  if (!caseStudyModal || !project || !modal) return;

  activeCaseStudyTrigger = triggerButton;

  if (caseStudyImage) {
    caseStudyImage.src = modal.image || project.image;
    caseStudyImage.alt = getLocalizedValue(project.imageAlt);
  }

  if (caseStudyTitle) {
    caseStudyTitle.textContent = getLocalizedValue(modal.title) || getLocalizedValue(project.title);
  }

  if (caseStudyEyebrow && modal.eyebrow) {
    caseStudyEyebrow.textContent = getLocalizedValue(modal.eyebrow);
  }

  if (caseStudyDescription && modal.description) {
    caseStudyDescription.textContent = getLocalizedValue(modal.description);
  }

  if (caseStudyDetails && modal.details) {
    caseStudyDetails.textContent = getLocalizedValue(modal.details);
  }

  if (caseStudyActions) {
    const actions = Array.isArray(modal.actions) ? modal.actions : [];
    caseStudyActions.innerHTML = actions.map((action) => {
      const url = typeof action.url === "string" && action.url.trim() ? action.url.trim() : "#";
      const hasUrl = /^https?:\/\//i.test(url);
      const variantClass = action.variant === "secondary" ? "btn btn-secondary" : "btn btn-primary";
      const rel = hasUrl ? ' rel="noopener"' : "";
      const ariaDisabled = hasUrl ? "" : ' aria-disabled="true"';

      return `<a class="${variantClass}" href="${escapeHtml(url)}" target="_blank"${rel}${ariaDisabled}>${escapeHtml(getLocalizedValue(action.label))}</a>`;
    }).join("");
  }

  caseStudyModal.setAttribute("aria-hidden", "false");
  caseStudyModal.classList.add("open");
  document.body.classList.add("case-study-modal-open");

  requestAnimationFrame(() => {
    caseStudyModal.querySelector(".case-study-close")?.focus();
  });
};

const closeCaseStudyModal = () => {
  if (!caseStudyModal || !caseStudyModal.classList.contains("open")) return;

  caseStudyModal.classList.remove("open");
  caseStudyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("case-study-modal-open");
  activeCaseStudyTrigger?.focus();
  activeCaseStudyTrigger = null;
};

const initializeProjectCards = () => {
  const activeProjectFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  const caseStudyOpenButtons = document.querySelectorAll("[data-case-study-open]");

  caseStudyOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectIndex = Number.parseInt(button.getAttribute("data-project-index") || "", 10);
      if (!Number.isFinite(projectIndex)) return;
      openCaseStudyModal(projectIndex, button);
    });
  });

  applyProjectFilter(activeProjectFilter);
};

caseStudyCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCaseStudyModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCertificateModal();
    closeCaseStudyModal();
  }
});

const initSpotlightCards = () => {
  getSpotlightCards().forEach((card) => {
    if (card.dataset.spotlightBound === "true") return;

    card.dataset.spotlightBound = "true";
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
};

const getCardCenter = (element) => {
  const { width, height } = element.getBoundingClientRect();
  return [width / 2, height / 2];
};

const getEdgeProximity = (element, x, y) => {
  const [centerX, centerY] = getCardCenter(element);
  const dx = x - centerX;
  const dy = y - centerY;
  const kx = dx === 0 ? Infinity : centerX / Math.abs(dx);
  const ky = dy === 0 ? Infinity : centerY / Math.abs(dy);

  return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
};

const getCursorAngle = (element, x, y) => {
  const [centerX, centerY] = getCardCenter(element);
  const dx = x - centerX;
  const dy = y - centerY;

  if (dx === 0 && dy === 0) return 0;

  const degrees = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
  return degrees < 0 ? degrees + 360 : degrees;
};

const initBorderGlowCards = () => {
  getBorderGlowCards().forEach((card) => {
    if (card.dataset.borderGlowBound === "true") return;

    card.dataset.borderGlowBound = "true";
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
      card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
    });
  });
};

const initializeDynamicContent = () => {
  initializeCertificateCards();
  initializeProjectCards();
  initSpotlightCards();
  initBorderGlowCards();
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
};

initializeDynamicContent();

const readNumber = (value, fallback) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

const clampValue = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const roundValue = (value, precision = 3) => Number.parseFloat(value.toFixed(precision));
const adjustValue = (value, fromMin, fromMax, toMin, toMax) => (
  roundValue(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin))
);

// 3D tilt interaction for the ReactBits-style profile card.
const initProfileCard = (wrapper) => {
  const shell = wrapper.querySelector(".profile-card-shell");
  const card = wrapper.querySelector(".profile-card-reactbits");

  if (!shell || !card || prefersReducedMotion) return;

  let frameId = null;
  let currentX = card.clientWidth / 2;
  let currentY = card.clientHeight / 2;
  let targetX = currentX;
  let targetY = currentY;
  let lastTimestamp = null;

  const setVarsFromXY = (x, y) => {
    const width = card.clientWidth || 1;
    const height = card.clientHeight || 1;
    const percentX = clampValue((100 / width) * x);
    const percentY = clampValue((100 / height) * y);
    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrapper.style.setProperty("--pointer-x", `${percentX}%`);
    wrapper.style.setProperty("--pointer-y", `${percentY}%`);
    wrapper.style.setProperty("--background-x", `${adjustValue(percentX, 0, 100, 35, 65)}%`);
    wrapper.style.setProperty("--background-y", `${adjustValue(percentY, 0, 100, 35, 65)}%`);
    wrapper.style.setProperty("--pointer-from-center", `${clampValue(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`);
    wrapper.style.setProperty("--pointer-from-top", `${percentY / 100}`);
    wrapper.style.setProperty("--pointer-from-left", `${percentX / 100}`);
    wrapper.style.setProperty("--rotate-x", `${roundValue(-(centerX / 7.5))}deg`);
    wrapper.style.setProperty("--rotate-y", `${roundValue(centerY / 7)}deg`);
  };

  const animate = (timestamp) => {
    if (lastTimestamp === null) lastTimestamp = timestamp;

    const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    const easingFactor = 1 - Math.exp(-deltaTime / 0.14);

    currentX += (targetX - currentX) * easingFactor;
    currentY += (targetY - currentY) * easingFactor;
    setVarsFromXY(currentX, currentY);

    if (Math.hypot(targetX - currentX, targetY - currentY) > 0.05) {
      frameId = requestAnimationFrame(animate);
      return;
    }

    frameId = null;
    lastTimestamp = null;
  };

  const start = () => {
    if (frameId === null) {
      frameId = requestAnimationFrame(animate);
    }
  };

  const setTargetFromEvent = (event) => {
    const rect = card.getBoundingClientRect();
    targetX = event.clientX - rect.left;
    targetY = event.clientY - rect.top;
    start();
  };

  setVarsFromXY(currentX, currentY);

  card.addEventListener("pointerenter", (event) => {
    wrapper.classList.add("active");
    shell.classList.add("entering");
    window.setTimeout(() => shell.classList.remove("entering"), 180);
    setTargetFromEvent(event);
  });

  card.addEventListener("pointermove", setTargetFromEvent);

  card.addEventListener("pointerleave", () => {
    targetX = card.clientWidth / 2;
    targetY = card.clientHeight / 2;
    start();
    window.setTimeout(() => wrapper.classList.remove("active"), 220);
  });
};

profileCards.forEach(initProfileCard);

const splitTextNode = (text, state) => {
  const fragment = document.createDocumentFragment();
  const parts = text.replace(/\s+/g, " ").split(/(\s+)/);

  parts.forEach((part) => {
    if (!part) return;

    if (/^\s+$/.test(part)) {
      fragment.appendChild(document.createTextNode(part));
      return;
    }

    const word = document.createElement("span");
    word.className = "split-word";
    word.setAttribute("aria-hidden", "true");

    [...part].forEach((char) => {
      const charElement = document.createElement("span");
      charElement.className = "split-char";
      charElement.textContent = char;
      charElement.style.setProperty("--split-index", state.index);
      state.index += 1;
      word.appendChild(charElement);
    });

    fragment.appendChild(word);
  });

  return fragment;
};

const splitElementChildren = (element, state) => {
  [...element.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.replaceWith(splitTextNode(node.textContent, state));
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      splitElementChildren(node, state);
    }
  });
};

const initSplitText = (element) => {
  if (element.dataset.splitReady === "true") return;

  const originalText = element.textContent.replace(/\s+/g, " ").trim();
  const delay = readNumber(element.dataset.splitDelay, 50);
  const duration = readNumber(element.dataset.splitDuration, 1250);
  const threshold = readNumber(element.dataset.splitThreshold, 0.1);
  const rootMargin = element.dataset.splitRootMargin || "-100px";

  element.setAttribute("aria-label", originalText);
  element.style.setProperty("--split-delay", `${delay}ms`);
  element.style.setProperty("--split-duration", `${duration}ms`);

  splitElementChildren(element, { index: 0 });
  element.dataset.splitReady = "true";

  if (prefersReducedMotion) {
    element.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        element.classList.add("is-visible");
        currentObserver.unobserve(element);
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(element);
};

const initSplitTextWhenReady = () => {
  splitTextElements.forEach(initSplitText);
};

if (document.fonts?.ready) {
  document.fonts.ready.then(initSplitTextWhenReady).catch(initSplitTextWhenReady);
} else {
  initSplitTextWhenReady();
}

const parseTextTypeItems = (value, fallback) => {
  if (!value) return [fallback].filter(Boolean);

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(String).filter(Boolean);
    if (typeof parsed === "string") return [parsed];
  } catch {
    return [value];
  }

  return [fallback].filter(Boolean);
};

const initTextType = (element) => {
  const content = element.querySelector(".text-type__content");
  const cursor = element.querySelector(".text-type__cursor");

  if (!content) return;

  const texts = parseTextTypeItems(element.dataset.text, content.textContent.trim());
  const typingSpeed = readNumber(element.dataset.typingSpeed, 50);
  const deletingSpeed = readNumber(element.dataset.deletingSpeed, 30);
  const pauseDuration = readNumber(element.dataset.pauseDuration, 2000);
  const initialDelay = readNumber(element.dataset.initialDelay, 0);
  const loop = element.dataset.loop !== "false";
  const startOnVisible = element.dataset.startOnVisible === "true";
  const cursorCharacter = element.dataset.cursorCharacter ?? "|";
  const hideCursorWhileTyping = element.dataset.hideCursorWhileTyping === "true";

  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let displayedText = "";
  let isDeleting = false;
  let isVisible = !startOnVisible;
  let timeoutId = null;

  element.setAttribute("aria-label", texts.join(", "));
  content.textContent = "";

  if (cursor) {
    cursor.textContent = cursorCharacter;
  }

  const render = () => {
    content.textContent = displayedText;

    if (cursor) {
      const currentText = texts[currentTextIndex] || "";
      const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < currentText.length || isDeleting);
      cursor.classList.toggle("text-type__cursor--hidden", shouldHideCursor);
    }
  };

  const clearTypingTimeout = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  const schedule = (callback, delay) => {
    clearTypingTimeout();
    timeoutId = setTimeout(callback, delay);
  };

  const tick = () => {
    if (!isVisible) return;

    const currentText = texts[currentTextIndex] || "";

    if (isDeleting) {
      if (displayedText === "") {
        isDeleting = false;

        if (currentTextIndex === texts.length - 1 && !loop) {
          return;
        }

        currentTextIndex = (currentTextIndex + 1) % texts.length;
        currentCharIndex = 0;
        schedule(tick, pauseDuration);
        return;
      }

      displayedText = displayedText.slice(0, -1);
      currentCharIndex = Math.max(0, currentCharIndex - 1);
      render();
      schedule(tick, deletingSpeed);
      return;
    }

    if (currentCharIndex < currentText.length) {
      displayedText += currentText[currentCharIndex];
      currentCharIndex += 1;
      render();
      schedule(tick, typingSpeed);
      return;
    }

    if (!loop && currentTextIndex === texts.length - 1) {
      return;
    }

    schedule(() => {
      isDeleting = true;
      tick();
    }, pauseDuration);
  };

  const start = () => {
    if (prefersReducedMotion) {
      displayedText = texts[0] || "";
      currentCharIndex = displayedText.length;
      render();
      return;
    }

    schedule(tick, initialDelay);
  };

  if (startOnVisible) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          isVisible = true;
          start();
          currentObserver.unobserve(element);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
  } else {
    start();
  }
};

document.querySelectorAll("[data-text-type]").forEach(initTextType);

const buildBlurTextSegments = (element, text, animateBy) => {
  const fragment = document.createDocumentFragment();
  const segments = animateBy === "letters" ? [...text] : text.split(" ");
  let index = 0;

  segments.forEach((segment, segmentIndex) => {
    if (!segment) return;

    const span = document.createElement("span");
    span.className = "blur-text__segment";
    span.textContent = animateBy === "words" && segmentIndex < segments.length - 1 ? `${segment}\u00A0` : segment;
    span.style.setProperty("--blur-text-index", index);
    span.setAttribute("aria-hidden", "true");
    index += 1;
    fragment.appendChild(span);
  });

  element.replaceChildren(fragment);
};

const initBlurText = (element) => {
  const text = element.textContent.replace(/\s+/g, " ").trim();
  const animateBy = element.dataset.animateBy || "words";
  const direction = element.dataset.direction || "top";
  const delay = readNumber(element.dataset.delay, 200);
  const stepDuration = readNumber(element.dataset.stepDuration, 350);
  const threshold = readNumber(element.dataset.threshold, 0.1);
  const rootMargin = element.dataset.rootMargin || "0px";

  element.setAttribute("aria-label", text);
  element.style.setProperty("--blur-text-delay", `${delay}ms`);
  element.style.setProperty("--blur-text-duration", `${stepDuration}ms`);
  element.style.setProperty("--blur-text-y", direction === "bottom" ? "50px" : "-50px");
  buildBlurTextSegments(element, text, animateBy);

  if (prefersReducedMotion) {
    element.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        element.classList.add("is-visible");
        currentObserver.unobserve(element);
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(element);
};

document.querySelectorAll("[data-blur-text]").forEach(initBlurText);

const splitIntoGraphemes = (text) => {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("id", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (segment) => segment.segment);
  }

  return Array.from(text);
};

const getRotatingStaggerDelay = (index, total, staggerFrom, staggerDuration) => {
  if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
  if (staggerFrom === "center") {
    const center = Math.floor(total / 2);
    return Math.abs(center - index) * staggerDuration;
  }
  if (staggerFrom === "random") {
    const randomIndex = Math.floor(Math.random() * total);
    return Math.abs(randomIndex - index) * staggerDuration;
  }

  return index * staggerDuration;
};

const buildRotatingTextWords = (text, splitBy) => {
  if (splitBy === "words") {
    return text.split(" ").map((word, index, words) => ({
      characters: [word],
      needsSpace: index !== words.length - 1
    }));
  }

  if (splitBy === "lines") {
    return text.split("\n").map((line, index, lines) => ({
      characters: [line],
      needsSpace: index !== lines.length - 1
    }));
  }

  return text.split(" ").map((word, index, words) => ({
    characters: splitIntoGraphemes(word),
    needsSpace: index !== words.length - 1
  }));
};

const renderRotatingText = (element, text, options) => {
  const words = buildRotatingTextWords(text, options.splitBy);
  const totalCharacters = words.reduce((sum, word) => sum + word.characters.length, 0);
  const screenReaderText = document.createElement("span");
  const visibleText = document.createElement("span");
  let characterIndex = 0;

  screenReaderText.className = "text-rotate-sr-only";
  screenReaderText.textContent = text;
  visibleText.className = "text-rotate-current";
  visibleText.setAttribute("aria-hidden", "true");

  words.forEach((word) => {
    const wordElement = document.createElement("span");
    wordElement.className = "text-rotate-word";

    word.characters.forEach((character) => {
      const characterElement = document.createElement("span");
      characterElement.className = "text-rotate-element";
      characterElement.textContent = character;
      characterElement.style.setProperty(
        "--text-rotate-delay",
        `${getRotatingStaggerDelay(characterIndex, totalCharacters, options.staggerFrom, options.staggerDuration)}ms`
      );
      characterIndex += 1;
      wordElement.appendChild(characterElement);
    });

    visibleText.appendChild(wordElement);

    if (word.needsSpace) {
      const space = document.createElement("span");
      space.className = "text-rotate-space";
      space.textContent = "\u00A0";
      visibleText.appendChild(space);
    }
  });

  element.replaceChildren(screenReaderText, visibleText);
  requestAnimationFrame(() => {
    const elementStyles = window.getComputedStyle(element);
    const horizontalPadding = Number.parseFloat(elementStyles.paddingLeft) + Number.parseFloat(elementStyles.paddingRight);
    element.style.setProperty("--text-rotate-width", `${Math.ceil(visibleText.scrollWidth + horizontalPadding)}px`);
    visibleText.classList.add("is-entering");
  });
};

const initRotatingText = (element) => {
  const texts = parseTextTypeItems(element.dataset.texts, element.textContent.trim());

  if (texts.length === 0) return;

  const rotationInterval = readNumber(element.dataset.rotationInterval, 2000);
  const staggerDuration = readNumber(element.dataset.staggerDuration, 0);
  const staggerFrom = element.dataset.staggerFrom || "first";
  const splitBy = element.dataset.splitBy || "characters";
  const loop = element.dataset.loop !== "false";
  const auto = element.dataset.auto !== "false";
  const exitDuration = 820;
  let currentIndex = 0;

  element.setAttribute("aria-label", texts.join(", "));

  if (prefersReducedMotion || !auto) {
    renderRotatingText(element, texts[0], { splitBy, staggerFrom: "first", staggerDuration: 0 });
    return;
  }

  const rotateNext = () => {
    const currentText = element.querySelector(".text-rotate-current");
    const nextIndex = currentIndex === texts.length - 1 ? (loop ? 0 : currentIndex) : currentIndex + 1;

    if (nextIndex === currentIndex) return;

    currentText?.classList.remove("is-entering");
    currentText?.classList.add("is-exiting");

    window.setTimeout(() => {
      currentIndex = nextIndex;
      renderRotatingText(element, texts[currentIndex], { splitBy, staggerFrom, staggerDuration });
    }, exitDuration);
  };

  renderRotatingText(element, texts[currentIndex], { splitBy, staggerFrom, staggerDuration });
  window.setInterval(rotateNext, rotationInterval);
};

rotatingTextElements.forEach(initRotatingText);

const initLogoLoop = (loop) => {
  const track = loop.querySelector(".logoloop__track");
  const sequence = loop.querySelector(".logoloop__list");

  if (!track || !sequence) return;

  const direction = loop.dataset.direction || "left";
  const speed = readNumber(loop.dataset.speed, 120);
  const logoHeight = readNumber(loop.dataset.logoHeight, 28);
  const gap = readNumber(loop.dataset.gap, 32);
  const hoverSpeed = loop.dataset.hoverSpeed === undefined ? 0 : readNumber(loop.dataset.hoverSpeed, 0);
  const isVertical = direction === "up" || direction === "down";

  loop.style.setProperty("--logoloop-logoHeight", `${logoHeight}px`);
  loop.style.setProperty("--logoloop-gap", `${gap}px`);

  let sequenceSize = 0;
  let copyCount = 1;
  let isHovered = false;
  let animationFrame = null;
  let lastTimestamp = null;
  let offset = 0;
  let velocity = 0;

  const getTargetVelocity = () => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = isVertical
      ? (direction === "up" ? 1 : -1)
      : (direction === "left" ? 1 : -1);
    const speedMultiplier = speed < 0 ? -1 : 1;

    return magnitude * directionMultiplier * speedMultiplier;
  };

  const applyTransform = () => {
    const transformValue = isVertical
      ? `translate3d(0, ${-offset}px, 0)`
      : `translate3d(${-offset}px, 0, 0)`;

    track.style.transform = transformValue;
  };

  const syncCopies = (nextCopyCount) => {
    if (nextCopyCount === copyCount) return;

    track.querySelectorAll(".logoloop__list[aria-hidden='true']").forEach((copy) => copy.remove());

    for (let index = 1; index < nextCopyCount; index += 1) {
      const clone = sequence.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    }

    copyCount = nextCopyCount;
  };

  const updateDimensions = () => {
    const sequenceRect = sequence.getBoundingClientRect();
    const measuredSize = isVertical ? sequenceRect.height : sequenceRect.width;

    if (measuredSize <= 0) return;

    sequenceSize = Math.ceil(measuredSize);
    offset = ((offset % sequenceSize) + sequenceSize) % sequenceSize;

    const parentHeight = loop.parentElement?.clientHeight ?? 0;
    const viewportSize = isVertical
      ? (loop.clientHeight || parentHeight || sequenceSize)
      : (loop.clientWidth || sequenceSize);
    const copiesNeeded = Math.ceil(viewportSize / sequenceSize) + LOGO_LOOP_CONFIG.COPY_HEADROOM;

    syncCopies(Math.max(LOGO_LOOP_CONFIG.MIN_COPIES, copiesNeeded));
    applyTransform();
  };

  const animate = (timestamp) => {
    if (lastTimestamp === null) {
      lastTimestamp = timestamp;
    }

    const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    const targetVelocity = isHovered ? hoverSpeed : getTargetVelocity();
    const easingFactor = 1 - Math.exp(-deltaTime / LOGO_LOOP_CONFIG.SMOOTH_TAU);
    velocity += (targetVelocity - velocity) * easingFactor;

    if (sequenceSize > 0) {
      offset += velocity * deltaTime;
      offset = ((offset % sequenceSize) + sequenceSize) % sequenceSize;
      applyTransform();
    }

    animationFrame = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (prefersReducedMotion || animationFrame !== null) return;
    animationFrame = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationFrame === null) return;
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lastTimestamp = null;
  };

  track.addEventListener("mouseenter", () => {
    isHovered = true;
  });

  track.addEventListener("mouseleave", () => {
    isHovered = false;
  });

  const resizeHandler = () => updateDimensions();

  if (window.ResizeObserver) {
    const observer = new ResizeObserver(resizeHandler);
    observer.observe(loop);
    observer.observe(sequence);
  } else {
    window.addEventListener("resize", resizeHandler);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(updateDimensions).catch(() => {});
  }

  window.addEventListener("load", updateDimensions, { once: true });
  updateDimensions();
  startAnimation();
};

logoLoops.forEach(initLogoLoop);

if (!prefersReducedMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    });
  });

  magneticButtons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.12}px, ${y * 0.2}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "translate(0, 0)";
    });
  });

  if (cursorGlow) {
    window.addEventListener("pointermove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
      cursorGlow.style.opacity = "1";
    });

    document.addEventListener("pointerleave", () => {
      cursorGlow.style.opacity = "0";
    });
  }
}

// i18n initialization
const currentLang = getStoredLang() || "id";
applyLang(currentLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = getStoredLang() || "id";
    const nextLang = current === "id" ? "en" : "id";
    applyLang(nextLang);
    storeLang(nextLang);
  });
}







