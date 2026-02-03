// Funcionalidad para detección y cambio de idioma
document.addEventListener('DOMContentLoaded', function() {
    // Detectar el idioma del navegador
    function detectBrowserLanguage() {
        const language = navigator.language || navigator.userLanguage;
        // Obtener los primeros 2 caracteres para el código de idioma (ej: 'es', 'en', 'fr', 'de', 'it')
        return language.substring(0, 2);
    }

    // Mapear los códigos de idioma a los idiomas soportados
    function mapLanguageCode(langCode) {
        const supportedLanguages = {
            'es': 'es', // Español
            'en': 'en', // Inglés
            'fr': 'fr', // Francés
            'de': 'de', // Alemán
            'it': 'it'  // Italiano
        };
        
        // Si el idioma detectado está soportado, usarlo; de lo contrario, usar inglés como predeterminado
        return supportedLanguages[langCode] || 'en';
    }

    // Cambiar el idioma de la página
    function changeLanguage(langCode) {
        
        // Actualizar el atributo lang del documento HTML
        document.documentElement.lang = langCode;
        
        // Ocultar todos los contenidos de idioma
        document.querySelectorAll('[lang]').forEach(element => {
            element.style.display = 'none';
        });
        
        // Mostrar solo el contenido del idioma seleccionado
        document.querySelectorAll(`[lang="${langCode}"]`).forEach(element => {
            element.style.display = 'block';
        });
        
        // Actualizar el selector de idioma
        document.querySelectorAll('.language-selector select, .mobile-language-selector select').forEach(select => {
            select.value = langCode;
        });
        
        // Guardar la preferencia de idioma en localStorage
        localStorage.setItem('preferredLanguage', langCode);
    }

    // Inicializar la página con el idioma correcto
    function initializeLanguage() {
        // Comprobar si hay una preferencia guardada
        const savedLanguage = localStorage.getItem('preferredLanguage');
        
        if (savedLanguage) {
            // Usar el idioma guardado si existe
            changeLanguage(savedLanguage);
        } else {
            // Detectar y usar el idioma del navegador
            const browserLang = detectBrowserLanguage();
            const mappedLang = mapLanguageCode(browserLang);
            changeLanguage(mappedLang);
        }
    }

    // Configurar los selectores de idioma
    function setupLanguageSelectors() {
        document.querySelectorAll('.language-selector select, .mobile-language-selector select').forEach(select => {
            select.addEventListener('change', function() {
                changeLanguage(this.value);
            });
        });
    }

    // Inicializar todo
    initializeLanguage();
    setupLanguageSelectors();
});
