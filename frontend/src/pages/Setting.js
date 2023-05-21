import { UserCircleIcon } from "@heroicons/react/24/solid";
import NavBar from "../components/Navbar";

import axios from "axios";
import { useState, useEffect } from "react";

async function postImage({ image }) {
  const formData = new FormData();
  formData.append("image", image);

  const result = await axios.post("http://localhost:3030/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(result.data);
  return result.data;
}

export default function Profile() {
  let local_name = localStorage.getItem("name");
  console.log(localStorage.getItem("name"));
  let local_age = localStorage.getItem("age");
  const local_picture = localStorage.getItem("picture");

  //   const local_name = "local_name";
  //   const local_age = "local_age";
  //   const local_picture = "local_picture";
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(local_picture);
  const [images, setImages] = useState([]);
  //const [member_id, setMember_id] = useState(1);
  const [file, setFile] = useState(null);

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
  const submitSetting = (e) => {
    e.preventDefault();
    console.log("sent");
    fetch("http://localhost:3030/setting", {
      method: "POST",
      body: JSON.stringify({
        member_id: localStorage.getItem("member_id"),
        name: name,
        age: age,
        picture: picture,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.removeItem("name");
        localStorage.setItem("name", data.name);
        localStorage.removeItem("age");
        localStorage.setItem("age", data.age);
        localStorage.removeItem("picture");
        localStorage.setItem("picture", data.picture);
        console.log(localStorage);
      })
      .then(() => window.location.reload());
  };

  return (
    <>
      <NavBar></NavBar>

      <div style={{ paddingTop: "100px" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <form>
            <div className="flex flex-row">
              <div
                style={{
                  width: "500px",
                  height: "500px",
                  borderRadius: "20px",
                  marginLeft: "160px",
                }}
              >
                <p className="mt-1 text-sm leading-6 text-gray-600"></p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        //placeholder={local_name}
                        placeholder={local_name}
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Age
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setAge(e.target.value)}
                        placeholder={local_age}
                        type="text"
                        name="age"
                        id="age"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="email"
                        type="text"
                        id="email"
                        name="email"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div>
                      <input
                        placeholder="nhitran"
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full border-gray-300  rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        //placeholder="janesmith"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Address
                    </label>
                    <div>
                      <input
                        placeholder="1245 Main St"
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full border-gray-300  rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        //placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div style={{ marginTop: "500px", marginLeft: "100px" }}>
            <div className="mt-6  flex items-center justify-end gap-x-6 ">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={submitSetting}
                type="submit"
                className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
              >
                Save
              </button>
            </div>
          </div>

          <div
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "20px",
              marginLeft: "80px",
            }}
          >
            <form
              onSubmit={submitPhoto}
              className="flex flex-col justify-center items-center"
            >
              <div className="space-y-12">
                <div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <div className="mt-2 flex justify-center rounded-lg  px-6 py-10">
                        <div className="text-center">
                          {picture === localStorage.getItem("picture") ? (
                            <img
                              className="mx-auto rounded-full h-60 w-60"
                              src={picture}
                              alt="profile"
                            />
                          ) : (
                            <img
                              className="mx-auto rounded-full h-60 w-60"
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
                </div>
              </div>
              <div className="items-center">
                <button
                  type="submit"
                  className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 "
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
