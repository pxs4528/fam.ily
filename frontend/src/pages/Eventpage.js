import "../css/feedpage.css";
import Navbar from "../components/Navbar";
import Post from "../components/TravelPost";
import { MapComponent } from "../components/MapPostEvent";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useEffect, useRef, Fragment } from "react";
import "../css/feedpage.css";
import { Dialog, Transition } from "@headlessui/react";
import AddPost from "../components/addPost";

function Eventpage() {
  const [posts, setPosts] = useState();
  const cancelButtonRef = useRef(null);
  //const [loading, setLoading] = useState(false);

  const [openPost, setOpenPost] = useState(false);
  const openTheModal = () => {
    setOpenPost(true);
  };

  useEffect(() => {
    fetch("http://localhost:3030/getPosts/event", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return JSON.stringify(data);
      })
      .then((res) => {
        let tempposts = JSON.parse(res);
        tempposts.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setPosts(tempposts);
        //setLoading(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //   useEffect(() => {
  //     console.log(posts);
  //   }, [posts]);

  return (
    <div classsName="container">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div className="feed">
          {posts &&
            posts.map((post, i) => {
              return (
                <div key={i}>
                  <Post
                    picURL={post.picture}
                    caption={post.caption}
                    date={post.date}
                  />
                  <div />
                </div>
              );
            })}
          <button className="button1 ml-24" onClick={openTheModal}>
            <div className="circle">
              <span style={{ position: "relative", bottom: "2px" }}>+</span>
            </div>
            <span className="font-semibold">Add a post</span>
          </button>

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
                        {/* <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="defaultModal"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button> */}
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
        </div>
        <div style={{ marginTop: "20px" }}>
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
export default Eventpage;
