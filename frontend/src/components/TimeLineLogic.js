import React from 'react';
import TimeLineJSX from './TimeLineJSX';

const TimeLineLogic = ({ items }) => {
    //console.log(items);
    return (
        <div>
        {//can use map to iterate through the items array and return a bucket list card for each item
        items.map((item) => {
          return <TimeLineJSX items={item} />;
        })
        }
      </div>
    );
    };

export default TimeLineLogic;