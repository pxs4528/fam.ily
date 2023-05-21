import "../css/feedpage.css";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import AddButton from "../components/AddButton";
import MapComponent from "../components/MapComponent";
import { Wrapper } from "@googlemaps/react-wrapper";

function feedpage() {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  const zoom = 13;
  return (
    <div classsName="container">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div className="feed">
          <div>
            <Post />
            <div className="h-24" />
          </div>
          <div>
            <AddButton />
          </div>
        </div>
        <div>
          <Wrapper             apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
>
            <MapComponent center={center} zoom={zoom} />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
export default feedpage;
