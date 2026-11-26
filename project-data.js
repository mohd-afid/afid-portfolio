/**
 * Single source of truth for every project.
 *
 * The home page grid and the project detail page are both rendered from this
 * object, so adding a project here is enough to make it show up in both places.
 *
 * Card fields:
 *   tagline   - one line shown on the card
 *   cover     - image path; omit to render a generated gradient cover
 *   coverFit  - "cover" (photo/screenshot) or "contain" (logo, gets a light plate)
 *   accent    - base hue used by the generated cover + tag chips
 *   category  - drives the filter chips: mobile | enterprise | web | desktop
 *   tags      - short list shown on the card
 */
const projectsData = {
    sweatchi: {
        title: "Sweatchi - Fitness & Health Tracking Mobile App",
        cardTitle: "Sweatchi",
        tagline:
            "Fitness & health tracking with HealthKit sync, video workouts and subscriptions.",
        cover: "assests/images/sweatchi/sweatchi_icon.png",
        coverFit: "contain",
        accent: 145,
        category: "mobile",
        tags: ["Flutter", "Riverpod", "RevenueCat", "HealthKit"],
        description:
            "Sweatchi is a comprehensive fitness and health tracking mobile application built with Flutter. The app provides users with a complete solution for managing their fitness journey, including workout plans, nutrition tracking, health metrics monitoring, and educational content. The app features a modern dark-themed UI, subscription-based monetization, and seamless integration with native health platforms (Apple Health & Google Health Connect).",
        technologies: [
            "Flutter (Dart SDK ^3.8.1)",
            "Apple HealthKit Integration",
            "Google Health Connect Integration",
            "Video Player (chewie, video_player)",
            "RevenueCat SDK (purchases_flutter)",
            "PostHog Analytics",
            "Firebase Analytics & Crashlytics",
            "Microsoft Clarity Analytics",
            "Zulip Chat Integration",
            "Custom Video Player Controls",
            "Flutter ScreenUtil (Responsive Design)",
            "FL Chart (Data Visualization)",
            "Image Picker & Caching",
            "Push Notifications (FCM)",
        ],
        stateManagement: [
            "Riverpod 2.4.9 for reactive state management",
            "StateNotifier for complex state management",
            "FutureProvider for async data loading",
            "StreamProvider for reactive data streams",
            "Provider for dependency injection",
            "Clean Architecture with feature-based modules",
        ],
        backend: [
            "RESTful API Integration",
            "Token-based Authentication",
            "Firebase Cloud Messaging (Push Notifications)",
            "RevenueCat (Subscription Management)",
            "PostHog (Product Analytics & Feature Flags)",
            "Firebase Analytics & Crashlytics",
            "Microsoft Clarity (Session Recording)",
            "Zulip (Real-time Chat)",
            "Health Platform APIs (Apple Health & Google Health Connect)",
            "Custom API Client with Dio",
        ],
        features: [
            "Phone number-based authentication with OTP verification",
            "Secure user registration and login flow",
            "Onboarding screens with video content",
            "Profile setup with goal selection and body measurements",
            "Comprehensive workout library with categories and types",
            "Video-guided workout routines with exercise instructions",
            "Workout progress tracking (completion percentage, calories burned)",
            "Weekly and daily workout plans",
            "Custom workout video player with playback controls",
            "Exercise completion tracking",
            "Weight Tracking with daily logging and historical charts",
            "Steps Tracking with automatic sync from health platforms",
            "Water Intake logging and daily tracking",
            "Sleep Tracking with automatic sync (12-hour throttling)",
            "Body Measurements tracking over time",
            "Progress Photos for visual tracking",
            "Recipe library with detailed recipes",
            "Meal logging functionality",
            "TDEE (Total Daily Energy Expenditure) calculator",
            "Calorie tracking and management",
            "Recipe search and filtering",
            "Video lessons with integrated video player",
            "Educational content on fitness and health",
            "PDF document viewing capability",
            "Real-time chat functionality using Zulip integration",
            "Media sharing (images/videos) in community chat",
            "RevenueCat integration for in-app purchases",
            "Multiple subscription plans (monthly/yearly)",
            "Paywall screen with plan selection",
            "Subscription status tracking and management",
            "PostHog Integration for event tracking and feature flags",
            "Firebase Analytics for user behavior tracking",
            "Microsoft Clarity for session recording",
            "Firebase Crashlytics for crash reporting",
            "Route observer for screen navigation tracking",
            "Push notification support via Firebase Cloud Messaging",
            "Notification management and settings",
            "User profile management",
            "Goal setup and tracking",
            "Settings screen with preferences",
            "Feedback submission system",
            "Account management",
            "Dark-themed modern UI design",
            "Smooth animations and transitions",
            "Responsive layouts with ScreenUtil",
        ],
        screenshots: [
            {
                url: "assests/images/sweatchi/swaeatchi.png",
                caption: "Main Dashboard with Daily Stats",
            },
            {
                url: "assests/images/sweatchi/sweatchi2.png",
                caption: "Activity Tracking & Health Metrics",
            },
            {
                url: "assests/images/sweatchi/sweatchi3.png",
                caption: "Workout Plans & Video Guides",
            },
            {
                url: "assests/images/sweatchi/sweatchi4.png",
                caption: "Nutrition & Meal Planning",
            },
        ],
        storeLinks: {
            appStore: "https://apps.apple.com/in/app/sweatchi/id6751708944",
            playStore:
                "https://play.google.com/store/apps/details?id=com.spicestorm.sweatchi",
        },
    },

    neargovernance: {
        title: "Near Governance",
        cardTitle: "Near Governance",
        tagline:
            "Board-meeting platform with 150+ participant calls, resolutions and digital signatures.",
        cover: "assests/images/Near Governance Logo.png",
        coverFit: "contain",
        accent: 258,
        category: "enterprise",
        tags: ["Flutter", "WebRTC", "Bloc", "Node.js"],
        description:
            "Near Governance is a powerful platform for seamless virtual meetings, decision-making, and collaboration. Supporting 150+ participants, it offers real-time presentations, whiteboard & shareboard tools, task management, and agenda setting for structured discussions.With organization-wide chat, instant notifications, polling, and raise-hand features, it enhances engagement and efficiency. Secure functionalities like digital signatures, attendance tracking, meeting recordings, and OTP verification ensure compliance and security.A custom dashboard, AI chatbot, and advanced analytics make Near Governance the ideal solution for modern businesses, available on both Android & iOS.",
        technologies: [
            "Flutter with Material Design 3",
            "Custom-built animation engine",
        ],
        stateManagement: ["Provider", "Bloc"],
        backend: ["node js", "express", "mongodb", "firebase"],
        features: [
            "Screen Sharing – Available on both Android & iOS during video calls",
            "Picture-in-Picture Mode – Allows multitasking while on video calls (Android & iOS)",
            "5 languages support including Arabic",
            "Large-Scale Video Calls – Supports 150+ participants in a single session",
            "Whiteboard & Shareboard – Interactive collaboration tools within meetings",
            "chat in video calls",
            "Instant Alerts – When a new message arrives or a user joins a meeting",
            "Real-Time Presentations – Seamless slide sharing and document collaboration",
            "My notes in video calls",
            "Talking Indication – Highlights active speakers in real time",
            "video call users sorting with their talking status",
            "Polling & Surveys – Conduct instant votes and surveys for decision-making",
            "raise hand in video calls",
            "schedule meetings(twice in a week or month)",
            "Organization-Wide Chat – Discussions outside meetings at the company level",
            "Custom Dashboard – Personalized meeting management, analytics, and reports",
            "Ai chat boat",
            "task management",
            "Agenda Management – Set structured discussion topics for meetings",
            "Resolution & By-Circulation – Streamlined decision-making and approvals",
            "Attendance Report",
            "Recording & Playback – Store and access past meetings",
            "Digital Signatures – Secure document signing feature",
            "otp verification",
            "meeting listing calendar",
        ],
        screenshots: [
            {
                url: "assests/images/governance/1290-2796 1.png",
                caption: "Executive Dashboard",
            },
            {
                url: "assests/images/governance/1290-2796 2.png",
                caption: "Secure Voting Interface",
            },
            {
                url: "assests/images/governance/1290-2796 3.png",
                caption: "Proposal Management",
            },
            {
                url: "assests/images/governance/1290-2796 4.png",
                caption: "Analytics & Reporting",
            },
        ],
        storeLinks: {
            appStore:
                "https://apps.apple.com/in/app/near-governance/id6680184191",
            playStore:
                "https://play.google.com/store/apps/details?id=com.nearapps.governance",
        },
    },

    staffhour: {
        title: "Staff Hour",
        cardTitle: "Staff Hour",
        tagline:
            "Biometric-free attendance with face recognition, kiosk mode and live location, wired into Odoo.",
        accent: 24,
        category: "enterprise",
        tags: ["Flutter", "Odoo", "Face Recognition", "Kiosk"],
        description:
            "An in-house employee management system replacing traditional biometric devices. Features Kiosk and Employee Modes with role-based access, face recognition, and location-based attendance tracking integrated with Odoo ERP.",
        technologies: [
            "Flutter",
            "On-device face recognition",
            "Kiosk mode (locked-task device)",
            "Geolocation & geofencing",
            "Odoo ERP integration",
        ],
        stateManagement: ["Provider", "Role-based session handling"],
        backend: ["Odoo ERP", "REST API", "Secure local storage"],
        features: [
            "Kiosk Mode – shared device check-in that replaces biometric hardware",
            "Employee Mode – personal check-in from the employee's own phone",
            "Face recognition based identity verification",
            "Live location capture on every punch",
            "Role-based access for Employee and HR logins",
            "HR dashboard for attendance review and corrections",
            "Attendance records synced directly into Odoo ERP",
            "Shift, break and overtime tracking",
            "Offline punch queueing with sync on reconnect",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.vz.vface&hl=en_IN",
        },
    },

    eventxpro_attendees: {
        title: "EventXpro Attendees",
        cardTitle: "EventXpro Attendees",
        tagline:
            "Attendee app powering large-scale events like GITEX and DWTC, with live chat and video.",
        accent: 200,
        category: "mobile",
        tags: ["Flutter", "Django", "Agora SDK", "Firebase"],
        description:
            "Built an attendee app for EventXpro, a global event management platform used in large-scale events like GITEX and DWTC. Features include Speakers, Sponsors, Agenda modules, and Agora SDK-based real-time chat/video, with flexible customization based on client and event needs.",
        technologies: [
            "Flutter",
            "Agora SDK (real-time chat & video)",
            "Firebase Cloud Messaging",
            "Dynamic theming per event",
            "Deep linking",
        ],
        stateManagement: ["Provider", "Bloc"],
        backend: ["Django REST Framework", "Firebase", "Agora"],
        features: [
            "Speakers module with profiles and session mapping",
            "Sponsors and exhibitor directory",
            "Personalised agenda with session bookmarking",
            "Real-time one-to-one and group chat via Agora SDK",
            "In-app video calls and networking meetings",
            "Push notifications for schedule changes and announcements",
            "White-label theming customised per client and event",
            "QR-based attendee badge and check-in",
            "Used at large-scale events including GITEX and DWTC",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.vzevent.visitor&hl=en_IN",
        },
    },

    eventxpro_kiosk: {
        title: "EventXpro Kiosk",
        cardTitle: "EventXpro Kiosk",
        tagline:
            "Desktop registration desk with QR scanning, badge design and direct printer integration.",
        accent: 285,
        category: "desktop",
        tags: ["Flutter", "Windows", "macOS", "Badge Printing"],
        description:
            "Developed a kiosk-based desktop app for event registration and check-in, featuring QR/barcode scanning, attendee registration desk, customer display window, customizable badge configuration, and direct printer integration for instant badge printing.",
        technologies: [
            "Flutter Desktop (Windows & macOS)",
            "QR / barcode scanner integration",
            "Multi-window customer display",
            "Direct thermal printer integration",
            "Django REST backend",
        ],
        stateManagement: ["Provider", "Local caching for offline desks"],
        backend: ["Django REST Framework", "Local SQLite cache"],
        features: [
            "On-site registration desk for walk-in attendees",
            "QR and barcode scanning for instant check-in",
            "Secondary customer display window for attendee-facing info",
            "Fully customizable badge layout configuration",
            "Direct printer integration for instant badge printing",
            "Runs natively on both Windows and macOS",
            "Offline-tolerant check-in with background sync",
            "Multi-desk deployment for high-traffic events",
        ],
        screenshots: [],
        storeLinks: {},
    },

    nearconnect: {
        title: "Near Connect",
        cardTitle: "Near Connect",
        tagline:
            "Secure video conferencing with whiteboards, breakout rooms and cloud recording.",
        cover: "assests/images/nearconnect.png",
        coverFit: "contain",
        accent: 220,
        category: "enterprise",
        tags: ["Flutter", "WebRTC", "Provider", "MongoDB"],
        description:
            "Near Connect is a powerful video conferencing solution designed for seamless communication and collaboration. It offers high-quality video calls, interactive whiteboard & shareboard tools, real-time chat, and instant notifications. With support for multi-device screen sharing, real-time polling, and breakout rooms, it ensures an engaging and productive meeting experience. Secure features like end-to-end encryption, cloud recording, digital signatures, and OTP verification provide enhanced privacy and compliance. A custom dashboard, AI chatbot, and advanced analytics make Near Connect a perfect solution for organizations, available on both Android & iOS.",
        technologies: [
            "Flutter with Material Design 3",
            "Custom-built animation engine",
        ],
        stateManagement: ["Provider", "Bloc"],
        backend: ["node js", "express", "mongodb", "firebase"],
        features: [
            "video conferencing",
            "Smart noise cancellation",
            "Multi-device screen sharing",
            "Picture-in-Picture Mode (Android & iOS)",
            "Interactive whiteboard & shareboard",
            "Real-time chat during meetings",
            "Instant alerts for new messages and participants",
            "Talking indication for active speakers",
            "Participant sorting based on speaking status",
            "Polling & surveys for quick decision-making",
            "Raise hand feature for structured discussions",
            "Scheduled meetings (weekly & monthly options)",
            "Breakout rooms for focused discussions",
            "Organization-wide chat for communication outside meetings",
            "Custom dashboard with analytics & reports",
            "Attendance tracking with reports",
            "Recording & playback for future reference",
            "OTP verification for secure access",
            "Meeting listing calendar",
        ],
        screenshots: [
            {
                url: "assests/images/Near connect/1242-2208 - 1.png",
                caption: "Professional Meeting Interface",
            },
            {
                url: "assests/images/Near connect/1242-2208 - 2.png",
                caption: "Collaborative Workspace",
            },
            {
                url: "assests/images/Near connect/1242-2208 - 3.png",
                caption: "Interactive Presentation Mode",
            },
            {
                url: "assests/images/Near connect/1242-2208 - 4.png",
                caption: "Advanced Meeting Controls",
            },
        ],
        storeLinks: {
            appStore:
                "https://apps.apple.com/in/app/near-connect-1-0/id1666461663",
            playStore:
                "https://play.google.com/store/apps/details?id=com.nearplatforms.nearvideoconference&pcampaignid=web_share",
        },
    },

    nearchat: {
        title: "Near Chat",
        cardTitle: "Near Chat",
        tagline:
            "End-to-end encrypted messenger with HD calls and multi-device sync.",
        cover: "assests/images/nearchat.png",
        coverFit: "contain",
        accent: 168,
        category: "mobile",
        tags: ["Flutter", "WebRTC", "E2E Encryption", "Node.js"],
        description:
            "Near Chat is a fast, secure, and feature-rich messaging app designed for seamless communication. With end-to-end encryption, HD video calls, media sharing, and multi-device synchronization, it provides a WhatsApp-like experience with enhanced security and customization options.",
        technologies: [
            "Flutter with optimized WebRTC",
            "Custom UI/UX framework",
            "End-to-end encryption",
            "Push notification system",
        ],
        stateManagement: ["Provider"],
        backend: ["Scalable Node.js architecture", "MongoDB Atlas"],
        features: [
            "End-to-End Encrypted Messaging – Secure private and group chats",
            "HD Video & Voice Calls – High-quality calls with low latency",
            "Multi-Device Synchronization – Access chats from multiple devices",
            "Smart Message Search – Quickly find messages, media, and links",
            "Rich Media Sharing – Share images, videos, documents, and audio",
            "Group Video Conferencing – High-quality group calls",
            "Custom Chat Themes – Personalize chat appearance",
            "Read Receipts & Typing Indicators – Know when messages are seen",
            "Voice Notes – Send instant voice messages",
            "Reply, Forward, and Edit Messages – Enhanced messaging control",
            "Two-Step Verification – Extra security for account protection",
            "Group Management – Admin controls, mentions, and muting options",
            "Cloud Backup & Restore – Secure chat backup with end-to-end encryption",
            "Last Seen & Online Status – Control visibility settings",
            "chat notification",
            "call ringing feature",
        ],
        screenshots: [
            {
                url: "assests/images/near chat/1242-2688_1.png",
                caption: "Modern Chat Interface",
            },
            {
                url: "assests/images/near chat/1242-2688_2.png",
                caption: "HD Video Calling",
            },
            {
                url: "assests/images/near chat/1242-2688_3.png",
                caption: "Group Collaboration",
            },
            {
                url: "assests/images/near chat/1242-2688_4.png",
                caption: "Modern Chat Interface",
            },
        ],
        storeLinks: {
            appStore:
                "https://apps.apple.com/in/app/near-chat-1-0/id6465993033",
            playStore:
                "https://play.google.com/store/apps/details?id=com.near.nearchat",
        },
    },

    nadena_trainer: {
        title: "Nadena-nc - Trainer",
        cardTitle: "Nadena · Trainer",
        tagline:
            "Trainer app for Saudi Ministry of Education neighborhood clubs, bilingual with QR attendance.",
        accent: 130,
        category: "mobile",
        tags: ["Flutter", "Django", "Localization", "2FA"],
        description:
            "Developed a trainer app for the Nadena (نادينا) Neighborhood Clubs Program under the Saudi Ministry of Education, featuring QR-based attendance, schedule tracking, leave requests, feedback monitoring, and bilingual (Arabic/English) support.",
        technologies: [
            "Flutter",
            "Arabic / English localization with full RTL support",
            "QR scanning",
            "Firebase Cloud Messaging",
            "Two-factor authentication",
        ],
        stateManagement: ["Provider"],
        backend: ["Django REST Framework", "Firebase"],
        features: [
            "QR-based attendance marking for club sessions",
            "Trainer schedule and session tracking",
            "Leave request submission and approval status",
            "Feedback monitoring from members and supervisors",
            "Full bilingual Arabic / English experience with RTL layouts",
            "Two-factor authentication for secure access",
            "Push notifications for schedule and assignment changes",
            "Built for the Saudi Ministry of Education's Nadena programme",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.talemia.trainer_app&hl=en_IN",
        },
    },

    nadena_member: {
        title: "Nadena-nc - Member",
        cardTitle: "Nadena · Member",
        tagline:
            "Member app for club subscriptions, activity booking and membership transfers.",
        accent: 96,
        category: "mobile",
        tags: ["Flutter", "Django", "Localization", "Firebase"],
        description:
            "Developed a member app for Nadena (نادينا) clubs, allowing users to register, purchase subscriptions, book activities, manage membership (transfer/freeze), track attendance, and use the app in Arabic/English.",
        technologies: [
            "Flutter",
            "Arabic / English localization with full RTL support",
            "Online payment integration",
            "Firebase Cloud Messaging",
            "Two-factor authentication",
        ],
        stateManagement: ["Provider"],
        backend: ["Django REST Framework", "Firebase"],
        features: [
            "Self-service registration and profile management",
            "Subscription purchase and renewal",
            "Activity discovery and booking",
            "Membership transfer and freeze requests",
            "Personal attendance history and tracking",
            "Full bilingual Arabic / English experience with RTL layouts",
            "Two-factor authentication for secure access",
            "Push notifications for bookings and announcements",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.talemia.members&hl=en_IN",
        },
    },

    spacelead: {
        title: "Spacelead",
        cardTitle: "Spacelead",
        tagline:
            "Conference app for Alfaisal University with floor maps, agenda sync and bookmarks.",
        accent: 250,
        category: "mobile",
        tags: ["Flutter", "Django", "Firebase"],
        description:
            "Developed an attendee mobile app for the SpaceLead Conference at Alfaisal University with modules for Sponsors, Speakers, Floor Map, Gallery, and Agenda. Enabled session bookmarking, calendar sync, and notifications for an enhanced user experience.",
        technologies: [
            "Flutter",
            "Interactive floor map rendering",
            "Native calendar sync",
            "Firebase Cloud Messaging",
        ],
        stateManagement: ["Provider"],
        backend: ["Django REST Framework", "Firebase"],
        features: [
            "Speakers module with full session profiles",
            "Sponsors and partners showcase",
            "Interactive venue floor map",
            "Event gallery with media highlights",
            "Full conference agenda by day and track",
            "Session bookmarking for a personal schedule",
            "Native device calendar sync for bookmarked sessions",
            "Push notifications for session reminders and updates",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.spacelead.visitor&hl=en_IN",
        },
    },

    menufy: {
        title: "Menufy - QR Menu Restaurant Management System",
        cardTitle: "Menufy",
        tagline:
            "Full-stack QR menu platform — contactless digital menus in a Next.js dashboard.",
        cover: "assests/images/menufy/homepage.png",
        coverFit: "cover",
        accent: 12,
        category: "web",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        description:
            "A modern, full-stack restaurant management system that enables restaurant owners to create, manage, and share digital menus through QR codes. Menufy modernizes the dining experience by replacing traditional paper menus with dynamic, contactless digital menus. The system allows restaurant owners to create and manage multiple restaurants, organize menu items into categories, upload images, and generate QR codes for instant customer access.",
        technologies: [
            "Next.js 15 (App Router)",
            "TypeScript",
            "Tailwind CSS",
            "Radix UI",
            "React Hook Form",
            "Zod (Form Validation)",
            "qrcode.react",
            "React Icons",
            "Supabase (PostgreSQL)",
            "Supabase Auth",
            "Supabase Storage",
            "Next.js API Routes",
            "Vercel Deployment",
        ],
        stateManagement: [
            "React Hooks (useState, useEffect)",
            "Next.js Server Components",
            "Client-side state management",
            "React Hook Form state management",
        ],
        backend: [
            "Supabase (PostgreSQL Database)",
            "Supabase Authentication",
            "Supabase Storage (Image Upload)",
            "Next.js API Routes",
            "Row Level Security (RLS)",
            "RESTful API",
        ],
        features: [
            "Comprehensive restaurant dashboard",
            "Multi-restaurant management system",
            "Full CRUD operations for menus",
            "QR code generation for instant access",
            "Image upload and management",
            "Real-time menu updates",
            "Custom branding (logo, banner, colors)",
            "Contactless QR code menu access",
            "Beautiful mobile-optimized UI",
            "Smart cart system",
            "Search and filter functionality",
            "Category navigation",
            "No app installation required",
            "Row Level Security (RLS) for data protection",
            "Dynamic routing per restaurant",
            "Image optimization",
            "Fully responsive design",
            "Type-safe TypeScript implementation",
            "Admin panel for management",
            "Hygiene-friendly contactless dining solution",
            "Eliminates menu printing costs",
            "Scalable multi-tenant architecture",
        ],
        screenshots: [
            {
                url: "assests/images/menufy/homepage.png",
                caption: "Menufy Homepage - QR Menu Restaurant Management System",
            },
        ],
        storeLinks: {
            liveDemo: "https://menufy-ten.vercel.app/",
        },
    },

    medilife_healthcare: {
        title: "Medilife Healthcare",
        cardTitle: "Medilife Healthcare",
        tagline:
            "Multi-site Dubai healthcare ecosystem spanning global group, home care, clinic and IV therapy.",
        accent: 190,
        category: "web",
        tags: ["Next.js", "WordPress", "Tailwind", "Healthcare"],
        description:
            "A comprehensive multi-domain healthcare web ecosystem serving patients across Dubai and the UAE. Encompasses Medilife Global Healthcare Group's multilingual Next.js portal alongside dedicated 24/7 home healthcare, Al Warsan medical clinic, and at-home IV drip therapy platforms with rapid appointment and WhatsApp booking flows.",
        technologies: [
            "Next.js (App Router & i18n)",
            "Tailwind CSS",
            "WordPress & Elementor",
            "Bootstrap & Custom PHP",
            "SEO & Schema Markup",
            "Responsive Mobile-First UI",
        ],
        stateManagement: [
            "Next.js Server & Client Components",
            "URL-based locale routing (/en, /ar)",
        ],
        backend: [
            "WordPress CMS",
            "WhatsApp Concierge & Booking Workflows",
            "Lead & Appointment Capture Forms",
        ],
        features: [
            "Multi-brand healthcare web suite across five dedicated domains",
            "Multilingual English & Arabic support for UAE audiences",
            "24/7 DHA-licensed home doctor, nurse, lab test and ECG booking",
            "Dedicated IV drip therapy catalog and home-service scheduling",
            "Al Warsan medical centre overview, team directory and care packages",
            "One-tap WhatsApp consultation and rapid dispatch flows",
            "Technical SEO optimization for Dubai healthcare searches",
        ],
        screenshots: [],
        storeLinks: {
            liveDemo: "https://medilifeglobal.com",
            liveSites: [
                { label: "medilifeglobal.com", url: "https://medilifeglobal.com" },
                { label: "medilifehomecare.ae", url: "https://medilifehomecare.ae" },
                { label: "medilifehomecare.com", url: "https://medilifehomecare.com" },
                { label: "medilifeclinic.ae", url: "https://medilifeclinic.ae" },
                { label: "ivdriphomedubai.ae", url: "https://ivdriphomedubai.ae" },
            ],
        },
    },

    dubai_wellness: {
        title: "Dubai Wellness",
        cardTitle: "Dubai Wellness",
        tagline:
            "Longevity & medical wellness clinic platform in JLT Dubai with 24/7 concierge booking.",
        accent: 158,
        category: "web",
        tags: ["React", "Longevity", "Booking", "Healthcare"],
        description:
            "Digital flagship for Dubai Wellness™ by Medilife Wellness Clinic in JLT Dubai — a 24/7 science-led longevity and medical wellness destination offering biological age testing, functional medicine, hormone optimization, IV therapy, and regenerative treatments.",
        technologies: [
            "React",
            "Modern Responsive CSS",
            "Interactive Programme Showcases",
            "SEO & Performance Optimization",
        ],
        stateManagement: [
            "React Component & Hook State",
        ],
        backend: [
            "Appointment & Concierge Inquiry APIs",
            "WhatsApp Direct Booking Integration",
        ],
        features: [
            "Flagship longevity programmes and Dubai Wellness Blueprint™ overview",
            "Treatment guides for biological age testing, functional medicine and IV therapy",
            "Personal wellness concierge and 24/7 appointment scheduling",
            "Multilingual support and streamlined mobile inquiry flows",
        ],
        screenshots: [],
        storeLinks: {
            liveDemo: "https://dubaiwellness.ae",
        },
    },

    dubai_std_clinic: {
        title: "Dubai STD Clinic",
        cardTitle: "Dubai STD Clinic",
        tagline:
            "Confidential STD testing and sexual health clinics in Dubai with discreet home-visit booking.",
        accent: 208,
        category: "web",
        tags: ["WordPress", "Healthcare", "Booking", "SEO"],
        description:
            "Dual-domain web presence for confidential STD testing and sexual health care in Dubai, enabling patients to schedule discreet at-home sample collection or private clinic consultations with fast, accurate lab results.",
        technologies: [
            "WordPress & Elementor",
            "Custom PHP Templates",
            "Technical & Local SEO",
            "Mobile-Optimized UI",
        ],
        stateManagement: [
            "Server-rendered CMS pages",
        ],
        backend: [
            "WordPress CMS",
            "Private Appointment & Callback Forms",
            "WhatsApp Consultation Routing",
        ],
        features: [
            "Discreet, privacy-first patient journey across two dedicated domains",
            "At-home and in-clinic STD testing packages with clear turnaround times",
            "Doctor consultation scheduling and fast confidential booking",
            "Search-optimized landing pages for sexual health services in Dubai",
        ],
        screenshots: [],
        storeLinks: {
            liveDemo: "https://stdclinicindubai.com",
            liveSites: [
                { label: "stdclinicindubai.com", url: "https://stdclinicindubai.com" },
                { label: "dubaistdclinic.ae", url: "https://dubaistdclinic.ae" },
            ],
        },
    },

    simans_delivery: {
        title: "Simans Delivery Services",
        cardTitle: "Simans Delivery",
        tagline:
            "Courier and logistics platform serving businesses and individuals across Qatar.",
        accent: 28,
        category: "web",
        tags: ["Next.js", "Logistics", "Multilingual", "Responsive"],
        description:
            "Corporate and service web platform for Simans Delivery Services in Qatar, showcasing reliable courier, same-day delivery, and enterprise logistics solutions tailored across industry sectors.",
        technologies: [
            "Next.js",
            "React",
            "Responsive Modern UI",
            "SEO Metadata & Structured Pages",
        ],
        stateManagement: [
            "Next.js App Router & React Hooks",
        ],
        backend: [
            "Next.js Server Rendering",
            "Inquiry & Recruitment Form Handling",
            "WhatsApp Business Integration",
        ],
        features: [
            "Service catalog covering courier, last-mile and enterprise logistics in Qatar",
            "Industry sector solutions and nationwide coverage breakdown",
            "Partner showcase, careers portal and instant quote/contact flows",
            "Fast Next.js page loads with mobile-friendly navigation",
        ],
        screenshots: [],
        storeLinks: {
            liveDemo: "https://simansdelivery.qa",
        },
    },

    daniels_delivery: {
        title: "Daniels Delivery Services",
        cardTitle: "Daniels Delivery",
        tagline:
            "Courier and last-mile logistics web platform built with Next.js.",
        accent: 236,
        category: "web",
        tags: ["Next.js", "Logistics", "Multilingual", "Responsive"],
        description:
            "Web platform for Daniels Delivery Services highlighting dependable courier and logistics operations across Qatar, complete with service overviews, industry verticals, and direct client onboarding.",
        technologies: [
            "Next.js",
            "React",
            "Responsive Layout System",
            "SEO Optimization",
        ],
        stateManagement: [
            "Next.js Server & Client Components",
        ],
        backend: [
            "Next.js API & Form Handling",
            "WhatsApp Direct Inquiry Integration",
        ],
        features: [
            "Clear presentation of courier, parcel and fleet delivery capabilities",
            "Dedicated sections for Qatar coverage, industries served and careers",
            "Fast, responsive Next.js experience across desktop and mobile",
            "Direct WhatsApp and contact workflows for shipment inquiries",
        ],
        screenshots: [],
        storeLinks: {
            liveDemo: "https://danielsdelivery.in",
        },
    },

    belgium_solutions: {
        title: "Belgium Solutions",
        cardTitle: "Belgium Solutions",
        tagline:
            "Supply chain web platform for Belgium Oil Solutions integrating end-to-end operations.",
        accent: 42,
        category: "web",
        tags: ["Next.js", "Supply Chain", "Enterprise", "Vercel"],
        description:
            "Modern web platform for Belgium Oil Solutions (BOS), presenting an integrated end-to-end supply chain solution that connects every link across procurement, logistics, and delivery.",
        technologies: [
            "Next.js",
            "React",
            "Vercel Deployment",
            "Responsive UI",
        ],
        stateManagement: [
            "Next.js App Router & React State",
        ],
        backend: [
            "Next.js Server Rendering",
            "Contact & Inquiry Integration",
        ],
        features: [
            "End-to-end supply chain capability showcase for Belgium Oil Solutions",
            "Clean corporate interface optimized for B2B partners and clients",
            "High-performance Next.js delivery hosted on Vercel",
            "Responsive layout across desktop, tablet and mobile devices",
        ],
        screenshots: [],
        storeLinks: {
            liveDemo: "https://belgium-solutions.vercel.app",
        },
    },

    trackify: {
        title: "Trackify",
        cardTitle: "Trackify",
        tagline:
            "Logistics driver app with trip management, OTP/photo proof and multi-map navigation.",
        accent: 40,
        category: "mobile",
        tags: ["Flutter", "Laravel", "Google Maps", "Firebase"],
        description:
            "Developed Trackify, a logistics driver app with trip management, order tracking, map-based navigation, OTP/photo verification, multi-map support (Google Maps, Waze, etc.), and light/dark mode.",
        technologies: [
            "Flutter",
            "Google Maps SDK",
            "Multi-provider navigation hand-off (Google Maps, Waze)",
            "Camera & image capture for proof of delivery",
            "Firebase Cloud Messaging",
        ],
        stateManagement: ["Provider", "Local trip state persistence"],
        backend: ["Laravel REST API", "Firebase"],
        features: [
            "Trip assignment, start, pause and completion flow",
            "Live order tracking across every stop",
            "Map-based navigation with turn-by-turn hand-off",
            "Multi-map support – Google Maps, Waze and more",
            "OTP verification on delivery",
            "Photo proof capture at drop-off",
            "Delivery history and trip reports",
            "Light and dark mode",
        ],
        screenshots: [],
        storeLinks: {},
    },

    cmap: {
        title: "NEAR C-Map Mobile App",
        cardTitle: "NEAR C-Map",
        tagline:
            "Workforce competency tracking with training programmes and analytics dashboards.",
        cover: "assests/images/C_MAP.png",
        coverFit: "contain",
        accent: 190,
        category: "enterprise",
        tags: ["Flutter", "Analytics", "Provider"],
        description:
            "A comprehensive workforce development platform that enables organizations to enhance their technical competency management. The app streamlines training programs, competency tracking, and professional development through an intuitive mobile interface.",
        technologies: [
            "Flutter with Material Design 3",
            "Real-time analytics dashboard",
            "Performance tracking system",
            "Interactive training modules",
            "Meeting scheduler integration",
        ],
        stateManagement: [
            "Provider state management",
            "Secure data persistence",
            "Real-time synchronization",
        ],
        backend: [
            "Cloud-based infrastructure",
            "Secure API integration",
            "Analytics processing",
            "Meeting management system",
        ],
        features: [
            "Competency level tracking",
            "Training program management",
            "Meeting scheduling system",
            "Online session coordination",
            "Performance analytics dashboard",
            "Data-driven decision support",
            "Team progress monitoring",
            "Professional development tracking",
        ],
        screenshots: [
            {
                url: "assests/images/c-map/cmap1.png",
                caption: "Competency Dashboard",
            },
            {
                url: "assests/images/c-map/cmap2.png",
                caption: "Training Programmes",
            },
            {
                url: "assests/images/c-map/cmap3.png",
                caption: "Team Progress",
            },
            {
                url: "assests/images/c-map/cmap4.png",
                caption: "Analytics & Reports",
            },
        ],
    },

    qtag: {
        title: "Q Tag",
        cardTitle: "Q Tag",
        tagline:
            "NFC employee management — card read/write with role-based central data.",
        accent: 305,
        category: "enterprise",
        tags: ["Flutter", "Django", "NFC"],
        description:
            "Developed QTAG, an NFC-based employee management app supporting card read/write, password management, and centralized employee data with role-based access control.",
        technologies: [
            "Flutter",
            "NFC read / write (NDEF)",
            "Encrypted credential storage",
            "Django REST backend",
        ],
        stateManagement: ["Provider"],
        backend: ["Django REST Framework", "Role-based access control"],
        features: [
            "NFC card reading for instant employee identification",
            "NFC card writing and provisioning",
            "Card password management and rotation",
            "Centralized employee data directory",
            "Role-based access control across the organisation",
            "Audit trail of card operations",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.noga.nfc&hl=en_IN",
        },
    },

    veuz_expense: {
        title: "Veuz Expense",
        cardTitle: "Veuz Expense",
        tagline:
            "Petty cash management — transaction tracking and expense request approvals.",
        accent: 340,
        category: "enterprise",
        tags: ["Flutter", "Odoo", "Firebase"],
        description:
            "Developed Veuz Expense, an in-house app for petty cash management, enabling employees to track transactions and raise expense requests.",
        technologies: [
            "Flutter",
            "Odoo ERP integration",
            "Firebase Cloud Messaging",
            "Receipt image capture & upload",
        ],
        stateManagement: ["Provider"],
        backend: ["Odoo ERP", "REST API", "Firebase"],
        features: [
            "Petty cash balance and transaction ledger",
            "Raise expense requests with receipt attachments",
            "Multi-level approval workflow",
            "Category-wise expense breakdown",
            "Push notifications on approval status",
            "Records synced into Odoo accounting",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/apps/details?id=com.veuz.veuz_expense&hl=en_IN",
        },
    },

    keen_learning: {
        title: "Keen Learning",
        cardTitle: "Keen Learning",
        tagline:
            "Spoken English course app with 40+ video modules streamed through Vimeo.",
        accent: 55,
        category: "mobile",
        tags: ["Flutter", "Odoo", "Vimeo"],
        description:
            "Developed Keen Learning, a spoken English learning app with 40+ video modules, featuring Vimeo integration for smooth video streaming.",
        technologies: [
            "Flutter",
            "Vimeo video streaming integration",
            "Adaptive video playback",
            "Odoo backend integration",
        ],
        stateManagement: ["Provider"],
        backend: ["Odoo", "REST API"],
        features: [
            "40+ structured spoken English video modules",
            "Vimeo integration for smooth adaptive streaming",
            "Module-by-module progress tracking",
            "Resume playback from last watched position",
            "Course enrolment and access control",
        ],
        screenshots: [],
        storeLinks: {
            playStore:
                "https://play.google.com/store/search?q=keen+learning+app&c=apps&hl=en_IN",
        },
    },

    elitco: {
        title: "Elitco",
        cardTitle: "Elitco",
        tagline:
            "B2B/B2C commerce app with advanced inventory and real-time order tracking.",
        cover: "assests/images/ELITCO-LOGO 2.png",
        coverFit: "contain",
        accent: 8,
        category: "mobile",
        tags: ["Flutter", "Provider", "Node.js", "E-commerce"],
        description:
            "A comprehensive B2B/B2C e-commerce platform revolutionizing wholesale and retail operations with advanced inventory management and real-time analytics.",
        technologies: ["Flutter with Material Design 3"],
        stateManagement: ["Provider"],
        backend: ["node js", "express", "mongodb", "firebase"],
        features: [
            "User Authentication & Profiles – Secure login via email, phone, Google",
            "Product Browsing & Search – Advanced filters, sorting",
            "Wishlist & Favorites – Save products for later purchases",
            "Shopping Cart & Checkout – Add/remove items and seamless one-click checkout",
            "Order Tracking & History – Real-time shipment tracking and order history",
        ],
        screenshots: [
            {
                url: "assests/images/Elitco/Home page.png",
                caption: "Home Screen",
            },
            {
                url: "assests/images/Elitco/Home page-Search result.png",
                caption: "Search Results",
            },
            {
                url: "assests/images/Elitco/Product Description.png",
                caption: "Product Description",
            },
        ],
    },

    oceanic_tv: {
        title: "Oceanic TV",
        cardTitle: "Oceanic TV",
        tagline:
            "Streaming app for movies and shows with offline downloads and cross-device sync.",
        cover: "assests/images/oceanic_tv/oceanic_tv1.png",
        coverFit: "cover",
        accent: 210,
        category: "mobile",
        tags: ["Flutter", "GetX", "Video Player"],
        description:
            "Oceanic TV is a modern streaming application offering a vast library of movies, TV shows, and exclusive original content. It features a personalized user experience with smart recommendations, cross-device synchronization, and offline viewing capabilities for entertainment on the go.",
        technologies: ["Flutter", "Dart", "Video Player", "RESTful APIs"],
        stateManagement: ["GetX"],
        backend: ["RESTful APIs"],
        features: [
            "Extensive content library of movies and TV shows",
            "Personalized recommendations and user profiles",
            "Cross-device synchronization of viewing history",
            "Offline downloads for on-the-go viewing",
            "Intuitive and user-friendly interface",
        ],
        screenshots: [
            {
                url: "assests/images/oceanic_tv/oceanic_tv1.png",
                caption: "Home Screen",
            },
            {
                url: "assests/images/oceanic_tv/oceanic_tv2.png",
                caption: "Content Details",
            },
            {
                url: "assests/images/oceanic_tv/oceanic_tv3.png",
                caption: "Video Player",
            },
        ],
    },

    dive: {
        title: "DIVE - Dive Into SelfCare",
        cardTitle: "DIVE",
        tagline:
            "Self-care companion for routines, goals, journaling and daily progress.",
        cover: "assests/images/dive1.svg",
        coverFit: "cover",
        accent: 275,
        category: "mobile",
        tags: ["Flutter", "Node.js", "MongoDB", "Firebase"],
        description:
            "A premium self-care platform helping people build routines that stick — with personalised check-ins, guided meditation, journaling and daily progress tracking.",
        technologies: [
            "Flutter",
            "Dart",
            "Material Design 3",
            "Custom Animations & Transitions",
            "RESTful APIs",
        ],
        stateManagement: ["Provider"],
        backend: ["node js", "express", "mongodb", "firebase"],
        features: [
            "Login with email, phone and Google",
            "Track personal routines",
            "Guided meditation sessions",
            "Daily quotes",
            "Daily tasks",
            "Daily goals",
            "Daily notes and journaling",
            "Daily reminders",
            "Daily progress tracking",
            "Achievement tracking",
        ],
        screenshots: [
            {
                url: "assests/images/dive1.svg",
                caption: "Elegant Home Screen with Personalized Recommendations",
            },
            {
                url: "assests/images/Dive/CHECKIN.svg",
                caption: "Daily Check-in Flow",
            },
            {
                url: "assests/images/Dive/what brings you here (1).png",
                caption: "Personalised Onboarding",
            },
            {
                url: "assests/images/Dive/Signup.png",
                caption: "Sign Up",
            },
            {
                url: "assests/images/Dive/what brings you here.png",
                caption: "Goal Selection",
            },
        ],
    },

    alaa_fuels: {
        title: "Alaa Fuels",
        cardTitle: "Alaa Fuels",
        tagline:
            "Fuel-station loyalty app — scan bills, earn points, redeem rewards.",
        cover: "assests/images/Alaa_Fuels_Logo-removebg-preview 1.png",
        coverFit: "contain",
        accent: 32,
        category: "mobile",
        tags: ["FlutterFlow", "PocketBase", "Loyalty"],
        description:
            "Alaa Fuels is a petrol pump loyalty and rewards app, designed to attract and retain customers by offering a point-based reward system. Users can upload their fuel purchase bills, earn points, and redeem them for rewards. The app provides real-time transaction tracking, seamless digital payments, and exclusive fuel discounts.",
        technologies: ["Flutter Flow"],
        stateManagement: ["FlutterFlow's built-in state management"],
        backend: ["pocketbase"],
        features: [
            "Loyalty Points System – Earn and redeem points on fuel purchases",
            "Bill Upload & Verification – Scan & upload receipts for instant rewards",
            "Fuel Discounts & Offers – Special promotions for loyal customers",
            "Dynamic pricing system",
        ],
        screenshots: [
            {
                url: "assests/images/alaa- autofuels/Home.png",
                caption: "Home",
            },
            {
                url: "assests/images/alaa- autofuels/Scanner.png",
                caption: "Bill Scanner",
            },
            {
                url: "assests/images/alaa- autofuels/Signup Screen.png",
                caption: "Sign Up",
            },
            {
                url: "assests/images/alaa- autofuels/Transactions.png",
                caption: "Transactions",
            },
        ],
    },

    aadkar: {
        title: "Aadkar - Islamic Daily Remembrance",
        cardTitle: "Aadkar",
        tagline:
            "Daily adhkar with time-based reminders, Arabic text and offline support.",
        cover: "assests/images/adkaar_app_logo.png",
        coverFit: "contain",
        accent: 160,
        category: "mobile",
        tags: ["Flutter", "Firebase", "Notifications"],
        description:
            "A beautiful and intuitive Islamic app helping Muslims worldwide complete their daily morning, evening, and night adhkar with automated reminders and authentic content based on Shaikh Abdul Aziz Al-Tarefe's teachings.",
        technologies: [
            "Flutter with Material Design 3",
            "Local notifications system",
            "Prayer time calculations",
            "Arabic text rendering",
            "Offline content support",
        ],
        stateManagement: [
            "Provider state management",
            "Local storage persistence",
            "Prayer time scheduling",
        ],
        backend: [
            "Firebase for user preferences",
            "Cloud synchronization",
            "Prayer time API integration",
            "Secure data storage",
        ],
        features: [
            "Morning, evening & night adhkar collections",
            "Automated time-based reminders",
            "Progress tracking for daily adhkar",
            "Arabic text with translations",
            "Location-based prayer times",
            "Offline mode support",
            "Customizable notifications",
            "Dark mode and light mode",
            "Customizable themes",
        ],
        screenshots: [
            {
                url: "assests/images/adkar/aadkar.png",
                caption: "Daily Adhkar Dashboard",
            },
            {
                url: "assests/images/adkar/adkar2.png",
                caption: "Settings",
            },
            {
                url: "assests/images/adkar/adkar3.png",
                caption: "Customization Settings",
            },
            {
                url: "assests/images/adkar/adkar4.png",
                caption: "Theme Customization",
            },
        ],
    },

    pollutionreminder: {
        title: "Pollution Reminder",
        cardTitle: "Pollution Reminder",
        tagline:
            "Bulk messaging for vehicle test centres — automated certificate renewal reminders.",
        accent: 75,
        category: "enterprise",
        tags: ["Flutter", "Bulk SMS", "Automation"],
        description:
            "A bulk messaging system for vehicle pollution test centers to notify customers about expiring pollution certificates and due renewals.",
        technologies: [
            "Flutter",
            "Bulk SMS gateway integration",
            "Scheduled job runner",
            "CSV import for customer records",
        ],
        stateManagement: ["Provider"],
        backend: ["REST API", "SMS gateway"],
        features: [
            "Customer and vehicle record management",
            "Automatic detection of expiring pollution certificates",
            "Scheduled bulk SMS campaigns",
            "Custom message templates",
            "Delivery reports per campaign",
            "Bulk import of customer records",
        ],
        screenshots: [],
        storeLinks: {},
    },
};

/** Filters rendered above the project grid, in order. */
const projectCategories = [
    { id: "all", label: "All Work" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "enterprise", label: "Enterprise" },
    { id: "web", label: "Web" },
    { id: "desktop", label: "Desktop" },
];

if (typeof module !== "undefined") {
    module.exports = { projectsData, projectCategories };
}
