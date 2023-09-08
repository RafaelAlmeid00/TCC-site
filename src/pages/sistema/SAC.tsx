import MenuLateral from "../../components/sistema/menu/menulateral";
import MenuSistema from "../../components/sistema/menu/menusistema";
import SectionP from "../../components/sistema/sac/sectionP";
import React from 'react';
import ModalContext from '../../context/modalcontext';
import Loading from "../../components/loading";

export default function SAC() {
  const { userData } = React.useContext(ModalContext);

  return (
    <>
      {userData ?
        <>
          <MenuSistema />
          <MenuLateral />
          <SectionP />
        </>
        : <Loading />}
    </>
  );
}
