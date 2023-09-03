import MenuPerfil from "../../components/sistema/menu/menulateralperfil";
import MenuSistema from "../../components/sistema/menu/menusistema";
import Viagens from "../../components/sistema/viagens/section";

export default function Extrato() {
    return (
        <>
            <MenuSistema />
            <MenuPerfil />
            <Viagens />
        </>
    );
}
