//bucket list page
import React from "react";
import BucketList from "../components/getBucketList";

const bucketListItems = [
  {
    id: 1,
    title: "Visit the Grand Canyon",
    description:
      "Experience the natural beauty of one of America's most iconic landmarks.",
    location: "Arizona, USA",
  },
  {
    id: 2,
    title: "Learn to surf",
    description:
      "Ride the waves like a pro and experience the thrill of surfing.",
    location: "Hawaii, USA",
  },
  {
    id: 3,
    title: "Go on a safari",
    description:
      "Experience the thrill of seeing wild animals in their natural habitat.",
    location: "Kenya, Africa",
  },
  // Add more items here
];
const BucketListPage = () => {
  return (
    <>
      <div>
        <BucketList items={bucketListItems} />
      </div>
    </>
  );
};

export default BucketListPage;
