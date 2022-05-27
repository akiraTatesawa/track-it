import { WeekdayButton } from "./HabitsStyle";

const WeekDay = ({
  id,
  day,
  isSelected,
  setWeekdaysArray,
  weekdaysArray,
  newHabit,
  setNewHabit,
  isLoading,
}) => {
  function updateWeekdayButton(DayButton) {
    if (id === DayButton.id && DayButton.isSelected) {
      return { day: day, isSelected: false, id: id };
    } else if (id === DayButton.id && !DayButton.isSelected) {
      return { day: day, isSelected: true, id: id };
    } else {
      return DayButton;
    }
  }

  function addDays(e) {
    if (newHabit.days.some((day) => e.target.id === day)) {
      const array = newHabit.days.filter((day) => day !== e.target.id);
      setNewHabit({ ...newHabit, days: array });
    } else {
      setNewHabit({ ...newHabit, days: [...newHabit.days, e.target.id] });
    }
    setWeekdaysArray(weekdaysArray.map((item) => updateWeekdayButton(item)));
  }

  return (
    <WeekdayButton
      type="button"
      id={id}
      value={day}
      onClick={addDays}
      isSelected={isSelected}
      disabled={isLoading}
    ></WeekdayButton>
  );
};

export default WeekDay;
