import { Box, Grid } from "@mui/material";
import Msg from "./sectionMessage";
import Adalberto from "./sectionPapo";

export default function SectionP() {
    return (
      <>
        <Box
          sx={{
            width: "100vw",
            height: "89.7vh",
            marginTop: "10.3vh",
            marginLeft: "20vw",
            backgroundColor: "red",
            overflow: "hidden",
            position: "relative"
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
