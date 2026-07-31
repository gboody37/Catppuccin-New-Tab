// Catppuccin New Tab Logic (ASCII Cat & Bongo Cat)
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // SVG ICON MAP
    // ==========================================
    const svgIcons = {
        google: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.761l-9.426.000z"/></svg>`,
        duckduckgo: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,
        youtube: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
        github: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
        reddit: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-4.566 3.475a.328.328 0 0 0-.026.463c.53.606 1.34.966 2.22.966.88 0 1.69-.36 2.22-.966a.328.328 0 0 0-.489-.439c-.415.474-1.077.755-1.731.755s-1.316-.28-1.731-.755a.328.328 0 0 0-.463-.024z"/></svg>`,
        chatgpt: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14.93V18h-2v-1.07A6.002 6.002 0 0 1 6.07 13H5v-2h1.07A6.002 6.002 0 0 1 11 6.07V5h2v1.07A6.002 6.002 0 0 1 17.93 11H19v2h-1.07A6.002 6.002 0 0 1 13 16.93zM12 8a4 4 0 1 0 4 4 4.005 4.005 0 0 0-4-4z"/></svg>`,
        perplexity: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        twitter: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        twitch: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,
        spotify: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.38-1.32 9.78-.66 13.44 1.62.42.24.6.78.3 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z"/></svg>`,
        link: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`,
        soundOn: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        soundOff: `<svg class="svg-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`
    };

    // ==========================================
    // INITIALIZATION & STATE
    // ==========================================
    const state = {
        theme: localStorage.getItem('catTheme') || 'mocha',
        mode: localStorage.getItem('catMode') || 'ascii', // Default to Zei ASCII Mode!
        hasBgImage: localStorage.getItem('hasBgImage') !== 'false',
        soundEnabled: localStorage.getItem('soundEnabled') === 'true',
        searchEngine: localStorage.getItem('searchEngine') || 'google',
        shortcuts: JSON.parse(localStorage.getItem('shortcuts')) || [
            { id: '1', title: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
            { id: '2', title: 'GitHub', url: 'https://github.com', icon: 'github' },
            { id: '3', title: 'Reddit', url: 'https://reddit.com', icon: 'reddit' },
            { id: '4', title: 'ChatGPT', url: 'https://chatgpt.com', icon: 'chatgpt' },
            { id: '5', title: 'Twitter', url: 'https://x.com', icon: 'twitter' },
            { id: '6', title: 'Twitch', url: 'https://twitch.tv', icon: 'twitch' },
            { id: '7', title: 'Spotify', url: 'https://spotify.com', icon: 'spotify' }
        ],
        notes: localStorage.getItem('catNotes') || ''
    };

    document.querySelectorAll('.opt-icon').forEach(el => {
        const iconKey = el.dataset.icon;
        if (svgIcons[iconKey]) el.innerHTML = svgIcons[iconKey];
    });

    // ==========================================
    // MODE CONTROLLER (ASCII vs Bongo)
    // ==========================================
    const asciiCatContainer = document.getElementById('asciiCatContainer');
    const bongoCatContainer = document.getElementById('bongoCatContainer');
    const modeAsciiBtn = document.getElementById('modeAsciiBtn');
    const modeBongoBtn = document.getElementById('modeBongoBtn');

    function applyMode(modeName) {
        state.mode = modeName;
        localStorage.setItem('catMode', modeName);

        if (modeName === 'ascii') {
            asciiCatContainer.classList.remove('hidden');
            bongoCatContainer.classList.add('hidden');
            modeAsciiBtn.classList.add('active');
            modeBongoBtn.classList.remove('active');
        } else {
            asciiCatContainer.classList.add('hidden');
            bongoCatContainer.classList.remove('hidden');
            modeBongoBtn.classList.add('active');
            modeAsciiBtn.classList.remove('active');
        }
    }

    applyMode(state.mode);

    modeAsciiBtn.addEventListener('click', () => applyMode('ascii'));
    modeBongoBtn.addEventListener('click', () => applyMode('bongo'));

    // ==========================================
    // ZEI EXACT CAT PICTURE CONTROLLER
    // ==========================================
    const catImage = document.getElementById('catImage');
    if (catImage) {
        catImage.src = 'zei_cat_exact.png';
    }

    function reactAsciiCat() {
        playTypeSound();
    }

    if (asciiCatContainer) {
        asciiCatContainer.addEventListener('click', () => {
            playTypeSound();
        });
    }

    // ==========================================
    // THEME & BACKGROUND CONTROLLER
    // ==========================================
    function applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        state.theme = themeName;
        localStorage.setItem('catTheme', themeName);

        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.flavor === themeName);
        });
    }

    applyTheme(state.theme);

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => applyTheme(btn.dataset.flavor));
    });

    const toggleWallpaperBtn = document.getElementById('toggleWallpaperBtn');
    function applyWallpaperState() {
        if (state.hasBgImage) {
            document.body.classList.add('has-bg-image');
            toggleWallpaperBtn.style.color = 'var(--cat-mauve)';
        } else {
            document.body.classList.remove('has-bg-image');
            toggleWallpaperBtn.style.color = 'var(--cat-subtext0)';
        }
    }
    applyWallpaperState();

    toggleWallpaperBtn.addEventListener('click', () => {
        state.hasBgImage = !state.hasBgImage;
        localStorage.setItem('hasBgImage', state.hasBgImage);
        applyWallpaperState();
    });

    // ==========================================
    // AUDIO SYNTHESIZER
    // ==========================================
    const toggleSoundBtn = document.getElementById('toggleSoundBtn');
    const updateSoundBtnUI = () => {
        if (state.soundEnabled) {
            toggleSoundBtn.classList.add('active-sound');
            toggleSoundBtn.innerHTML = svgIcons.soundOn;
            toggleSoundBtn.title = 'Typing Sound: ON';
        } else {
            toggleSoundBtn.classList.remove('active-sound');
            toggleSoundBtn.innerHTML = svgIcons.soundOff;
            toggleSoundBtn.title = 'Typing Sound: OFF';
        }
    };
    updateSoundBtnUI();

    toggleSoundBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('soundEnabled', state.soundEnabled);
        updateSoundBtnUI();
    });

    let audioCtx = null;
    function playTypeSound() {
        if (!state.soundEnabled) return;
        try {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(400 + Math.random() * 200, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.05);

            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 0.05);
        } catch (e) {}
    }

    // ==========================================
    // INTERACTIVE BONGO CAT SVG
    // ==========================================
    const bongoCat = document.getElementById('bongoCat');
    const pawLeftUp = document.getElementById('pawLeftUp');
    const pawLeftDown = document.getElementById('pawLeftDown');
    const pawRightUp = document.getElementById('pawRightUp');
    const pawRightDown = document.getElementById('pawRightDown');

    const eyesOpen = document.getElementById('eyesOpen');
    const eyesHappy = document.getElementById('eyesHappy');
    const eyesSleepy = document.getElementById('eyesSleepy');
    const pupilLeft = document.getElementById('pupilLeft');
    const pupilRight = document.getElementById('pupilRight');
    const catMouth = document.getElementById('catMouth');
    const catMouthOpen = document.getElementById('catMouthOpen');

    let currentPaw = 'left';
    let pawResetTimeout = null;
    let idleTimeout = null;

    function tapPaw() {
        if (state.mode === 'ascii') {
            reactAsciiCat();
            return;
        }

        playTypeSound();
        wakeCatUp();

        if (currentPaw === 'left') {
            pawLeftUp.classList.add('hidden');
            pawLeftDown.classList.remove('hidden');
            pawRightUp.classList.remove('hidden');
            pawRightDown.classList.add('hidden');
            currentPaw = 'right';
        } else {
            pawRightUp.classList.add('hidden');
            pawRightDown.classList.remove('hidden');
            pawLeftUp.classList.remove('hidden');
            pawLeftDown.classList.add('hidden');
            currentPaw = 'left';
        }

        clearTimeout(pawResetTimeout);
        pawResetTimeout = setTimeout(() => {
            pawLeftUp.classList.remove('hidden');
            pawLeftDown.classList.add('hidden');
            pawRightUp.classList.remove('hidden');
            pawRightDown.classList.add('hidden');
        }, 150);
    }

    function wakeCatUp() {
        eyesSleepy.classList.add('hidden');
        eyesOpen.classList.remove('hidden');
        resetIdleTimer();
    }

    function resetIdleTimer() {
        clearTimeout(idleTimeout);
        idleTimeout = setTimeout(() => {
            eyesOpen.classList.add('hidden');
            eyesHappy.classList.add('hidden');
            eyesSleepy.classList.remove('hidden');
        }, 20000);
    }
    resetIdleTimer();

    // Mouse Tracking Pupils
    document.addEventListener('mousemove', (e) => {
        if (state.mode !== 'bongo') return;
        wakeCatUp();
        const rect = bongoCat.getBoundingClientRect();
        const catCenterX = rect.left + rect.width / 2;
        const catCenterY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - catCenterX) / window.innerWidth;
        const deltaY = (e.clientY - catCenterY) / window.innerHeight;

        const maxOffset = 3.5;
        const pupilX = deltaX * maxOffset;
        const pupilY = deltaY * maxOffset;

        pupilLeft.setAttribute('cx', 205 + pupilX);
        pupilLeft.setAttribute('cy', 150 + pupilY);
        pupilRight.setAttribute('cx', 295 + pupilX);
        pupilRight.setAttribute('cy', 150 + pupilY);
    });

    // Keypress Event Handler
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            tapPaw();
        } else if (e.key === '/') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });

    bongoCat.addEventListener('click', () => {
        eyesOpen.classList.add('hidden');
        eyesSleepy.classList.add('hidden');
        eyesHappy.classList.remove('hidden');
        catMouth.classList.add('hidden');
        catMouthOpen.classList.remove('hidden');
        playTypeSound();

        setTimeout(() => {
            eyesHappy.classList.add('hidden');
            catMouthOpen.classList.add('hidden');
            eyesOpen.classList.remove('hidden');
            catMouth.classList.remove('hidden');
        }, 1500);
    });

    // ==========================================
    // CLOCK & GREETING
    // ==========================================
    const timeDisplay = document.getElementById('timeDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
    const greetingDisplay = document.getElementById('greetingDisplay');

    function updateClock() {
        const now = new Date();
        const rawHours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');

        if (state.clockFormat === '12') {
            const displayHours = rawHours % 12 || 12;
            const ampm = rawHours >= 12 ? 'PM' : 'AM';
            timeDisplay.textContent = `${displayHours}:${minutes} ${ampm}`;
        } else {
            const hours = String(rawHours).padStart(2, '0');
            timeDisplay.textContent = `${hours}:${minutes}`;
        }

        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString(undefined, options);

        const hourNum = rawHours;
        let greeting = 'Good Evening ✨';
        if (hourNum >= 5 && hourNum < 12) greeting = 'Good Morning ✨';
        else if (hourNum >= 12 && hourNum < 18) greeting = 'Good Afternoon ☀️';
        else if (hourNum >= 18 && hourNum < 22) greeting = 'Good Evening 🌙';
        else greeting = 'Night Owl Mode 🦉';

        greetingDisplay.textContent = greeting;
    }

    updateClock();
    setInterval(updateClock, 1000);

    // ==========================================
    // WEATHER WIDGET
    // ==========================================
    const weatherTemp = document.getElementById('weatherTemp');
    const weatherCity = document.getElementById('weatherCity');

    const cachedWeather = JSON.parse(localStorage.getItem('catWeather') || 'null');
    if (cachedWeather) {
        weatherTemp.textContent = cachedWeather.temp;
        weatherCity.textContent = cachedWeather.city;
    } else {
        weatherTemp.textContent = '22°C';
        weatherCity.textContent = 'Catppuccin City';
    }

    async function fetchWeatherByCity(cityName) {
        try {
            const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`);
            const geoData = await geoRes.json();
            if (geoData.results && geoData.results.length > 0) {
                const loc = geoData.results[0];
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`);
                const data = await res.json();
                if (data.current_weather) {
                    const temp = `${Math.round(data.current_weather.temperature)}°C`;
                    const city = loc.name;
                    weatherTemp.textContent = temp;
                    weatherCity.textContent = city;
                    localStorage.setItem('catWeather', JSON.stringify({ temp, city }));
                }
            }
        } catch (e) {}
    }

    function initWeather() {
        const savedCity = localStorage.getItem('catWeatherCity');
        if (savedCity) {
            fetchWeatherByCity(savedCity);
            return;
        }

        setTimeout(() => {
            if (!navigator.geolocation) return;
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    try {
                        const lat = pos.coords.latitude;
                        const lon = pos.coords.longitude;
                        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
                        const data = await res.json();
                        if (data.current_weather) {
                            const temp = `${Math.round(data.current_weather.temperature)}°C`;
                            const city = 'Local Weather';
                            weatherTemp.textContent = temp;
                            weatherCity.textContent = city;
                            localStorage.setItem('catWeather', JSON.stringify({ temp, city }));
                        }
                    } catch (e) {}
                },
                () => {},
                { timeout: 1500, maximumAge: 600000 }
            );
        }, 100);
    }
    initWeather();

    // ==========================================
    // SEARCH ENGINE SELECTOR & SUBMIT
    // ==========================================
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const engineBtn = document.getElementById('engineBtn');
    const engineIcon = document.getElementById('engineIcon');
    const engineMenu = document.getElementById('engineMenu');

    const engines = {
        google: { name: 'Google', iconKey: 'google', url: 'https://www.google.com/search?q=' },
        duckduckgo: { name: 'DuckDuckGo', iconKey: 'duckduckgo', url: 'https://duckduckgo.com/?q=' },
        youtube: { name: 'YouTube', iconKey: 'youtube', url: 'https://www.youtube.com/results?search_query=' },
        github: { name: 'GitHub', iconKey: 'github', url: 'https://github.com/search?q=' },
        reddit: { name: 'Reddit', iconKey: 'reddit', url: 'https://www.reddit.com/search/?q=' },
        perplexity: { name: 'Perplexity', iconKey: 'perplexity', url: 'https://www.perplexity.ai/search?q=' }
    };

    function setEngine(engineKey) {
        if (!engines[engineKey]) engineKey = 'google';
        state.searchEngine = engineKey;
        localStorage.setItem('searchEngine', engineKey);

        engineIcon.innerHTML = svgIcons[engines[engineKey].iconKey] || svgIcons.google;

        document.querySelectorAll('.engine-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.engine === engineKey);
        });

        engineMenu.classList.remove('open');
    }

    setEngine(state.searchEngine);

    engineBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        engineMenu.classList.toggle('open');
    });

    document.addEventListener('click', () => engineMenu.classList.remove('open'));

    document.querySelectorAll('.engine-option').forEach(opt => {
        opt.addEventListener('click', () => setEngine(opt.dataset.engine));
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (!query) return;

        const isUrl = /^https?:\/\//i.test(query) || (query.includes('.') && !query.includes(' '));
        if (isUrl) {
            window.location.href = query.startsWith('http') ? query : `https://${query}`;
        } else {
            const searchUrl = engines[state.searchEngine].url + encodeURIComponent(query);
            window.location.href = searchUrl;
        }
    });

    // ==========================================
    // SHORTCUTS MANAGER
    // ==========================================
    const shortcutsGrid = document.getElementById('shortcutsGrid');

    function renderShortcuts() {
        shortcutsGrid.innerHTML = '';
        state.shortcuts.forEach((sc) => {
            const item = document.createElement('a');
            item.className = 'shortcut-item';
            item.href = sc.url;
            item.title = sc.title;

            const iconDiv = document.createElement('div');
            iconDiv.className = 'shortcut-icon';

            const iconSvg = svgIcons[sc.icon] || svgIcons.link;
            iconDiv.innerHTML = iconSvg;

            const titleSpan = document.createElement('span');
            titleSpan.className = 'shortcut-title';
            titleSpan.textContent = sc.title;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-shortcut-btn';
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteShortcut(sc.id);
            });

            item.appendChild(iconDiv);
            item.appendChild(titleSpan);
            item.appendChild(deleteBtn);
            shortcutsGrid.appendChild(item);
        });
    }

    function deleteShortcut(id) {
        state.shortcuts = state.shortcuts.filter(sc => sc.id !== id);
        localStorage.setItem('shortcuts', JSON.stringify(state.shortcuts));
        renderShortcuts();
    }

    renderShortcuts();

    // Modal Add Shortcut
    const addShortcutBtn = document.getElementById('addShortcutBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const addShortcutForm = document.getElementById('addShortcutForm');

    addShortcutBtn.addEventListener('click', () => modalOverlay.classList.add('open'));
    closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });

    addShortcutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('shortcutTitle').value.trim();
        let url = document.getElementById('shortcutUrl').value.trim();
        const iconKey = document.getElementById('shortcutIcon').value || 'link';

        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        const newShortcut = {
            id: Date.now().toString(),
            title,
            url,
            icon: iconKey
        };

        state.shortcuts.push(newShortcut);
        localStorage.setItem('shortcuts', JSON.stringify(state.shortcuts));
        renderShortcuts();

        addShortcutForm.reset();
        modalOverlay.classList.remove('open');
    });

    // ==========================================
    // SETTINGS MODAL CONTROLLER
    // ==========================================
    const openSettingsBtn = document.getElementById('openSettingsBtn');
    const settingsModalOverlay = document.getElementById('settingsModalOverlay');
    const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');

    // Custom Background (Image / Video) IndexedDB Engine
    const bgVideo = document.getElementById('bgVideo');
    const settingBgFileInput = document.getElementById('settingBgFileInput');
    const triggerBgUploadBtn = document.getElementById('triggerBgUploadBtn');
    const clearBgBtn = document.getElementById('clearBgBtn');
    const settingBgUrlInput = document.getElementById('settingBgUrlInput');

    let pendingFileBlob = null;
    let pendingFileType = null;

    // IndexedDB Helper for large media files (Videos & Images)
    function openCatDB() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open('CatppuccinNewTabDB', 1);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('bgStore')) {
                    db.createObjectStore('bgStore');
                }
            };
            req.onsuccess = (e) => resolve(e.target.result);
            req.onerror = (e) => reject(e.target.error);
        });
    }

    async function saveBgToIDB(blob, type) {
        try {
            const db = await openCatDB();
            const tx = db.transaction('bgStore', 'readwrite');
            const store = tx.objectStore('bgStore');
            store.put(blob, 'customBgBlob');
            store.put(type, 'customBgType');
        } catch (e) {
            console.error('IDB save error:', e);
        }
    }

    async function loadBgFromIDB() {
        try {
            const db = await openCatDB();
            const tx = db.transaction('bgStore', 'readonly');
            const store = tx.objectStore('bgStore');
            const blobReq = store.get('customBgBlob');
            const typeReq = store.get('customBgType');
            return new Promise((resolve) => {
                tx.oncomplete = () => {
                    if (blobReq.result && typeReq.result) {
                        const blobUrl = URL.createObjectURL(blobReq.result);
                        resolve({ type: typeReq.result, url: blobUrl });
                    } else {
                        resolve(null);
                    }
                };
            });
        } catch (e) {
            return null;
        }
    }

    async function clearBgFromIDB() {
        try {
            const db = await openCatDB();
            const tx = db.transaction('bgStore', 'readwrite');
            const store = tx.objectStore('bgStore');
            store.delete('customBgBlob');
            store.delete('customBgType');
        } catch (e) {}
    }

    function applyCustomBackground(type, dataUrl) {
        if (!type || !dataUrl) {
            bgWallpaper.style.backgroundImage = "url('catppuccin_wallpaper.jpg')";
            if (bgVideo) {
                bgVideo.pause();
                bgVideo.src = '';
                bgVideo.classList.add('hidden');
            }
            bgWallpaper.classList.remove('hidden');
            return;
        }

        if (type === 'video') {
            bgWallpaper.classList.add('hidden');
            if (bgVideo) {
                bgVideo.src = dataUrl;
                bgVideo.classList.remove('hidden');
                bgVideo.play().catch(() => {});
            }
        } else {
            if (bgVideo) {
                bgVideo.pause();
                bgVideo.src = '';
                bgVideo.classList.add('hidden');
            }
            bgWallpaper.style.backgroundImage = `url("${dataUrl}")`;
            bgWallpaper.classList.remove('hidden');
        }
    }

    // Initial load: check IndexedDB first, then localStorage fallback for URLs
    async function initBackgroundMedia() {
        const idbMedia = await loadBgFromIDB();
        if (idbMedia) {
            applyCustomBackground(idbMedia.type, idbMedia.url);
            return;
        }

        const urlData = localStorage.getItem('catCustomBgUrlData');
        const urlType = localStorage.getItem('catCustomBgUrlType');
        if (urlData && urlType) {
            applyCustomBackground(urlType, urlData);
        } else {
            applyCustomBackground(null, null);
        }
    }
    initBackgroundMedia();

    if (triggerBgUploadBtn && settingBgFileInput) {
        triggerBgUploadBtn.addEventListener('click', () => settingBgFileInput.click());
        settingBgFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            pendingFileBlob = file;
            pendingFileType = file.type.startsWith('video/') ? 'video' : 'image';
            if (settingBgUrlInput) settingBgUrlInput.value = '';
            triggerBgUploadBtn.textContent = `Selected: ${file.name.substring(0, 15)}...`;
        });
    }

    if (clearBgBtn) {
        clearBgBtn.addEventListener('click', async () => {
            pendingFileBlob = null;
            pendingFileType = null;
            if (settingBgUrlInput) settingBgUrlInput.value = '';
            if (settingBgFileInput) settingBgFileInput.value = '';
            if (triggerBgUploadBtn) triggerBgUploadBtn.textContent = 'Upload Image / Video File';
            localStorage.removeItem('catCustomBgUrlData');
            localStorage.removeItem('catCustomBgUrlType');
            await clearBgFromIDB();
            applyCustomBackground(null, null);
        });
    }

    state.clockFormat = localStorage.getItem('catClockFormat') || '24';

    function openSettingsModal() {
        if (!settingsModalOverlay) return;
        settingCatMode.value = state.mode;
        settingTheme.value = state.theme;
        settingClockFormat.value = state.clockFormat;
        settingSoundToggle.checked = state.soundEnabled;
        settingBgToggle.checked = state.hasBgImage;
        settingWeatherCity.value = localStorage.getItem('catWeatherCity') || '';

        settingsModalOverlay.classList.add('open');
    }

    function closeSettingsModal() {
        if (settingsModalOverlay) settingsModalOverlay.classList.remove('open');
    }

    if (openSettingsBtn) openSettingsBtn.addEventListener('click', openSettingsModal);
    if (closeSettingsModalBtn) closeSettingsModalBtn.addEventListener('click', closeSettingsModal);

    if (settingsModalOverlay) {
        settingsModalOverlay.addEventListener('click', (e) => {
            if (e.target === settingsModalOverlay) closeSettingsModal();
        });
    }

    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', async () => {
            // 1. If file uploaded, save Blob to IndexedDB
            if (pendingFileBlob && pendingFileType) {
                await saveBgToIDB(pendingFileBlob, pendingFileType);
                const blobUrl = URL.createObjectURL(pendingFileBlob);
                applyCustomBackground(pendingFileType, blobUrl);
                pendingFileBlob = null;
                pendingFileType = null;
            } else {
                // 2. If URL input entered
                const urlInput = settingBgUrlInput ? settingBgUrlInput.value.trim() : '';
                if (urlInput) {
                    const isVideo = urlInput.match(/\.(mp4|webm|ogg)($|\?)/i);
                    const type = isVideo ? 'video' : 'image';
                    localStorage.setItem('catCustomBgUrlData', urlInput);
                    localStorage.setItem('catCustomBgUrlType', type);
                    applyCustomBackground(type, urlInput);
                }
            }

            // Apply Cat Mode
            applyMode(settingCatMode.value);

            // Apply Theme
            applyTheme(settingTheme.value);

            // Apply Clock Format
            state.clockFormat = settingClockFormat.value;
            localStorage.setItem('catClockFormat', state.clockFormat);
            updateClock();

            // Apply Sound
            state.soundEnabled = settingSoundToggle.checked;
            localStorage.setItem('catSoundEnabled', state.soundEnabled);
            updateSoundIcon();

            // Apply Wallpaper Layer
            state.hasBgImage = settingBgToggle.checked;
            localStorage.setItem('catHasBgImage', state.hasBgImage);
            applyWallpaperState();

            // Apply Custom Weather City
            const cityInput = settingWeatherCity.value.trim();
            if (cityInput) {
                localStorage.setItem('catWeatherCity', cityInput);
                fetchWeatherByCity(cityInput);
            } else {
                localStorage.removeItem('catWeatherCity');
                initWeather();
            }

            closeSettingsModal();
        });
    }

    // Close Modals on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeSettingsModal();
            closeNotesDrawer();
            if (engineMenu) engineMenu.classList.remove('open');
        }
    });

    // ==========================================
    // QUICK NOTES DRAWER
    // ==========================================
    const toggleNotesBtn = document.getElementById('toggleNotesBtn');
    const notesDrawer = document.getElementById('notesDrawer');
    const closeNotesBtn = document.getElementById('closeNotesBtn');
    const notesTextarea = document.getElementById('notesTextarea');

    notesTextarea.value = state.notes;

    toggleNotesBtn.addEventListener('click', () => notesDrawer.classList.toggle('open'));
    closeNotesBtn.addEventListener('click', () => notesDrawer.classList.remove('open'));

    notesTextarea.addEventListener('input', (e) => {
        state.notes = e.target.value;
        localStorage.setItem('catNotes', state.notes);
    });

    // ==========================================
    // QUOTE OF THE DAY
    // ==========================================
    const quotes = [
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
        { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
        { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
        { text: "Fix the cause, not the symptom.", author: "Steve Maguire" }
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').textContent = `"${randomQuote.text}"`;
    document.getElementById('quoteAuthor').textContent = `- ${randomQuote.author}`;

    // ==========================================
    // ANIMATED CANVAS BACKGROUND
    // ==========================================
    function initBgCanvas() {
        const canvas = document.getElementById('bgCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const stars = Array.from({ length: 50 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.015 + 0.005,
            vy: -(Math.random() * 0.3 + 0.1)
        }));

        function animate() {
            ctx.clearRect(0, 0, width, height);

            const style = getComputedStyle(document.documentElement);
            const lavender = style.getPropertyValue('--cat-lavender').trim() || '#b4bfe7';

            stars.forEach(s => {
                s.alpha += s.speed;
                s.y += s.vy;
                if (s.y < 0) {
                    s.y = height;
                    s.x = Math.random() * width;
                }

                const opacity = (Math.sin(s.alpha) + 1) / 2 * 0.7 + 0.2;
                ctx.fillStyle = lavender;
                ctx.globalAlpha = opacity * 0.6;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }

    initBgCanvas();
});
