import React, { Component }  from 'react'
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import CpmScreen from "./cpmScreen/components/cpmScreen";
import { getCpms } from "./cpmScreen/components/ApiCpm";

export default function CpmWrapper() {
  const [cpms, setCpms] = useState([]);

  useEffect(() => {
    getCpms().then((result) => {
      setCpms(result);
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <CpmScreen cpms={cpms} />
    </Container>
  );
}
