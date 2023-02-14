import { Typography } from "@material-ui/core";
import React from "react";
import img from "../../../images/60031-Converted.png";
import "./phrase.css";

const Phrase = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography class="tittle">Pagina en mantenimiento</Typography>
        <p class="text">
          Nuestro sitio se encuentra bajo mantenimiento, vuelva pronto!
        </p>
      </div>
      <div style={{ textAlign: "center", margin:"auto" }}>
        <img
          class="imgPhrase"
          src={img}
          
        />
      </div>
    </>
  );
};

export default Phrase;
