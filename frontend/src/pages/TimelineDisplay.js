import TimeLineLogic from "../components/TimeLineLogic";

const items = [
    {
      id: 1,
      date: "Borthday",
      description: "Happy Born Day!",
    },
    {
      id: 2,
      date: "Step 2",
      description: "This is the second step",
    },
    {
      id: 3,
      date: "Step 3",
      description: "This is the third step",
    },
  ];

const TimelineDisplay = () => {
    return (
        <div>
            <TimeLineLogic items={items} />
        </div>
    )
}

export default TimelineDisplay;