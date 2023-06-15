import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../../assets/colors";

export default function Menus({ sz, mt, ml, onClick }) {
    const pg = [
        { name: "Para Escolas", route: "/Escolas" },
        { name: "Para Empresas", route: "/Empresas" }
    ];
    const [selectedPage, setSelectedPage] = useState(pg[0].route); // define a primeira página como selecionada
    function getPageStyles(pageRoute: string) {
        const isSelected = pageRoute === selectedPage;
        const color = isSelected ? colors.tc : colors.pm;
        return { color };
    }

    return (
        <Box sx={{ mt: mt, ml: ml }}>
            <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                {pg.map((pg) => (
                    <Button
                        key={pg.route}
                        onClick={() => { setSelectedPage(pg.route); onClick() }}
                        sx={{ margin: "0 16px", ...getPageStyles(pg.route) }}
                    >
                        <Typography
                            textAlign="center"
                            sx={{ fontWeight: "bold", fontSize: sz }}
                        >
                            {pg.name}
                        </Typography>
                    </Button>
                ))}
            </Box>
            <Box sx={{
                width: "400px",
                height: "2px",
                backgroundColor: colors.scsd,
                marginTop: "8px",
                position: "relative",
                ml: 10
            }}
            >
                <Box
                    sx={{
                        ml: -10,
                        width: "52%",
                        height: "100%",
                        backgroundColor: colors.tcsd,
                        position: "absolute",
                        left: selectedPage === "/Escolas" ? '18%' : "70%",
                        transition: "left 0.3s ease-out",
                    }}
                />
            </Box>
        </Box>

    );
}