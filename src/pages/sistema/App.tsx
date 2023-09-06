import MenuLateral from '../../components/sistema/menu/menulateral'
import MenuSistema from '../../components/sistema/menu/menusistema'
import Homesistema from '../../components/sistema/home'
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from '../../components/loading';

function Sistema() {
    const { userData } = React.useContext(ModalContext);
    const [load, setLoad] = React.useState(true)

    const setLocalStorageItem = () => {
        return new Promise<void>((resolve, reject) => {
            try {
                localStorage.setItem('redirect', 'true');
                resolve();
            } catch (error) {
                reject(error);
                console.log(error);
                
            }
        });
    };

    const handleStorage = async () => {
        try {
            await setLocalStorageItem();
                setTimeout(() => {
                    location.reload();
                }, 200);
                console.log('tmlc cria');
                
        } catch (error) {
            console.error('Erro ao definir o valor no localStorage:', error);
        }
    };

    React.useEffect(() => {
        const redirect = localStorage.getItem('redirect');
        console.log(redirect);
        
        if (userData && userData.user_CPF) {
            setLoad(false);
        } else {
            setLoad(true);
            if (redirect == 'false') {
                handleStorage();
            } else {
                console.log('ta true');
                
            }
        }
    }, [userData]);


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