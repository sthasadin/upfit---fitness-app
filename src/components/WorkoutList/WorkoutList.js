import React from "react";
import WorkoutPlan from "../WorkoutPlan/Workoutplan";

const WorkoutList = ({ workouts, onWorkoutComplete }) => {
  return (
    <div>
      {workouts.map((workout) => (
        <div key={workout.name}>
          <WorkoutPlan workout={workout} />
          <button onClick={() => onWorkoutComplete(workout)}>
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
