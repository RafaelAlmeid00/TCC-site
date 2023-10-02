import { Link } from "@mui/material";
import { useEffect } from "react";

function CookiePolicy({ color }: { color: string }) {
  const linkStyle = {
    opacity: 0.7, // Define a opacidade como 0.7
    textDecoration: "none", // Remove o sublinhado
    color: color, // Define a cor do texto como preto
    fontSize: { xs: '2vw', sm: '1.2vw', md: '1.2vw', lg: '1vw', xl: '1vw' },
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
        href="https://www.iubenda.com/privacy-policy/25148132/cookie-policy"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Política de Cookies"
        sx={linkStyle}
      >
        Política de Cookies
      </Link>
    </>
  );
}

export default CookiePolicy;
