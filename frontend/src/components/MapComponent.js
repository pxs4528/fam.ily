
import React, { useEffect, useRef } from "react";

//@ts-ignore
export default function MapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    //@ts-ignore
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    const iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {
      parking: {
        icon: {
          url: "https://upload-picture-testing.s3.us-east-2.amazonaws.com/a1a5446b6c4caf91a2d27c7932f4bc12",
          //@ts-ignore
          scaledSize: new window.google.maps.Size(50, 50),
        },
      },
      library: {
        icon: iconBase + "library_maps.png",
      },
      info: {
        icon: iconBase + "info-i_maps.png",
      },
    };
    const features = [
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91721, 151.2263),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91539, 151.2282),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91747, 151.22912),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.9191, 151.22907),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91725, 151.23011),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91872, 151.23089),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91784, 151.23094),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91682, 151.23149),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.9179, 151.23463),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.91666, 151.23468),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(-33.916988, 151.23364),
        type: "info",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.91662347903106,
          151.22879464019775
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.916365282092855,
          151.22937399734496
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.91665018901448,
          151.2282474695587
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.919543720969806,
          151.23112279762267
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.91608037421864,
          151.23288232673644
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.91851096391805,
          151.2344058214569
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.91818154739766,
          151.2346203981781
        ),
        type: "parking",
      },
      {
        //@ts-ignore
        position: new window.google.maps.LatLng(
          -33.91727341958453,
          151.23348314155578
        ),
        type: "library",
      },
    ];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
        //@ts-ignore
      new window.google.maps.Marker({
        position: features[i].position,
        //@ts-ignore
        icon: icons[features[i].type].icon,
        map: map,
      });
    }
  });
//@ts-ignore
  return <div style={{ width: "800px", height: "900px", borderRadius:"20px" }} ref={ref} id="map" />;
}
