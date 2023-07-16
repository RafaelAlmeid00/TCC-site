import { Box } from "@mui/material";
import Footer from "../../components/footer";
import MenuApp from "../../components/menu/menuApp";
import SectionApp1 from "../../components/Applicativo/sectionApp1";
import ModalContext from "../../context/modalcontext";
import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionApp2 from "../../components/Applicativo/sectionApp2";
import '../../App.css'

export default function AppAll() {

  const { hasEntered } = React.useContext(ModalContext);

  return (
    <>
      <Box>
        <MenuApp />
        <Fade cascade damping={0.2} triggerOnce={hasEntered}>
        <SectionApp1 />
        <SectionApp2 />
        </Fade>
        <Footer />
      </Box>
    </>
  );
}
