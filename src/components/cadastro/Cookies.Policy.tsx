import { useEffect } from "react";

function CookiePolicy({ color }: { color: string }) {
  const linkStyle = {
    opacity: 0.7, // Define a opacidade como 0.7
    textDecoration: "none", // Remove o sublinhado
    color: color, // Define a cor do texto como preto
    fontSize: 11, // Diminui o tamanho da fonte
    ml: 2,
    mr: 2
  };

  useEffect(() => {
    const loadIubendaScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.iubenda.com/iubenda.js";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    };

    window.addEventListener("load", loadIubendaScript);

    return () => {
      window.removeEventListener("load", loadIubendaScript);
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
