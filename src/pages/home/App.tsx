import { Box } from "@mui/material";
import Footer from "../../components/footer";
import MenuApp from "../../components/menu/menuApp";
import SectionApp1 from "../../components/Applicativo/sectionApp1";
import SectionApp2 from "../../components/Applicativo/sectionApp2";

export default function AppAll() {
  return (
    <>
      <Box>
        <MenuApp />
        <SectionApp1 />
        <Footer />
      </Box>
    </>
  );
}
