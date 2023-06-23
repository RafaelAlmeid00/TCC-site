import MenuLateral from "../../components/menu/menulateral";
import MenuSistema from "../../components/menu/menusistema";
import Side from "../../components/sistema/sac/sectionSide";

export default function SAC() {
  return (
    <>
      <MenuSistema />
      <MenuLateral />
      <Side />
    </>
  );
}
