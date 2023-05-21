import React, { useState } from "react";
import BucketListCard from "./bucketListCard";
import axios from "axios";
const BucketList = ({ items }) => {
  const [Items, setItems] = useState([]);
  const getBucketListItems = () => {
    //api call to get the bucket list items
    //set the items array to the response
    axios
      .get("http://localhost:3030/bucketlist")
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bucket-list">
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={getBucketListItems}
        >
          Bucket List
        </button>
      </div>

      {
        //can use map to iterate through the items array and return a bucket list card for each item
        Items.map((item) => {
          return <BucketListCard item={item} />;
        })
      }
    </div>
  );
};

export default BucketList;
