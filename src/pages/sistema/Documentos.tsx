import Docs from "../../components/sistema/documentos/section";
import MenuPerfil from "../../components/sistema/menu/menulateralperfil";
import MenuSistema from "../../components/sistema/menu/menusistema";

export default function Documentos() {
    
    return(
        <>
        <MenuSistema />
        <MenuPerfil />
        <Docs />
        </>
    )
}