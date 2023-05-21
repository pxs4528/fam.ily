import React, { memo, useEffect, useRef, useState } from "react";

//@ts-ignore
const MapComponent = memo(function MapComponent({
  center,
  zoom,
  refLat,
  refLng,
}) {
  const ref = useRef();
  useEffect(() => {
    //@ts-ignore
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    const myLatlng = { center };
    //@ts-ignore
    let infoWindow = new window.google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });

    infoWindow.open(map);

    // Configure the click listener.
    //@ts-ignore
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      //@ts-ignore
      infoWindow = new window.google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      const latLngObj = mapsMouseEvent.latLng.toJSON();
      const coords = JSON.stringify(latLngObj);
      infoWindow.setContent(JSON.stringify(latLngObj, null, 2));

      infoWindow.open(map);

      refLat.current = JSON.parse(coords)["lat"];
      refLng.current = JSON.parse(coords)["lng"];
    });
  });

  // @ts-ignore
  return (
    <div
      style={{
        width: "450px",
        height: "300px",
        borderRadius: "10px",
      }}
      ref={ref}
      id="map"
    />
  );
});

export default MapComponent;
