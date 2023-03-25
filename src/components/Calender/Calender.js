import { Calendar } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar1 = ({ workouts }) => {
  const events = workouts.map((workout) => ({
    title: workout.name,
    start: new Date(workout.date),
    end: new Date(workout.date),
    allDay: true,
  }));

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar1;
