import { Box, Stack, Typography } from "@mui/material";
import info from "../services/data";
import Perfil from "../assets/images/perfillllllll.jpeg"

function Hero() {
  return (
    <>
      <Box className="flex flex-row justify-between items-start h-screen bg-slate-950">
        <Box className="bg-stone-600 w-3/5 h-full flex flex-col justify-center items-center gap-2">
          <p className="font-montserrat text-2xl font-black tracking-wider">{info.nome}</p>
          <p className="font-montserrat text-base text-center font-normal">{info.descricao}</p>
        </Box>
        <Box className="w-2/5 h-full overflow-hidden">
            <img src={Perfil} className="w-full h-full object-cover" alt="Foto de apresentação - perfil" />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
