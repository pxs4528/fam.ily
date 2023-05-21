import { Wrapper } from "@googlemaps/react-wrapper";
import GetCoordinates from "./getCoordinates";
import React from "react";
//require("dotenv").config();

function Map({ refLat, refLng }) {
  const center = {
    lat: 40.68018796966656,
    lng: -74.00422464026019,
  };
  const zoom = 6;

  //@ts-ignore
  return (
    <div>
      {/* <Wrapper apiKey={process.env.GOOGLE_API_KEY}> */}
      <Wrapper
        version={["beta"]}
        libraries={["marker"]}
      >
        <GetCoordinates
          center={center}
          zoom={zoom}
          refLat={refLat}
          refLng={refLng}
        />
      </Wrapper>
    </div>
  );
}

export default Map;
