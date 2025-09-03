document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-navLink]')

    navLinks.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            link.setAttribute('aria-current', 'page')
        }
    })

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle')

    function setTheme(isDark) {
        // Set data-theme attribute instead of classes
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }

    function getStoredTheme() {
        return localStorage.getItem('theme')
    }

    function getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    function applyTheme() {
        const storedTheme = getStoredTheme()
        const systemTheme = getSystemPreference()
        const isDark = storedTheme ? storedTheme === 'dark' : systemTheme === 'dark'
        setTheme(isDark)
    }

    // Initialize theme
    applyTheme()

    // Theme toggle button event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark'
            setTheme(!isCurrentlyDark)
        })
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!getStoredTheme()) {
            setTheme(e.matches)
        }
    })
})