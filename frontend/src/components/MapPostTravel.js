import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Marker({ position, map, children }) {
  const markerRef = useRef();
  const rootRef = useRef();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = ReactDOM.createRoot(container);
      markerRef.current = new window.google.maps.marker.AdvancedMarkerView({
        map,
        position,
        content: container,
      });
    }
  }, []);

  useEffect(() => {
    rootRef.current.render(children);
    markerRef.current.position = position;
    markerRef.current.map = map;
  }, [position, map, children]);
}

function MapPosts({ map }) {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3030/getPosts/travel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return JSON.stringify(data);
      })
      .then((res) => {
        setPosts(JSON.parse(res));
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    console.log(posts);
    console.log(loading);
  }, [posts, loading]);

  return (
    <div>
      {loading &&
        posts.map((post, i) => {
          return (
            <Marker
              key={i}
              position={{ lat: post.location_lat, lng: post.location_long }}
              map={map}
            >
              <div className="flex justify-center flex-col items-center">
                <img
                  src={post.picture}
                  alt="post"
                  className="w-20 h-32 object-cover rounded-md border-2 backdrop-blur-md"
                />
                <h2 className="text-black text-sm w-24 text-center font-semibold">
                  {post.caption}
                </h2>
              </div>
            </Marker>
          );
        })}
    </div>
  );
}

export function MapComponent() {
  const ref = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center: { lat: 41.49167630796415, lng: -77.00349221838519 },
        zoom: 7,
        mapId: "9e8e8fc3da43a2e0",
      })
    );
  }, []);

  return (
    <div
      style={{ width: "800px", height: "900px", borderRadius: "20px" }}
      ref={ref}
      id="map"
    >
      {map && <MapPosts map={map}></MapPosts>}
    </div>
  );
}
