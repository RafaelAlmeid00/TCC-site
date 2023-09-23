import React, { useEffect } from 'react';

const linkStyle = {
    opacity: 0.7, // Define a opacidade como 0.7
    textDecoration: 'none', // Remove o sublinhado
    color: 'black', // Define a cor do texto como preto
    fontSize: 11 // Diminui o tamanho da fonte
};

function CookiePolicy() {
    useEffect(() => {
        const loadIubendaScript = () => {
            const script = document.createElement('script');
            script.src = 'https://cdn.iubenda.com/iubenda.js';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
        };

        window.addEventListener('load', loadIubendaScript);

        return () => {
            window.removeEventListener('load', loadIubendaScript);
        };
    }, []);
    
    return (
        <>
            <a
                href="https://www.iubenda.com/privacy-policy/25148132/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                title="Política de Cookies"
                style={linkStyle}

            >
                Política de Cookies
            </a>
        </>
    );
}

export default CookiePolicy;