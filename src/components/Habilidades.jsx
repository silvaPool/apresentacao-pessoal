import { Box } from "@mui/material";
import Html from "../assets/images/html-5.png";
import JS from "../assets/images/script-java.png";
import ReactIcon from "../assets/images/biblioteca.png";
import CSSIcon from "../assets/images/social.png";
import Tech from "../assets/images/tech.png";

function Habilidades() {
  return (
    <>
      <Box className="h-96 flex flex-col justify-between items-center p-6  bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
        <Box>
          <p className="font-montserrat text-2xl font-semibold tracking-wider">
            Habilidades
          </p>
        </Box>

        <Box className="flex items-center gap-1">
          <div className="bg-white w-60 h-1 border-0"></div>
          <img src={Tech} alt="Logo Tech" className="w-24 overflow-hidden" />
          <div className="bg-white w-60 h-1 outline-none"></div>
        </Box>

        <Box className="flex flex-row justify-between items-center gap-5 w-96">
          <img src={Html} alt="Logo HTML" className="w-12" />
          <img src={JS} alt="Logo JS" className="w-12" />
          <img src={ReactIcon} alt="Logo ReactIcon" className="w-12" />
          <img src={CSSIcon} alt="Logo CSSIcon" className="w-12" />
        </Box>
      </Box>
    </>
  );
}

export default Habilidades;
