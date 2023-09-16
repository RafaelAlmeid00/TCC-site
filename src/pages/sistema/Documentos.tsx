import Docs from "../../components/sistema/documentos/section";
import MenuPerfil from "../../components/sistema/menu/menulateralperfil";
import MenuSistema from "../../components/sistema/menu/menusistema";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

export default function Documentos() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuSistema />
                    <MenuPerfil />
                    <Docs />
                </>
                : <Loading />}

        </>
    )
}