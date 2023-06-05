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
          background: colors.sc,
          height: '30%',
          width:'200px',
          borderRadius: '500px 0px 0px 0px',
          float: 'left',
          ml:'100px'
        }}></Container>
      </Box>
    </>
  );
}
