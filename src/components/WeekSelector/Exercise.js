import React, { useState, useEffect } from "react";
import "../WeekSelector/exercise.css";

function Exercise({ day, selectedWeek, database }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const dbRef = database.ref(`${selectedWeek}/${day}`);
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const exercises = data ? Object.values(data) : [];
      setExercises(exercises);
    });

    return () => dbRef.off();
  }, [day, selectedWeek, database]);

  return (
    <div className="exerciseWrapper">
      <h2>{day}</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} - {exercise.sets}x{exercise.reps}x{exercise.weight}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise;
