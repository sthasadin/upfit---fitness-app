import Exercise from "./Exercise";

function WorkoutDay(props) {
  const { day, exercises } = props;

  return (
    <section>
      <h2>{day}</h2>
      <ul>
        {exercises.map((exercise) => (
          <Exercise key={exercise.id} exercise={exercise} />
        ))}
      </ul>
    </section>
  );
}

export default WorkoutDay;
