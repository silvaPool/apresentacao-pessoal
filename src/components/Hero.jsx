import { Box, Stack } from "@mui/material";
import info from "../services/data";

function Hero() {
  return (
    <>
      <Stack sx={{border: '1px solid red', height: '100vh'}}>
        <Box>Imagem</Box>
        <Box>Texto</Box>
      </Stack>
    </>
  );
}

export default Hero;
