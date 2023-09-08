import CardSection from "../../components/sistema/card/section";
import MenuLateral from "../../components/sistema/menu/menulateral";
import MenuSistema from "../../components/sistema/menu/menusistema";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

export default function Card() {
    const { userData } = React.useContext(ModalContext);

    return (
        <>
            {userData ?
                <>
                    <MenuSistema />
                    <MenuLateral />
                    <CardSection />
                </>
                : <Loading />}
        </>
    )
}