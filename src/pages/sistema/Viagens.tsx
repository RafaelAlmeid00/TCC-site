import MenuPerfil from "../../components/sistema/menu/menulateralperfil";
import MenuSistema from "../../components/sistema/menu/menusistema";
import Viagens from "../../components/sistema/viagens/section";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

export default function Viage() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuSistema />
                    <MenuPerfil />
                    <Viagens />
                </>
                : <Loading />}
        </>
    );
}
