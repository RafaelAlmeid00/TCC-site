import MenuLateral from '../../components/sistema/menu/menulateral'
import MenuSistema from '../../components/sistema/menu/menusistema'
import Homesistema from '../../components/sistema/home'
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from '../../components/loading';

function Sistema() {
    const { userData } = React.useContext(ModalContext);
    const [load, setLoad] = React.useState(true)

    React.useEffect(() => {
        if (userData && userData.user_CPF) {
            setLoad(false)
        } else {
            setLoad(true)
        }
    }, [])

    return (
        <>
            {load ? (<Loading />) : (
                <>
                    <MenuSistema />
                    <MenuLateral />
                    <Homesistema />
                </>
            )}
        </>
    )
}

export default Sistema
