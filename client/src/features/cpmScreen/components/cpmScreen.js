import Box from "@mui/material/Box";

import ProfileCard from "./ProfileCard";
import Elad from "../images/Elad.jpeg";
import Amit from "../images/Amit.jpeg";
import Matan from "../images/matan.jpeg";
import Nofar from "../images/nofar.jpeg";
import Or from "../images/or.jpg";

export default function CpmScreen(props) {
  const cpms = props.cpms;
  const images = [Elad,Amit,Matan,Nofar,Or];

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {cpms.map((cpm,i) => (
        <ProfileCard images={images[i]} cpm={cpm} />
      ))}
    </Box>
  );
}
