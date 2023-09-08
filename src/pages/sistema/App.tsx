import MenuLateral from '../../components/sistema/menu/menulateral'
import MenuSistema from '../../components/sistema/menu/menusistema'
import Homesistema from '../../components/sistema/home'
import Loading from '../../components/loading';
import React from 'react';
import ModalContext from '../../context/modalcontext';

function Sistema() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuSistema />
                    <MenuLateral />
                    <Homesistema />
                </>
                : <Loading />}
        </>
    )
}

export default Sistema