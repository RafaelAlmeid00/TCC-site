import { Box } from "@mui/material";
import Section1EasyPass from "../components/easypass/section1";
import Section2EasyPass from "../components/easypass/section2";
import Footer from "../components/footer";
import MenuApp from "../components/menuApp";

export default function EasyPass() {
    return (
        <>
        <MenuApp />
        <Box sx={{
            margin: 0
        }}>
        <Section1EasyPass />
        <Section2EasyPass />
        <Footer />
        </Box>
        </>
    );
    }