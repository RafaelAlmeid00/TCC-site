import MenuLateral from "../../components/sistema/menu/menulateral";
import MenuSistema from "../../components/sistema/menu/menusistema";
import Buss from "../../components/sistema/onibus/section1";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

export default function PageOnibus() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuSistema />
                    <MenuLateral />
                    <Buss />
                </>
                : <Loading />}
        </>
    )
}