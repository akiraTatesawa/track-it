import axios from "axios";
import { useState } from "react";
import {
  CancelButton,
  HabitCreationBox,
  SubmitButton,
  WeekdayButton,
} from "./HabitsStyle";

const CreationHabitBox = ({
  isOpen,
  setIsOpen,
  newHabit,
  setNewHabit,
  token,
  reload,
}) => {
  const weekdaysArray = ["D", "S", "T", "Q", "Q", "S", "S"];
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  const WeekDay = ({ index, day }) => {
    const [isSelected, setIsSelected] = useState(false);
    function addDays(e) {
      if (newHabit.days.some((day) => e.target.id === day)) {
        const array = newHabit.days.filter((day) => day !== e.target.id);
        setNewHabit({ ...newHabit, days: array });
        setIsSelected(false);
      } else {
        setNewHabit({ ...newHabit, days: [...newHabit.days, e.target.id] });
        setIsSelected(true);
      }
    }
    return (
      <WeekdayButton
        type="button"
        id={index}
        value={day}
        onClick={addDays}
        isSelected={isSelected}
      ></WeekdayButton>
    );
  };

  const mountWeekdays = () => {
    const weekdays = weekdaysArray.map((day, index) => (
      <WeekDay index={index} key={index} day={day} />
    ));
    return weekdays;
  };

  const weekdays = mountWeekdays();

  function registerHabitsName(e) {
    setNewHabit({ ...newHabit, name: e.target.value });
  }

  function registerNewHabit(e) {
    e.preventDefault();
    if (newHabit.days.length === 0) {
      alert("Selecione pelo menos um dia!");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.post(URL, newHabit, config);
      promise
        .then(() => {
          setIsOpen(false);
          setNewHabit({ ...newHabit, name: "", days: [...newHabit.days, []] });
          reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <HabitCreationBox isOpen={isOpen}>
      <form onSubmit={registerNewHabit}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={newHabit.name || ""}
          onChange={registerHabitsName}
          required
        ></input>
        {weekdays}
        <CancelButton
          type="button"
          value="Cancelar"
          onClick={() => setIsOpen(false)}
        ></CancelButton>
        <SubmitButton type="submit" value="Salvar"></SubmitButton>
      </form>
    </HabitCreationBox>
  );
};

export default CreationHabitBox;
