/* =============================================================================
   Muhammed Afid — Portfolio interactions
   ============================================================================= */
(function () {
    "use strict";

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------------------------------------------------------------- theme */
    const themeToggle = $("#themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const next =
                document.documentElement.dataset.theme === "light"
                    ? "dark"
                    : "light";
            document.documentElement.dataset.theme = next;
            localStorage.setItem("theme", next);
        });
    }

    /* ------------------------------------------------------------------ nav */
    const nav = $("#nav");
    const navLinks = $("#navLinks");
    const burger = $("#navBurger");
    const progressBar = $("#progressBar");
    const toTop = $("#toTop");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            const open = navLinks.classList.toggle("is-open");
            burger.setAttribute("aria-expanded", String(open));
        });

        navLinks.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                navLinks.classList.remove("is-open");
                burger.setAttribute("aria-expanded", "false");
            }
        });
    }

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
                window.requestAnimationFrame(onScroll);
            }
        },
        { passive: true }
    );
    onScroll();

    if (toTop) {
        toTop.addEventListener("click", () =>
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
        );
    }

    /* Highlight the nav link for whichever section owns the viewport. */
    const sections = $$("main section[id]");
    if (sections.length && navLinks) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    $$("a", navLinks).forEach((a) =>
                        a.classList.toggle(
                            "is-active",
                            a.getAttribute("href") === `#${entry.target.id}`
                        )
                    );
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        sections.forEach((s) => spy.observe(s));
    }

    /* --------------------------------------------------------------- reveal */
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

    function observeReveals(root = document) {
        $$(".reveal", root).forEach((el) => revealObserver.observe(el));
    }
    observeReveals();

    /* ---------------------------------------------------------------- typed */
    const typedEl = $("#typed");
    if (typedEl) {
        const roles = [
            "Senior Flutter Developer",
            "Cross-Platform App Engineer",
            "Mobile UI/UX Craftsman",
            "Product-Minded Builder",
        ];

        if (reduceMotion) {
            typedEl.textContent = roles[0];
        } else {
            let roleIndex = 0;
            let charIndex = 0;
            let deleting = false;

            (function type() {
                const word = roles[roleIndex];
                charIndex += deleting ? -1 : 1;
                typedEl.textContent = word.slice(0, charIndex);

                let delay = deleting ? 45 : 85;

                if (!deleting && charIndex === word.length) {
                    deleting = true;
                    delay = 1900;
                } else if (deleting && charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    delay = 350;
                }

                setTimeout(type, delay);
            })();
        }
    }

    /* -------------------------------------------------------------- marquee */
    const marqueeTrack = $("#marqueeTrack");
    if (marqueeTrack) {
        const stack = [
            "Flutter",
            "Dart",
            "Riverpod",
            "Bloc",
            "Firebase",
            "Supabase",
            "Django",
            "Node.js",
            "Odoo ERP",
            "Agora SDK",
            "WebRTC",
            "RevenueCat",
            "Google Maps",
            "NFC",
            "Next.js",
            "TypeScript",
        ];
        // Duplicated so the -50% translate loops seamlessly.
        marqueeTrack.innerHTML = stack
            .concat(stack)
            .map((item) => `<span>${item}</span>`)
            .join("");
    }

    /* --------------------------------------------------------------- counts */
    const counters = $$(".stat__num[data-count]");
    if (counters.length) {
        const countObserver = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    obs.unobserve(entry.target);

                    const el = entry.target;
                    const target = Number(el.dataset.count) || 0;
                    const suffix = el.dataset.suffix || "";

                    if (reduceMotion) {
                        el.textContent = target + suffix;
                        return;
                    }

                    const duration = 1400;
                    const start = performance.now();

                    (function tick(now) {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        el.textContent = Math.round(target * eased) + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    })(start);
                });
            },
            { threshold: 0.5 }
        );
        counters.forEach((c) => countObserver.observe(c));
    }

    /* -------------------------------------------------------------- projects */
    const grid = $("#projectGrid");
    const filterBar = $("#filters");

    const ICONS = {
        playStore:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18a1.5 1.5 0 0 0 .6 1.2l10-10.2-10-10.2zm11.1 9.1 2.7-2.8-9.6-5.5 6.9 8.3zm0 2.2-6.9 8.3 9.6-5.5-2.7-2.8zm4.2-1.1-2.4-1.4-2.9 2.4 2.9 2.4 2.4-1.4a1.2 1.2 0 0 0 0-2z"/></svg>',
        appStore:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.1c.8-1.2 1.2-2.4 1.2-2.5 0 0-2.1-.8-2.1-3.6zM14.2 5.7c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z"/></svg>',
        link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"/></svg>',
        arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    };

    /** "EventXpro Attendees" -> "EA"; single words -> first two letters. */
    function initialsOf(name) {
        const words = name.replace(/[^\w\s]/g, " ").trim().split(/\s+/);
        if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
        return (words[0][0] + words[1][0]).toUpperCase();
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

    function storeBadges(links) {
        if (!links) return "";
        const out = [];
        if (links.playStore)
            out.push(
                `<a class="store-dot" href="${links.playStore}" target="_blank" rel="noopener" title="Google Play" aria-label="View on Google Play">${ICONS.playStore}</a>`
            );
        if (links.appStore)
            out.push(
                `<a class="store-dot" href="${links.appStore}" target="_blank" rel="noopener" title="App Store" aria-label="View on the App Store">${ICONS.appStore}</a>`
            );
        if (links.liveDemo)
            out.push(
                `<a class="store-dot" href="${links.liveDemo}" target="_blank" rel="noopener" title="Live site" aria-label="Open the live site">${ICONS.link}</a>`
            );
        return out.length ? `<div class="card__badges">${out.join("")}</div>` : "";
    }

    function cardMarkup(id, p, index) {
        const name = p.cardTitle || p.title;
        const hue = p.accent != null ? p.accent : 262;

        const media = p.cover
            ? `<img src="${encodeURI(p.cover)}" alt="${escapeHtml(
                  name
              )}" class="fit-${p.coverFit || "cover"}" loading="lazy" decoding="async">`
            : `<div class="card__cover"><span class="card__initials">${initialsOf(
                  name
              )}</span></div>`;

        const tags = (p.tags || [])
            .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
            .join("");

        return `
        <article class="card reveal" data-category="${p.category || "mobile"}"
                 style="--card-hue:${hue}; --reveal-delay:${Math.min(index, 5) * 0.05}s">
            <a class="card__hit" href="project-details.html?id=${encodeURIComponent(
                id
            )}" aria-label="View ${escapeHtml(name)} case study"></a>
            ${storeBadges(p.storeLinks)}
            <div class="card__media">${media}</div>
            <div class="card__body">
                <h3 class="card__title">${escapeHtml(name)}</h3>
                <p class="card__text">${escapeHtml(p.tagline || p.description)}</p>
                <div class="card__tags">${tags}</div>
                <span class="card__link">View case study ${ICONS.arrow}</span>
            </div>
        </article>`;
    }

    if (grid && typeof projectsData !== "undefined") {
        const entries = Object.entries(projectsData);

        grid.innerHTML = entries
            .map(([id, p], i) => cardMarkup(id, p, i))
            .join("");

        // Filters, with live counts, hiding any category that has no projects.
        if (filterBar && typeof projectCategories !== "undefined") {
            const counts = entries.reduce((acc, [, p]) => {
                const key = p.category || "mobile";
                acc[key] = (acc[key] || 0) + 1;
                return acc;
            }, {});

            filterBar.innerHTML = projectCategories
                .filter((c) => c.id === "all" || counts[c.id])
                .map((c) => {
                    const n = c.id === "all" ? entries.length : counts[c.id];
                    return `<button type="button" class="filter${
                        c.id === "all" ? " is-active" : ""
                    }" data-filter="${c.id}">${c.label}<span class="filter__count">${n}</span></button>`;
                })
                .join("");

            filterBar.addEventListener("click", (e) => {
                const btn = e.target.closest(".filter");
                if (!btn) return;

                $$(".filter", filterBar).forEach((f) =>
                    f.classList.toggle("is-active", f === btn)
                );

                const want = btn.dataset.filter;
                $$(".card", grid).forEach((card) => {
                    const show = want === "all" || card.dataset.category === want;
                    card.classList.toggle("is-hidden", !show);
                });
            });
        }

        // Cursor-tracking glow on each card.
        if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
            grid.addEventListener("pointermove", (e) => {
                const card = e.target.closest(".card");
                if (!card) return;
                const r = card.getBoundingClientRect();
                card.style.setProperty("--mx", `${e.clientX - r.left}px`);
                card.style.setProperty("--my", `${e.clientY - r.top}px`);
            });
        }

        observeReveals(grid);
    }

    /* ---------------------------------------------------------------- resume */
    const resumeBtn = $("#downloadResume");
    if (resumeBtn) {
        // The CV file isn't always present in the deploy; fail loudly rather
        // than handing the visitor a 404 page.
        fetch(resumeBtn.getAttribute("href"), { method: "HEAD" })
            .then((res) => {
                if (!res.ok) throw new Error("missing");
            })
            .catch(() => {
                resumeBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.location.href =
                        "mailto:afidhdy@gmail.com?subject=" +
                        encodeURIComponent("Resume request") +
                        "&body=" +
                        encodeURIComponent(
                            "Hi Afid, could you send over a copy of your CV?"
                        );
                });
            });
    }

    /* ------------------------------------------------------------------ form */
    const form = $("#contactForm");
    const status = $("#formStatus");

    function say(message, ok) {
        if (!status) return;
        status.textContent = message;
        status.className = `form__status is-visible ${ok ? "is-ok" : "is-error"}`;
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = $("#name").value.trim();
            const email = $("#email").value.trim();
            const message = $("#message").value.trim();

            if (!name || !email || !message) {
                say("Please fill in every field before sending.", false);
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                say("That email address doesn't look right.", false);
                return;
            }

            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            window.location.href = `mailto:afidhdy@gmail.com?subject=${encodeURIComponent(
                `Portfolio enquiry from ${name}`
            )}&body=${encodeURIComponent(body)}`;

            say("Opening your email client with the message ready to send.", true);
            form.reset();
        });
    }

    /* ------------------------------------------------------------------ misc */
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
})();
