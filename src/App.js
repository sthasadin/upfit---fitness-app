import { useState } from "react";
// import Header from "./components/Header";
import WeekSelector from "./components/WeekSelector/WeekSelector";
import DayList from "./components/WeekSelector/DayList";
import "./App.css";

const weeks = [
  {
    id: 1,
    days: [
      {
        id: 1,
        name: "Monday",
        exercises: [
          {
            id: 1,
            name: "Treadmill 7mins (warmup)",
            sets: [],
          },
          {
            id: 2,
            name: "Machine Leg Extension",
            sets: [{ sets: 3, reps: 20, weight: 40 }],
          },
          {
            id: 3,
            name: "Machine Leg Curls",
            sets: [{ sets: 3, reps: 20, weight: 80 }],
          },
          {
            id: 4,
            name: "Leg Press",
            sets: [{ sets: 2, reps: 20, weight: 80 }],
          },
          {
            id: 5,
            name: "Goblet Squats",
            sets: [{ sets: 2, reps: 20, weight: 80 }],
          },
          {
            id: 6,
            name: "Calves",
            sets: [{ sets: 3, reps: 20, weight: "-" }],
          },
          {
            id: 7,
            name: "Smith Machine But Bridge",
            sets: [{ sets: 3, reps: 20, weight: "-" }],
          },
          {
            id: 8,
            name: "Treadmill (5 mins)",
            sets: [],
          },
          {
            id: 9,
            name: "Streaching & Cool down",
            sets: [],
          },
          // ... add more exercises
        ],
      },
      {
        id: 2,
        name: "Tuesday",
        exercises: [
          {
            id: 1,
            name: "Treadmill (5 mins)",
            sets: [],
          },
          {
            id: 2,
            name: "Floor Push Up",
            sets: [{ sets: 2, reps: 15, weight: "-" }],
          },
          {
            id: 2,
            name: "Incline Chest Press",
            sets: [{ sets: 3, reps: 20, weight: "20" }],
          },
        ],
      },
      {
        id: 3,
        name: "Wednesday",
        exercises: [
          // ... add exercises for Tuesday
        ],
      },
      {
        id: 4,
        name: "Thrusday",
        exercises: [
          // ... add exercises for Tuesday
        ],
      },
      {
        id: 5,
        name: "Friday",
        exercises: [
          // ... add exercises for Tuesday
        ],
      },
      {
        id: 6,
        name: "Saturday",
        exercises: [
          // ... add exercises for Tuesday
        ],
      },
      // ... add more days
    ],
  },
  {
    id: 2,
    days: [
      // ... add days for week 2
    ],
  },
  // ... add more weeks
];

function App() {
  const [selectedWeek, setSelectedWeek] = useState(1);

  return (
    <div className="App">
      {/* <Header /> */}
      <WeekSelector
        selectedWeek={selectedWeek}
        setSelectedWeek={setSelectedWeek}
      />
      <DayList selectedWeek={selectedWeek} weeks={weeks} />
    </div>
  );
}

export default App;
