import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "../css/contact.css";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    //"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    localStorage.getItem("picture"),
};
const navigation = [
  { name: "Family Tree", href: "/dashboard", current: false },
  { name: "Events", href: "/event", current: false },
  { name: "Travel", href: "/travel", current: false },

  { name: "Profile", href: "/profile", current: false },
];
const userNavigation = [
  { name: "Account", href: "/setting" },
  { name: "Sign out", href: "/login" },
];

const logout = () => {
  localStorage.clear();
};
const contactList = [
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    name: "Saja Hussein",
    status: "Datathon Queen",
  },
  // {
  //   avatar:
  //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  //   name: "Trevor Reigh",
  //   status: "https://hackuta.org/",
  // },
  {
    avatar:
      "https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Nhi Tran",
    status: "Eat, rock climb, sleep, repeat!",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Parth Shawarma",
    status: "Sleep is the loml",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZSUyMGhlYWRzaG90c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Juan Games",
    status: "i miss us",
  },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <>
      <div className>
        <Disclosure as="nav" style={{ backgroundColor: "#9EBC9E" }}>
          {({ open }) => (
            <>
              <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center ml-10">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-21"
                        src="https://i.pinimg.com/originals/4f/75/a8/4f75a88736109366394095832dbfe2b8.png"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            style={{ textDecoration: "none" }}
                            className={classNames(
                              item.current
                                ? " text-black"
                                : "text-black hover:bg-white-700 hover:text-black-900",
                              "rounded-md px-3 py-2 text-lg font-bold"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                        <div>
                          {/* Profile dropdown */}
                          <Menu as="div" className="relative">
                            <div>
                              <Menu.Button>
                                <span className=" rounded-md py-2 px-3 text-lg font-bold">
                                  Friends
                                </span>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right--1 z-10 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {contactList.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "px-4 py-2 text-sm text-gray-700 contact-item"
                                        )}
                                      >
                                        <img
                                          src={item.avatar}
                                          className="contact-avatar"
                                        />
                                        <div className="contact-text">
                                          <div>{item.name}</div>
                                          <div className="contact-status">
                                            {item.status}
                                          </div>
                                        </div>
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
//@ts-ignore
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function NavBar() {
//   return (
//     <>
//       <div className>
//         <Disclosure as="nav" style={{ backgroundColor: "#9EBC9E" }}>
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16 items-center justify-between">
//                   <div className="flex items-center ml-10">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-12 w-21"
//                         src="https://i.pinimg.com/originals/4f/75/a8/4f75a88736109366394095832dbfe2b8.png"
//                         alt="Your Company"
//                       />
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             style={{ textDecoration: "none" }}
//                             className={classNames(
//                               item.current
//                                 ? " text-black"
//                                 : "text-black hover:bg-white-700 hover:text-black-900",
//                               "rounded-md px-3 py-2 text-lg font-bold"
//                             )}
//                             aria-current={item.current ? "page" : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <button
//                         type="button"
//                         className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="relative ml-3">
//                         <div>
//                           <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="sr-only">Open user menu</span>
//                             <img
//                               className="h-8 w-8 rounded-full"
//                               src={localStorage.getItem("picture")}
//                               alt=""
//                             />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     onClick={
//                                       item.name == "Sign out" ? logout : null
//                                     }
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? "bg-gray-100" : "",
//                                       "block px-4 py-2 text-sm text-gray-700"
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon
//                           className="block h-6 w-6"
//                           aria-hidden="true"
//                         />
//                       ) : (
//                         <Bars3Icon
//                           className="block h-6 w-6"
//                           aria-hidden="true"
//                         />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
//                 <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current
//                           ? "bg-gray-900 text-white"
//                           : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                         "block rounded-md px-3 py-2 text-base font-medium"
//                       )}
//                       aria-current={item.current ? "page" : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pb-3 pt-4">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-10 w-10 rounded-full"
//                         src={user.imageUrl}
//                         alt=""
//                       />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">
//                         {user.name}
//                       </div>
//                       <div className="text-sm font-medium leading-none text-gray-400">
//                         {user.email}
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//       </div>
//     </>
//   );
// }
