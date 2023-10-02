import { Link } from "@mui/material";
import { useEffect } from "react";

function TermsAndConditions({ color }: { color: string }) {
  const linkStyle = {
    opacity: 0.7, // Define a opacidade como 0.7
    textDecoration: "none", // Remove o sublinhado
    color: color, // Define a cor do texto como preto
    fontSize: { xs: '2.5vw', sm: '2vw', md: '2vw', lg: '1.8vw', xl: '1.8vw' },
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
      <Link
        href="https://www.iubenda.com/termos-e-condicoes/25148132"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Termos e Condições"
        sx={linkStyle}
      >
        Termos e Condições
      </Link>
    </>
  );
}

export default TermsAndConditions;
