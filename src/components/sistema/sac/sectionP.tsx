import { Box, Grid } from "@mui/material";
import Msg from "./sectionMessage";
import Adalberto from "./sectionPapo";
import React from "react";
import ModalContext from "../../../context/modalcontext";

export default function SectionP() {
  
  const { verify } = React.useContext(ModalContext);
  const { themes } = React.useContext(ModalContext);
  const fundo = themes.palette.background.default
    return (
      <>
        <Box
          sx={{
            width: "100vw",
            height: "89.7vh",
            marginTop: "10.3vh",
            marginLeft: "20vw",
            backgroundColor: verify ? fundo : 'white',
            overflow: "hidden",
            position: "relative",
            overflowY: 'scroll'
          }}
        >
          <Grid container>
            <Adalberto />
            <Msg />
          </Grid>
        </Box>
      </>
    );
}
