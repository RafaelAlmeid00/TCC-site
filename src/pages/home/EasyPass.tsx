import { Box } from "@mui/material";
import Section1EasyPass from "../../components/easypass/section1";
import Footer from "../../components/footer";
import MenuApp from "../../components/menu/menuApp";

export default function EasyPass() {
    return (
        <>
            <MenuApp />
            <Box sx={{
                margin: 0
            }}>
                <Section1EasyPass />
                <Footer />
            </Box>
        </>
    );
}