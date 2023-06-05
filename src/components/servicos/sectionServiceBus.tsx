import { Box, Container } from "@mui/material";
import colors from "../../assets/colors";

export default function sectionBus() {
  return (
    <>
      <Box
        sx={{
          mt: "11vh",
          height: "50vh",
          backgroundColor: colors.pm,
          borderRadius: '200px 0px 0px 20px',
          ml:10
        }}
      >
        <Container
          sx={{
            width: "100%",
          }}
        ></Container>
      </Box>
    </>
  );
}
