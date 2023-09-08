import MenuPerfil from '../../components/sistema/menu/menulateralperfil'
import MenuSistema from '../../components/sistema/menu/menusistema'
import SectionPerfil1 from '../../components/sistema/perfil/section1'
import SectionPerfil2 from '../../components/sistema/perfil/section2'
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

function Perfil() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuPerfil />
                    <MenuSistema />
                    <SectionPerfil1 />
                    <SectionPerfil2 />
                </>
                : <Loading />}
        </>
    )
}

export default Perfil
