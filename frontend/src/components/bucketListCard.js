import React from "react";

const BucketListCard = ({ item }) => {
  return (
    <>
      <div class="h-l max-w-2xl mx-auto mb-8 space-y-20">
        <div class="max-w-screen md:w-full mx-auto">
          <div class="flex flex-row space-y- items-center justify-center h-full p-8 bg-gray-100 rounded-xl space-x-10">
            <div class="w-2/3">
              <p class="w-full text-2xl font-semibold text-black">
                {item.title}
              </p>
              <p class="w-full pb-8 text-sm tracking-wide leading-tight text-black">
                {item.description}
              </p>
              <div class="rounded w-1/2">
                <div class="opacity-95 border rounded-lg border-black bg-sand px-4">
                  <p class="m-auto inset-0 text-sm font-medium leading-normal text-center text-black py-2">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-auto h-">
              <img
                alt="too lazy for alt, sorry /shrug"
                class="flex-1 h-full rounded-lg"
                src={item.picture}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BucketListCard;
