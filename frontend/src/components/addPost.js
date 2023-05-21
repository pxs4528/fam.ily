import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Map from "./mapPicker";

async function postImage({ image }) {
  const formData = new FormData();
  formData.append("image", image);

  const result = await axios.post("http://localhost:3030/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(result.data);
  return result.data;
}

export default function Example() {
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("travel");
  const [caption, setCaption] = useState();
  const [location_lat, setLocation_lat] = useState();
  const [location_long, setLocation_long] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const refLat = useRef();
  const refLng = useRef();

  // submit phot to AWS S3
  const submitPhoto = async (event) => {
    event.preventDefault();
    const result = await postImage({ image: file });
    console.log(result);
    setPicture(result);
    setImages([result.image, ...images]);
    console.log(result.image);
    event.stopPropagation();
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  // get post data
  const submitPost = (e) => {
    e.preventDefault();
    fetch("http://localhost:3030/posting", {
      method: "POST",
      body: JSON.stringify({
        member_id: localStorage.getItem("member_id"),
        caption,
        location_long,
        location_lat,
        picture,
        type,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        setShowAlert(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, [showAlert]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "40px",
        marginRight: "40px",
      }}
    >
      <div>
        <form>
          <div className="space-y-12">
            <div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Type
                  </label>
                  <div className="mt-2  ">
                    <div className=" flex w-96 rounded-md  ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <select
                        name="post-type"
                        className="block rounded-md flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="travel">Travel</option>
                        <option value="event">Event</option>
                        <option value="life-event">Life Event</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="caption"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Caption
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="caption"
                      name="caption"
                      rows={3}
                      className="block w-full rounded-md  py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <form onSubmit={submitPhoto}>
          <div className="space-y-12">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>

              <div className="mt-2 flex justify-center rounded-lg  px-6 py-10">
                <div className="text-center">
                  {picture === "" ? (
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      className="mx-auto rounded h-80 w-full object-cover"
                      src={picture}
                      alt="profile"
                    />
                  )}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={fileSelected}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="bg-green-300 hover:bg-gray-100 text-neutral-900 font-semibold py-2 px-4  rounded "
              type="submit"
            >
              Add Photo
            </button>
          </div>
        </form>
      </div>

      <div>
        <div className="mt-6">
          <Map refLat={refLat} refLng={refLng} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => {
              setLocation_lat(refLat.current);
              setLocation_long(refLng.current);
              console.log(refLat.current);
              console.log(refLng.current);
            }}
            className="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded"
          >
            Get Location
          </button>

          <div className="items-center">
            <button
              onClick={submitPost}
              type="submit"
              className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 "
            >
              Submit
            </button>
          </div>
          {showAlert && (
            <div className="alert alert-success">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>New post has been added</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
