import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./CpmSelection.css";
import mockCPM from './mockCPM'

export default function CpmSelection() {
  const [active, setaAtive] = useState(0);
  return (
    <div className="App">

      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={value => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {Array.from(new Array(10)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: "url(https://placeimg.com/380/200/nature)"
            }}
          />
        ))}
      </ItemsCarousel>
    </div>
  );
}
