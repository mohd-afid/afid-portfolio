/* =============================================================================
   Project detail page — rendered entirely from projectsData.
   ============================================================================= */
(function () {
    "use strict";

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const projectId = new URLSearchParams(window.location.search).get("id");
    const project = projectId ? projectsData[projectId] : null;

    if (!project) {
        window.location.replace("index.html#projects");
        return;
    }

    function escapeHtml(str) {
        return String(str).replace(
            /[&<>"']/g,
            (c) =>
                ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                }[c])
        );
    }

    const CATEGORY_LABEL = {
        mobile: "Mobile app",
        enterprise: "Enterprise platform",
        web: "Web application",
        desktop: "Desktop application",
    };

    /* --------------------------------------------------------------- header */
    document.title = `${project.title} — Muhammed Afid`;
    document.documentElement.style.setProperty(
        "--brand",
        String(project.accent != null ? project.accent : 262)
    );

    $("#projectTitle").textContent = project.title;
    $("#projectDescription").textContent = project.description || "";
    $("#projectCategory").textContent =
        CATEGORY_LABEL[project.category] || "Project";

    const tagBox = $("#projectTags");
    tagBox.innerHTML = (project.tags || [])
        .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
        .join("");

    /* ---------------------------------------------------------- store links */
    const STORE_ICONS = {
        playStore:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18a1.5 1.5 0 0 0 .6 1.2l10-10.2-10-10.2zm11.1 9.1 2.7-2.8-9.6-5.5 6.9 8.3zm0 2.2-6.9 8.3 9.6-5.5-2.7-2.8zm4.2-1.1-2.4-1.4-2.9 2.4 2.9 2.4 2.4-1.4a1.2 1.2 0 0 0 0-2z"/></svg>',
        appStore:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.1c.8-1.2 1.2-2.4 1.2-2.5 0 0-2.1-.8-2.1-3.6zM14.2 5.7c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z"/></svg>',
        liveDemo:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
    };

    const linkBox = $("#storeLinks");
    const links = project.storeLinks || {};
    const linkDefs = [
        { key: "playStore", small: "Get it on", big: "Google Play" },
        { key: "appStore", small: "Download on the", big: "App Store" },
    ];

    const storeButtons = linkDefs
        .filter((d) => links[d.key])
        .map(
            (d) => `
            <a class="store-btn" href="${escapeHtml(links[d.key])}" target="_blank" rel="noopener">
                ${STORE_ICONS[d.key]}
                <span>
                    <span class="small">${d.small}</span>
                    <span class="big">${d.big}</span>
                </span>
            </a>`
        );

    const liveSites =
        Array.isArray(links.liveSites) && links.liveSites.length
            ? links.liveSites
            : links.liveDemo
            ? [{ label: "Live site", url: links.liveDemo }]
            : [];

    const liveButtons = liveSites.map(
        (site) => `
            <a class="store-btn" href="${escapeHtml(site.url)}" target="_blank" rel="noopener">
                ${STORE_ICONS.liveDemo}
                <span>
                    <span class="small">${liveSites.length > 1 ? "Live site" : "Open the"}</span>
                    <span class="big">${escapeHtml(site.label || "Live site")}</span>
                </span>
            </a>`
    );

    const linkHtml = storeButtons.concat(liveButtons).join("");

    linkBox.innerHTML =
        linkHtml ||
        `<span class="chip">Internal / private project — no public listing</span>`;

    /* ---------------------------------------------------------- screenshots */
    const shots = project.screenshots || [];
    if (shots.length) {
        $("#shotsSection").hidden = false;
        $("#screenshots").innerHTML = shots
            .map(
                (shot) => `
            <figure class="shot reveal" tabindex="0" role="button"
                    aria-label="Enlarge: ${escapeHtml(shot.caption || "")}">
                <div class="shot__screen">
                    <span class="shot__notch"></span>
                    <img src="${encodeURI(shot.url)}" alt="${escapeHtml(
                    shot.caption || project.title
                )}" loading="lazy" decoding="async">
                    <figcaption class="shot__cap">${escapeHtml(
                        shot.caption || ""
                    )}</figcaption>
                </div>
            </figure>`
            )
            .join("");
    }

    /* ----------------------------------------------------------- info cards */
    const INFO_CARDS = [
        {
            key: "technologies",
            title: "Framework & Technologies",
            hue: 199,
            icon: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
        },
        {
            key: "stateManagement",
            title: "State Management",
            hue: 262,
            icon: '<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/>',
        },
        {
            key: "backend",
            title: "Backend & Services",
            hue: 150,
            icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
        },
        {
            key: "features",
            title: "Key Features",
            hue: 38,
            icon: '<path d="m12 2 2.9 6.3 6.8.8-5 4.6 1.3 6.7L12 17l-6 3.4L7.3 13.7l-5-4.6 6.8-.8L12 2z"/>',
            wide: true,
        },
    ];

    $("#infoGrid").innerHTML = INFO_CARDS.filter(
        (c) => Array.isArray(project[c.key]) && project[c.key].length
    )
        .map(
            (c) => `
        <article class="info-card reveal${c.wide ? " info-card--features" : ""}"
                 ${c.wide ? 'style="grid-column:1/-1"' : ""}>
            <div class="info-card__head">
                <span class="ico" style="color:hsl(${c.hue} 80% 62%);background:hsl(${
                c.hue
            } 80% 55% / 0.14)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${
                             c.icon
                         }</svg>
                </span>
                <h2>${c.title}</h2>
            </div>
            <ul class="info-card__list">
                ${project[c.key]
                    .map((item) => `<li>${escapeHtml(item)}</li>`)
                    .join("")}
            </ul>
        </article>`
        )
        .join("");

    /* -------------------------------------------------------------- related */
    const related = Object.entries(projectsData)
        .filter(([id]) => id !== projectId)
        .sort((a, b) => {
            // Same category first, then original order.
            const aSame = a[1].category === project.category ? 0 : 1;
            const bSame = b[1].category === project.category ? 0 : 1;
            return aSame - bSame;
        })
        .slice(0, 4);

    $("#related").innerHTML = related
        .map(
            ([id, p]) => `
        <a href="project-details.html?id=${encodeURIComponent(id)}">
            <strong>${escapeHtml(p.cardTitle || p.title)}</strong>
            <span>${escapeHtml(
                (p.tagline || "").split("—")[0].slice(0, 62)
            )}</span>
        </a>`
        )
        .join("");

    /* ------------------------------------------------------------- lightbox */
    const lightbox = $("#lightbox");
    const lightboxImage = $("#lightboxImage");

    function openLightbox(src, alt) {
        lightboxImage.src = src;
        lightboxImage.alt = alt || "";
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    $$(".shot").forEach((shot) => {
        const open = () => {
            const img = $("img", shot);
            openLightbox(img.src, img.alt);
        };
        shot.addEventListener("click", open);
        shot.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });

    $("#lightboxClose").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    /* ---------------------------------------------------------- shell chrome */
    const nav = $("#nav");
    const toTop = $("#toTop");
    const progressBar = $("#progressBar");
    let ticking = false;

    function onScroll() {
        const y = window.scrollY;
        if (nav) nav.classList.toggle("is-stuck", y > 24);
        if (toTop) toTop.classList.toggle("is-visible", y > 600);
        if (progressBar) {
            const max = document.body.scrollHeight - window.innerHeight;
            progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        }
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(onScroll);
            }
        },
        { passive: true }
    );
    onScroll();

    toTop.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
    );

    $("#themeToggle").addEventListener("click", () => {
        const next =
            document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        localStorage.setItem("theme", next);
    });

    const revealObserver = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-in");
                obs.unobserve(entry.target);
            });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    $$(".reveal").forEach((el) => revealObserver.observe(el));

    $("#year").textContent = new Date().getFullYear();
})();
