import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
//import Mainpage from "./mainpage";
//import AddMemberModal from "./addMemberModal";

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

export default function AddMember() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [relationship, setRelationship] = useState("parent");
  const [account, setAccount] = useState("");
  const [picture, setPicture] = useState("");
  const [images, setImages] = useState([]);

  const [file, setFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

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
  const submitAddMember = (e) => {
    e.preventDefault();
    console.log("sent");
    fetch("http://localhost:3030/addmember", {
      method: "POST",
      body: JSON.stringify({
        member_id: localStorage.getItem("member_id"),
        name: name,
        age: age,
        relationship: relationship,
        picture: picture,
        account: account,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        res.json();
        setShowAlert(true);
      })
      .then((data) => {
        console.log(data);
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
    <>
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
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
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
                        type="text"
                        name="age"
                        id="age"
                        onChange={(e) => setAge(e.target.value)}
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Relationship
                    </label>
                    <div className="mt-2  ">
                      <div>
                        <select
                          name="post-type"
                          onChange={(e) => {
                            setRelationship(e.target.value);
                            console.log(e.target.value);
                          }}
                          className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="parent">Parent</option>
                          <option value="children">Child</option>
                          <option value="sibling">Sibling</option>
                          <option value="spouse">Spouse</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Link to existing account
                    </label>
                    <div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setAccount(e.target.value)}
                        autoComplete="username"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <form onSubmit={submitPhoto}>
          <div
            style={{
              display: "flex",
              //justifyContent: "center",
              //alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "500px",
                borderRadius: "20px",
              }}
            >
              <div className="space-y-12">
                <div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Profile picture
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg  px-6 py-10">
                        <div className="text-center">
                          {/* <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      /> */}
                          {picture === "" ? (
                            <UserCircleIcon
                              className="mx-auto h-40 w-40 text-gray-300"
                              aria-hidden="true"
                            />
                          ) : (
                            <img
                              className="mx-auto rounded-full h-40 w-40"
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
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="bg-green-300 hover:bg-gray-100 text-neutral-900 font-semibold py-2 px-4  rounded "
              type="submit"
            >
              Add Picture
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <div className="items-center">
          <button
            onClick={submitAddMember}
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
              <span>New member added!</span>
            </div>
          </div>
        )}
      </div>

      {/* <AddMemberModal /> */}
    </>
  );
}
