import SectionRota1 from "../../components/sistema/rotas/sectionRotas";
import MenuSistema from "../../components/sistema/menu/menusistema";
import MenuLateral from "../../components/sistema/menu/menulateral";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

function BussRotas() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuSistema />
                    <MenuLateral />
                    <SectionRota1 />
                </>
                : <Loading />}
        </>
    )
}

export default BussRotas 
