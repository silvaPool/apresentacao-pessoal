import { Box } from "@mui/material";
import Html from "../assets/images/html-5.png";
import JS from "../assets/images/script-java.png";
import ReactIcon from "../assets/images/biblioteca.png";
import CSSIcon from "../assets/images/social.png";

function Habilidades() {
  return (
    <>
      <Box className="h-80 flex flex-col justify-between items-center p-4">
        <p>Habilidades</p>

        <Box className="flex flex-row justify-around items-center">
          <img src={Html} alt="Logo HTML" className="w-8" />
          <img src={JS} alt="Logo JS" className="w-8" />
          <img src={ReactIcon} alt="Logo ReactIcon" className="w-8" />
          <img src={CSSIcon} alt="Logo CSSIcon" className="w-8" />
        </Box>
      </Box>
    </>
  );
}

export default Habilidades;
