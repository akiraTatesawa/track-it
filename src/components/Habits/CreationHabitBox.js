import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

import {
  CancelButton,
  HabitCreationBox,
  SubmitButton,
  WeekdayButton,
} from "./HabitsStyle";

const WeekDay = ({ index, day, newHabit, setNewHabit, isLoading, reset, setReset }) => {
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

  function checkReset() {
    if (reset) {
      setIsSelected(false);
    }
    setReset(false)
  }

  useEffect(() => {
    checkReset();
    console.log("Rodei o effect")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset])

  return (
    <WeekdayButton
      type="button"
      id={index}
      value={day}
      onClick={addDays}
      isSelected={isSelected}
      disabled={isLoading}
    ></WeekdayButton>
  );
};

const CreationHabitBox = ({
  isOpen,
  setIsOpen,
  newHabit,
  setNewHabit,
  token,
  reload,
}) => {
  const weekdaysArray = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [isLoading, setIsLoading] = useState(false);
  const [reset, setReset] = useState(false)

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  function registerHabitsName(e) {
    setNewHabit({ ...newHabit, name: e.target.value });
  }

  function registerNewHabit(e) {
    e.preventDefault();
    if (newHabit.days.length === 0) {
      alert("Selecione pelo menos um dia!");
    } else {
      setIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.post(URL, newHabit, config);
      promise
        .then(() => {
          setIsLoading(false);
          setIsOpen(false);
          setReset(true);
          setNewHabit({ ...newHabit, name: "", days: [] });
          reload();
        })
        .catch(() => {
          setIsLoading(false);
          alert("Falha ao criar hábito! Tente novamente");
          reload();
        });
    }
  }

  function mountWeekdays() {
    const weekdays = weekdaysArray.map((day, index) => (
      <WeekDay
        index={index}
        key={index}
        day={day}
        setNewHabit={setNewHabit}
        newHabit={newHabit}
        isLoading={isLoading}
        reset={reset}
        setReset={setReset}
      />
    ));
    return weekdays;
  }

  function changeSubmitButtonContent() {
    if (isLoading) {
      return (
        <div>
          <ThreeDots color="#ffffff" height={20} width={50} />
        </div>
      );
    } else {
      return "Salvar";
    }
  }

  const buttonContent = changeSubmitButtonContent();
  const weekdays = mountWeekdays();

  return (
    <HabitCreationBox isOpen={isOpen}>
      <form onSubmit={registerNewHabit}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={newHabit.name || ""}
          onChange={registerHabitsName}
          disabled={isLoading}
          required
        ></input>

        {weekdays}

        <CancelButton
          type="button"
          value="Cancelar"
          onClick={() => setIsOpen(false)}
        ></CancelButton>

        <SubmitButton type="submit" disabled={isLoading}>
          {buttonContent}
        </SubmitButton>
      </form>
    </HabitCreationBox>
  );
};

export default CreationHabitBox;
