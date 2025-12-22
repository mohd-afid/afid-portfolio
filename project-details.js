document.addEventListener("DOMContentLoaded", function () {
    // Get project ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    if (!projectId || !projectsData[projectId]) {
        window.location.href = "index.html";
        return;
    }

    const project = projectsData[projectId];

    // Update page title
    document.title = `${project.title} - Project Details`;

    // Populate project details
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectDescription").textContent =
        project.description;

    // Populate store links
    const storeLinkContainer = document.getElementById("storeLinks");
    if (project.storeLinks) {
        if (project.storeLinks.appStore) {
            const appStoreLink = document.createElement("a");
            appStoreLink.href = project.storeLinks.appStore;
            appStoreLink.target = "_blank";
            appStoreLink.className = "hover:opacity-80 transition-opacity";
            appStoreLink.innerHTML = `
                <img src="assests/logo/appstore-logo.jpeg" alt="Download on App Store" class="h-12 rounded">
            `;
            storeLinkContainer.appendChild(appStoreLink);
        }

        if (project.storeLinks.playStore) {
            const playStoreLink = document.createElement("a");
            playStoreLink.href = project.storeLinks.playStore;
            playStoreLink.target = "_blank";
            playStoreLink.className = "hover:opacity-80 transition-opacity";
            playStoreLink.innerHTML = `
                <img src="assests/logo/playstore-logo.jpeg" alt="Get it on Google Play" class="h-12 rounded">
            `;
            storeLinkContainer.appendChild(playStoreLink);
        }

        if (project.storeLinks.liveDemo) {
            const liveDemoLink = document.createElement("a");
            liveDemoLink.href = project.storeLinks.liveDemo;
            liveDemoLink.target = "_blank";
            liveDemoLink.className = "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center gap-2";
            liveDemoLink.innerHTML = `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Visit Live Site
            `;
            storeLinkContainer.appendChild(liveDemoLink);
        }

        // If all links are null, show "Coming Soon"
        if (!project.storeLinks.appStore && !project.storeLinks.playStore && !project.storeLinks.liveDemo) {
            const comingSoon = document.createElement("div");
            comingSoon.className = "text-gray-400 text-lg";
            comingSoon.textContent = "App Store & Play Store links coming soon";
            storeLinkContainer.appendChild(comingSoon);
        }
    }

    // Populate technologies
    const techList = document.getElementById("technologies");
    project.technologies.forEach((tech) => {
        const li = document.createElement("li");
        li.className = "flex items-center space-x-2";
        li.innerHTML = `
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${tech}</span>
        `;
        techList.appendChild(li);
    });

    // Populate state management
    const stateList = document.getElementById("stateManagement");
    project.stateManagement.forEach((item) => {
        const li = document.createElement("li");
        li.className = "flex items-center space-x-2";
        li.innerHTML = `
            <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
            </svg>
            <span>${item}</span>
        `;
        stateList.appendChild(li);
    });

    // Populate backend
    const backendList = document.getElementById("backend");
    project.backend.forEach((item) => {
        const li = document.createElement("li");
        li.className = "flex items-center space-x-2";
        li.innerHTML = `
            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>${item}</span>
        `;
        backendList.appendChild(li);
    });

    // Populate features
    const featuresList = document.getElementById("features");
    project.features.forEach((feature) => {
        const li = document.createElement("li");
        li.className = "flex items-center space-x-2";
        li.innerHTML = `
            <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${feature}</span>
        `;
        featuresList.appendChild(li);
    });

    // Populate screenshots
    const screenshotsGrid = document.getElementById("screenshots");
    project.screenshots.forEach((screenshot) => {
        const div = document.createElement("div");
        div.className = "relative group phone-screenshot-container";
        div.innerHTML = `
            <div class="phone-frame">
                <img 
                    src="${screenshot.url}" 
                    alt="${screenshot.caption}" 
                    class="phone-screenshot"
                >
                <div class="screenshot-caption">
                    <p class="text-white text-sm">${screenshot.caption}</p>
                </div>
            </div>
        `;
        screenshotsGrid.appendChild(div);
    });

    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    document.querySelectorAll(".phone-screenshot-container").forEach(item => {
        item.addEventListener("click", event => {
            const imageUrl = event.currentTarget.querySelector(".phone-screenshot").src;
            lightboxImage.src = imageUrl;
            lightbox.classList.remove("hidden");
        });
    });

    const hideLightbox = () => {
        lightbox.classList.add("hidden");
    };

    closeLightbox.addEventListener("click", hideLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });
});
