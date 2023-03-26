function Day({ day }) {
  return (
    <div className="day">
      <div className="dayWrapper">
        <h2 className="dayText">{day.name}</h2>

        <ul>
          {day.exercises.map((exercise) => (
            <li key={exercise.id}>
              <h3 className="exerciseText">{exercise.name}</h3>
              <ul>
                {exercise.sets.map((set) => (
                  <li
                    key={`${exercise.id}-${set.sets}-${set.reps}-${set.weight}`}
                  >
                    {set.sets} Sets x {set.reps} Reps x {set.weight}KG Weight
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Day;
