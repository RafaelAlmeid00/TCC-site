
import End from "../../components/sistema/endereco/section";
import MenuPerfil from "../../components/sistema/menu/menulateralperfil";
import MenuSistema from "../../components/sistema/menu/menusistema";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

export default function Endereco() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
            <MenuSistema />
            <MenuPerfil />
            <End />
                </>
                : <Loading />}
        </>
    )
}