// footer_8m.js

const footerCode = `
<style>
    /* ESTO FUERZA A LA PÁGINA A APILARSE EN VERTICAL */
    body {
        flex-direction: column !important;
        align-items: center !important;
        justify-content: space-between !important;
        min-height: 100vh;
    }
    
    .custom-footer {
        background-color: transparent;
        padding: 40px 20px 20px 20px;
        text-align: center;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        color: #6B7280;
        font-size: 0.95rem;
        border-top: 1px solid #E5E7EB;
        margin-top: auto; /* Esto empuja el footer hacia el final */
        width: 100%;
        max-width: 1000px;
        box-sizing: border-box;
        line-height: 1.6;
    }
    .custom-footer p { 
        margin: 8px 0; 
    }
    .custom-footer strong {
        color: #374151;
        font-family: 'Georgia', serif;
        font-size: 1.1rem;
    }
    .custom-footer a.school-link {
        color: #9333EA;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
    }
    .custom-footer a.school-link:hover { 
        color: #581C87;
        text-decoration: underline; 
    }
    .cc-container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .cc-badge {
        opacity: 0.85;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .cc-badge:hover { 
        opacity: 1; 
        transform: scale(1.05);
    }
    .cc-text {
        font-size: 0.85rem;
        color: #9CA3AF;
    }
    .cc-text a {
        color: #6B7280;
        text-decoration: underline;
    }
    .cc-text a:hover {
        color: #9333EA;
    }
</style>

<footer class="custom-footer">
    <p>Diseñado y desarrollado por <strong>Juan María Gámez Ortiz</strong></p>
    <p><a href="https://iesalandalus.org/joomla/" target="_blank" rel="noopener" class="school-link">IES Al-Ándalus (Almería)</a></p>
    
    <div class="cc-container">
        <a class="cc-badge" href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">
            <img alt="Licencia Creative Commons" style="border-width:0; height: 31px;" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a>
        <p class="cc-text">
            Esta obra está bajo una <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Licencia CC Atribución 4.0 Internacional</a>.<br>
            Se permite su libre distribución y edición con reconocimiento de autoría.
        </p>
    </div>
</footer>
`;

// Inyectamos el footer directamente al final del cuerpo de la página
document.body.insertAdjacentHTML('beforeend', footerCode);
