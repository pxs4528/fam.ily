import "../css/Profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function AddGoal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // const submitAddMember = (e) => {
  //   e.preventDefault();
  //   // await fetch("/api/goals", {
  //   alert("Submit your goal!");

  //   axios
  //     .post("http://localhost:3030/BucketList/create", {
  //       title,
  //       description,
  //       location,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };
  async function postImage({ image }) {
    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post("http://localhost:3030/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(result.data);
    return result.data;
  }
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, [showAlert]);

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

  const submitGoal = (e) => {
    e.preventDefault();
    fetch("http://localhost:3030/bucketlist/create", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        location: location,
        picture: picture,
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

  return (
    <>
      {/* <dialog ref={dialogRef}>
        <form class="flex flex-col gap-4">
          <h2>Add Goal</h2>
          <label>
            Title:{" "}
            <input
              type="text"
              name="name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:{" "}
            <input
              type="text"
              name="name"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Location:{" "}
            <input
              type="text"
              name="name"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              // await fetch("/api/goals", {
              alert("Submit your goal!");
              dialogRef.current?.close();

              axios
                .post("http://localhost:3030/BucketList/create", {
                  title,
                  description,
                  location,
                })
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                });
            }}
          >
            Submit
          </button>
        </form>
      </dialog> */}
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <form>
            <div>
              <div
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                }}
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "center",
                //   alignItems: "center",
                //   marginLeft: "40px",
                //   marginRight: "40px",
                // }}
              >
                <p className="mt-1 text-sm leading-6 text-gray-600"></p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3 ">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="age"
                        id="age"
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setLocation(e.target.value)}
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
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
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          onClick={submitGoal}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
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
              <span>Your goal has been added</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddGoal;
