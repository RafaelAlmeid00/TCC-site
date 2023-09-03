import React, { useEffect } from 'react';

const linkStyle = {
    opacity: 0.7, // Define a opacidade como 0.7
    textDecoration: 'none', // Remove o sublinhado
    color: 'black', // Define a cor do texto como preto
    fontSize: 11 // Diminui o tamanho da fonte
};

function TermsAndConditions() {
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
                href="https://www.iubenda.com/termos-e-condicoes/25148132"
                className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                title="Termos e Condições"
                style={linkStyle}

            >
                Termos e Condições
            </a>
        </>
    );
}

export default TermsAndConditions;
