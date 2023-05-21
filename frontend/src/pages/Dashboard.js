import React, { Fragment, useRef, useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { Wrapper } from "@googlemaps/react-wrapper";
import { MapComponent } from "../components/MapPosts";
import Tree from "../components/Tree";
import AddMember from "../components/addMember";
import { Dialog, Transition } from "@headlessui/react";
import AddPost from "../components/addPost";

export default function Dashboard() {
  console.log(localStorage.getItem("user"));
  console.log(localStorage.getItem("email"));
  const [open, setOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const cancelPostRef = useRef(null);
  const cancelButtonRef = useRef(null);

  const [nodes, setNodes] = useState(null);
  useEffect(() => {
    console.log("fetching");
    fetch("http://localhost:3030/gettree")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("data");
        setNodes(data);
        console.log("sent data");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("fetched");
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-row">
        <div className="w-6/12">
          <div className="flex justify-center">
            {/* <h1 className=" text-2xl font-bold mt-4">Family Tree</h1> */}
          </div>
          {nodes ? (
            <div>
              <Tree shape={nodes} />
              <div className="flex flex-row justify-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#9EBC9E" }}
                  className=" ml-4 flex whitespace-nowrap text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setOpen(true)}
                  ref={cancelButtonRef}
                >
                  add member
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: "#9EBC9E" }}
                  className=" ml-4 flex whitespace-nowrap text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setOpenPost(true)}
                  ref={cancelButtonRef}
                >
                  <span>add Post</span>
                </button>
              </div>
            </div>
          ) : (
            <div>loading</div>
          )}
          <div className="flex justify-center">
            {/* <AddMember /> */}
            <Transition.Root show={openPost} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpenPost}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                          <h3 class="text-xl ml-4 mt-1 font-semibold text-gray-900 ">
                            Add Post
                          </h3>
                        </div>
                        <AddPost />
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpenPost(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                          <h3 class="text-xl ml-4 mt-1 font-semibold text-gray-900 ">
                            Add Member
                          </h3>
                        </div>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <AddMember />
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
        <div className="mt-6">
          <Wrapper
            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            version={["beta"]}
            libraries={["marker"]}
          >
            <MapComponent />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
