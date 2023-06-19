import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 601,
            md: 901,
            lg: 1201,
            xl: 1501,
        },
    },
});

export default theme