import React from "react";

const WorkoutPlan = ({ workout }) => {
  return (
    <div>
      <h2>{workout.name}</h2>
      <h3>Muscles worked: {workout.muscles}</h3>
      <ul>
        {workout.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name}- {exercise.reps} X{exercise.reps}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WorkoutPlan;
