import { Box } from "@mui/material";
import Section1EasyPass from "../../components/easypass/section1";
import Footer from "../../components/footer";
import MenuApp from "../../components/menu/menuApp";
import { Fade } from "react-awesome-reveal";
import ModalContext from "../../context/modalcontext";
import React from "react";
import '../../App.css'

export default function EasyPass() {
    const { hasEntered } = React.useContext(ModalContext);

    return (
        <>
            <MenuApp />
            <Box sx={{
                margin: 0
            }}>
                <Fade cascade damping={0.2} triggerOnce={hasEntered}>
                <Section1EasyPass />
                </Fade>
                <Footer />
            </Box>
        </>
    );
}