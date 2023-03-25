import Day from "./Day";

function DayList({ selectedWeek, weeks }) {
  const week = weeks.find((w) => w.id === selectedWeek);

  return (
    <div className="day-list">
      {week.days.map((day) => (
        <Day key={day.id} day={day} />
      ))}
    </div>
  );
}

export default DayList;
