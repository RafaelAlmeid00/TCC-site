import { Fade } from "react-awesome-reveal";
import SectionContato from "../../components/contato/section";
import Footer from "../../components/footer";
import MenuApp from "../../components/menu/menuApp";
import ModalContext from "../../context/modalcontext";
import React from "react";
import '../../App.css'

export default function Contatos() {
    const { hasEntered } = React.useContext(ModalContext);

    return (
        <>
            <MenuApp />
            <Fade cascade damping={0.2} triggerOnce={hasEntered}>
            <SectionContato />
            </Fade>
            <Footer />
        </>
    );
}
