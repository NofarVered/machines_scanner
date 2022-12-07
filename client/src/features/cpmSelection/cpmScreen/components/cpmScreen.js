import Box from "@mui/material/Box";

import ProfileCard from "./ProfileCard";
import Elad from "../images/Elad.jpeg";
import Amit from "../images/Amit.jpeg";
import Matan from "../images/matan.jpeg";
//import Nofar from "../images/Nofar.jpeg";
//import Or from "../images/Or.jpeg";

export default function CpmScreen(props) {
  const cpms = props.cpms;
  const images = [Elad,Amit,Matan];

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {cpms.map((cpm,i) => (
        <ProfileCard images={images[i]} cpm={cpm} />
      ))}
    </Box>
  );
}
