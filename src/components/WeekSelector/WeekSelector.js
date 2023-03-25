function WeekSelector({ selectedWeek, setSelectedWeek }) {
  const handleChange = (event) => {
    setSelectedWeek(Number(event.target.value));
  };

  return (
    <div className="week-selector">
      <label htmlFor="week">Select week:</label>
      <select id="week" value={selectedWeek} onChange={handleChange}>
        <option value={1}>Week 1</option>
        <option value={2}>Week 2</option>
        {/* add more options for more weeks */}
      </select>
    </div>
  );
}

export default WeekSelector;
