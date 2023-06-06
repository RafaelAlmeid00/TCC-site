import { Box, Container } from "@mui/material";
import colors from "../../assets/colors";

export default function sectionBus() {
  return (
    <>
      <Box
        sx={{
          mt: "11vh",
          height: "50vh",
          background: colors.pm,
          borderRadius: '500px 0px 0px 0px',
        }}
      >
        <Container sx={{
          float: "left",
          background: colors.sc,
          height: "100%",
          width:'25%',
          borderRadius: '500px 0px 0px 0px',
        }}></Container>
      </Box>
    </>
  );
}
